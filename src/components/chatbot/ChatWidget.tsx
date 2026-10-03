"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import RichText from "@/components/RichText";
import SimetIsotipo from "@/components/SimetIsotipo";
import { respond } from "./engine";
import { FALLBACK, WELCOME, whatsappLink, type BotReply, type ChatAction, type TopicId } from "./knowledge";

interface Message extends BotReply {
  id: number;
  from: "bot" | "user";
}

const TEASER_DELAY = 6000;
const TEASER_KEY = "simet-chat-visto";

const isMobile = () => window.matchMedia("(max-width: 520px)").matches;
const hasMouse = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function markSeen() {
  try {
    sessionStorage.setItem(TEASER_KEY, "1");
  } catch {
    // Almacenamiento bloqueado: el aviso podrá repetirse, sin más efecto
  }
}

function alreadySeen() {
  try {
    return sessionStorage.getItem(TEASER_KEY) === "1";
  } catch {
    return false;
  }
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ id: 0, from: "bot", ...WELCOME }]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [topic, setTopic] = useState<TopicId>();
  const [teaser, setTeaser] = useState(false);
  const [unread, setUnread] = useState(true);
  const nextId = useRef(1);
  const busy = useRef(false);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  // Invitación a conversar, una sola vez por sesión
  useEffect(() => {
    if (open) return;
    const timer = window.setTimeout(() => {
      if (alreadySeen()) return;
      markSeen();
      setTeaser(true);
    }, TEASER_DELAY);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    document.documentElement.classList.toggle("simet-chat-open", open);
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      launcherRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);

    // En pantallas táctiles no se enfoca solo: abriría el teclado y taparía la conversación
    const focusTimer = window.setTimeout(() => {
      if (hasMouse()) inputRef.current?.focus({ preventScroll: true });
    }, 250);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(focusTimer);
      document.documentElement.classList.remove("simet-chat-open");
    };
  }, [open]);

  useEffect(() => {
    const log = logRef.current;
    if (!log || !open) return;
    log.scrollTo({ top: log.scrollHeight, behavior: reducedMotion() ? "auto" : "smooth" });
  }, [messages, typing, open]);

  const openChat = () => {
    markSeen();
    setOpen(true);
    setTeaser(false);
    setUnread(false);
  };

  const closeChat = () => {
    setOpen(false);
    window.setTimeout(() => launcherRef.current?.focus(), 0);
  };

  const send = async (raw: string) => {
    const text = raw.trim();
    if (!text || busy.current) return;
    busy.current = true;

    const userMessage: Message = { id: nextId.current++, from: "user", text: [text] };
    setInput("");
    setMessages((list) => [...list, userMessage]);
    setTyping(true);

    let reply: BotReply;
    try {
      [reply] = await Promise.all([
        respond(text, { topic }),
        wait(reducedMotion() ? 150 : 600 + Math.min(text.length * 10, 500)),
      ]);
    } catch {
      reply = FALLBACK(topic);
    }

    const botMessage: Message = { id: nextId.current++, from: "bot", ...reply };
    if (reply.topic) setTopic(reply.topic);
    setMessages((list) => [...list, botMessage]);
    setTyping(false);
    busy.current = false;
  };

  // En móvil el chat ocupa la pantalla: al ir a otra sección se cierra para verla
  const onNavigate = () => {
    if (isMobile()) setOpen(false);
  };

  const last = messages[messages.length - 1];
  const suggestions = !typing && last.from === "bot" ? last.suggestions ?? [] : [];

  return (
    <div className={`simet-chat ${open ? "is-open" : ""}`}>
      <section
        id="simet-chat-panel"
        className="simet-chat-panel"
        role="dialog"
        aria-label="Chat con el asistente virtual de SIMET"
        inert={!open}
      >
        <header className="simet-chat-header">
          <div className="simet-chat-avatar">
            <SimetIsotipo size={30} className={typing ? "simet-isotipo--spin" : ""} />
          </div>
          <div className="simet-chat-header__text">
            <strong>Asistente SIMET</strong>
            <span className="simet-chat-status">En línea · Respuesta inmediata</span>
          </div>
          <button type="button" className="simet-chat-close" aria-label="Cerrar chat" onClick={closeChat}>
            <CloseIcon />
          </button>
        </header>

        <div className="simet-chat-log" ref={logRef} role="log" aria-live="polite">
          {messages.map((message) =>
            message.from === "user" ? (
              <div key={message.id} className="simet-chat-msg simet-chat-msg--user">
                <p className="simet-chat-bubble">{message.text[0]}</p>
              </div>
            ) : (
              <div key={message.id} className="simet-chat-msg simet-chat-msg--bot">
                <SimetIsotipo size={22} className="simet-chat-msg__avatar" />
                <div className="simet-chat-bubble">
                  {message.text.map((paragraph, i) => (
                    <p key={i}>
                      <RichText text={paragraph} />
                    </p>
                  ))}
                  {message.actions && (
                    <div className="simet-chat-actions">
                      {message.actions.map((action) => (
                        <ActionLink key={action.label} action={action} onNavigate={onNavigate} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          )}

          {typing && (
            <div className="simet-chat-msg simet-chat-msg--bot">
              <SimetIsotipo size={22} className="simet-chat-msg__avatar simet-isotipo--spin" />
              <div className="simet-chat-bubble simet-chat-typing">
                <span className="simet-sr-only">El asistente está escribiendo…</span>
                <i />
                <i />
                <i />
              </div>
            </div>
          )}

          {suggestions.length > 0 && (
            <div className="simet-chat-chips">
              {suggestions.map((s) => (
                <button key={s} type="button" className="simet-chat-chip" onClick={() => void send(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <form
          className="simet-chat-form"
          onSubmit={(e) => {
            e.preventDefault();
            void send(input);
          }}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu mensaje…"
            aria-label="Escribe tu mensaje"
            maxLength={400}
            autoComplete="off"
            enterKeyHint="send"
          />
          <button type="submit" className="simet-chat-send" aria-label="Enviar mensaje" disabled={!input.trim() || typing}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </form>
        <p className="simet-chat-note">
          Respuestas automáticas ·{" "}
          <a href={whatsappLink(topic)} target="_blank" rel="noopener noreferrer">
            Hablar con un asesor
          </a>
        </p>
      </section>

      {teaser && !open && (
        <div className="simet-chat-teaser">
          <button type="button" className="simet-chat-teaser__body" onClick={openChat}>
            <SimetIsotipo size={30} />
            <span>
              <strong>¿Necesitas una cotización?</strong>
              Te ayudo en segundos.
            </span>
          </button>
          <button
            type="button"
            className="simet-chat-teaser__close"
            aria-label="Cerrar aviso"
            onClick={() => setTeaser(false)}
          >
            <CloseIcon />
          </button>
        </div>
      )}

      <button
        ref={launcherRef}
        type="button"
        className={`simet-chat-launcher ${teaser ? "is-calling" : ""}`}
        aria-label={open ? "Cerrar chat" : "Abrir chat con el asistente de SIMET"}
        aria-expanded={open}
        aria-controls="simet-chat-panel"
        onClick={open ? closeChat : openChat}
      >
        <SimetIsotipo tone="light" size={38} className="simet-chat-launcher__logo" />
        <span className="simet-chat-launcher__close">
          <CloseIcon />
        </span>
        {unread && !open && (
          <span className="simet-chat-badge" aria-hidden="true">
            1
          </span>
        )}
      </button>
    </div>
  );
}

function ActionLink({ action, onNavigate }: { action: ChatAction; onNavigate: () => void }) {
  const className = `simet-chat-action simet-chat-action--${action.kind ?? "secondary"}`;
  const icon =
    action.kind === "whatsapp" ? (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
      </svg>
    ) : null;

  if (/^(https?:|tel:|mailto:)/.test(action.href)) {
    const newTab = action.href.startsWith("http");
    return (
      <a
        href={action.href}
        className={className}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {icon}
        {action.label}
      </a>
    );
  }

  return (
    <Link href={action.href} className={className} onClick={onNavigate}>
      {action.label}
    </Link>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );
}
