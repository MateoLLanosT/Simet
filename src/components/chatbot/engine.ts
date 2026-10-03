import {
  FALLBACK,
  INTENTS,
  MAIN_SUGGESTIONS,
  cotizarAction,
  whatsappAction,
  type BotReply,
  type Intent,
  type TopicId,
} from "./knowledge";

export interface ChatContext {
  /** Último servicio del que se habló; da contexto a "quiero cotizar" o "¿tienen WhatsApp?" */
  topic?: TopicId;
}

// Estas intenciones ganan aunque el mensaje mencione además un servicio:
// "¿cuánto cuesta el corte láser?" es una cotización de corte láser, y
// "¿qué espesor de inoxidable cortan?" pide la tabla de espesores, no materiales.
const PRIORITY = ["asesor", "cotizacion", "espesores"];

export function normalize(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function matches(text: string, keyword: string) {
  const whole = keyword.endsWith("$");
  const stem = whole ? keyword.slice(0, -1) : keyword;
  return new RegExp(`(^| )${stem}${whole ? "( |$)" : ""}`).test(text);
}

/** Suma la longitud de las coincidencias: una raíz más larga es más específica. */
function score(intent: Intent, text: string) {
  return intent.keywords.reduce((total, kw) => (matches(text, kw) ? total + kw.length : total), 0);
}

/**
 * Lo que las reglas no entienden se consulta a la IA (Gemini, vía /api/chat).
 * Si la IA no está configurada, se agotó la cuota o falla, queda la respuesta de siempre.
 */
async function askAI(message: string, topic?: TopicId): Promise<BotReply> {
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, topic }),
    });
    if (!res.ok) return FALLBACK(topic);
    const { text } = (await res.json()) as { text?: string };
    if (!text) return FALLBACK(topic);
    return {
      topic,
      text: text.split(/\n+/).filter(Boolean),
      actions: [cotizarAction, whatsappAction(topic)],
      suggestions: MAIN_SUGGESTIONS,
    };
  } catch {
    return FALLBACK(topic);
  }
}

/**
 * Responde con reglas sobre la base de conocimiento del sitio; las preguntas
 * que no reconoce las pasa a la IA.
 */
export async function respond(message: string, context: ChatContext): Promise<BotReply> {
  const text = normalize(message);
  const selection = INTENTS.find((intent) => intent.selections?.some((label) => normalize(label) === text));
  if (selection) return selection.reply(selection.topic ?? context.topic);
  const ranked = INTENTS.map((intent) => ({ intent, score: score(intent, text) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);

  if (ranked.length === 0) return askAI(message, context.topic);

  const prioritized = PRIORITY.map((id) => ranked.find((r) => r.intent.id === id)).find(Boolean);
  const chosen = (prioritized ?? ranked[0]).intent;
  const topic = chosen.topic ?? ranked.find((r) => r.intent.topic)?.intent.topic ?? context.topic;

  return chosen.reply(topic);
}
