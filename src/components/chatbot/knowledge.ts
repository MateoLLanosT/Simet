/**
 * Base de conocimiento del asistente. Todo el contenido sale del propio sitio
 * (páginas de servicio, home, footer y formulario de contacto): si algo cambia
 * en la web, se actualiza aquí.
 */

export const SIMET = {
  telefonos: ["(317) 331 5892", "(317) 331 5890"],
  whatsapp: "573173315892",
  email: "atencionalcliente@simet.com.co",
  direccion: "Carrera 3 # 16-58, Mosquera, Cundinamarca",
  mapa: "https://www.google.com/maps/search/?api=1&query=Carrera+3+%2316-58+Mosquera+Cundinamarca",
  horario: "Lunes a viernes, 8:00 a.m. – 5:00 p.m.",
  respuesta: "menos de 24 horas hábiles",
  formatos: "PDF, DWG, STEP o STL (máx. 20 MB)",
};

export type TopicId = "cnc" | "laser" | "modelado3d" | "proyectos" | "asesoria" | "productos";

export const TOPIC_LABEL: Record<TopicId, string> = {
  cnc: "mecanizado CNC",
  laser: "corte láser",
  modelado3d: "diseño y modelado 3D",
  proyectos: "diseño de proyectos metalmecánicos",
  asesoria: "asesoría técnica en DFM y costos",
  productos: "productos metálicos personalizados",
};

export interface ChatAction {
  label: string;
  href: string;
  kind?: "primary" | "secondary" | "whatsapp";
}

export interface BotReply {
  /** Párrafos; admite **negrita** */
  text: string[];
  actions?: ChatAction[];
  suggestions?: string[];
  topic?: TopicId;
}

export const whatsappLink = (topic?: TopicId) => {
  const tema = topic ? TOPIC_LABEL[topic] : "sus servicios";
  const texto = `Hola SIMET, vengo del sitio web y quisiera información sobre ${tema}.`;
  return `https://wa.me/${SIMET.whatsapp}?text=${encodeURIComponent(texto)}`;
};

export const cotizarAction: ChatAction = { label: "Solicitar cotización", href: "/contacto", kind: "primary" };
export const whatsappAction = (topic?: TopicId): ChatAction => ({
  label: "Escribir por WhatsApp",
  href: whatsappLink(topic),
  kind: "whatsapp",
});

export const MAIN_SUGGESTIONS = ["Servicios", "Solicitar cotización", "Productos", "Horario y ubicación", "Hablar con un asesor"];

export const WELCOME: BotReply = {
  text: [
    "¡Hola! Soy el **asistente virtual de SIMET S.A.S.**",
    "Te ayudo con información de servicios, productos y cotizaciones. ¿Qué necesitas?",
  ],
  suggestions: MAIN_SUGGESTIONS,
};

export interface Intent {
  id: string;
  /** Raíces en minúscula y sin tildes; coinciden al inicio de palabra. Con "$" al final, solo palabra completa */
  keywords: string[];
  topic?: TopicId;
  reply: (topic?: TopicId) => BotReply;
}

const serviceReply = (topic: TopicId, text: string[], href?: string): BotReply => ({
  topic,
  text,
  actions: [
    ...(href ? [{ label: "Ver servicio", href, kind: "secondary" as const }] : []),
    cotizarAction,
  ],
  suggestions: ["Formatos de archivo", "Tiempo de respuesta", "Hablar con un asesor"],
});

export const INTENTS: Intent[] = [
  {
    id: "cotizacion",
    keywords: ["cotiz", "precio", "cuanto cuesta", "cuanto vale", "costo de", "presupuesto", "valor de", "tarifa"],
    reply: (topic) => ({
      topic,
      text: [
        topic
          ? `Con gusto preparamos tu cotización de **${TOPIC_LABEL[topic]}**.`
          : "Con gusto preparamos tu cotización.",
        `Completa el formulario con materiales, medidas, cantidades y plazos, y adjunta tu plano en ${SIMET.formatos}. Nuestro equipo técnico responde en **${SIMET.respuesta}**.`,
      ],
      actions: [cotizarAction, whatsappAction(topic)],
      suggestions: ["Formatos de archivo", "Servicios", "Horario y ubicación"],
    }),
  },
  {
    id: "cnc",
    topic: "cnc",
    keywords: ["cnc", "mecaniz", "maquinad", "torno", "tornead", "fresa", "fresad", "pieza", "repuesto", "reparacion", "mantenimiento"],
    reply: () =>
      serviceReply("cnc", [
        "Nuestro **Centro de Fabricación y Diseño CNC** hace mecanizado de precisión, fabricación de piezas especiales, diseño industrial, torno, fresa y reparación de maquinaria.",
        "Si tienes un plano o una muestra física, podemos fabricarla o reconstruirla.",
      ]),
  },
  {
    id: "laser",
    topic: "laser",
    keywords: ["laser", "corte", "cortar", "lamina", "chapa"],
    reply: () =>
      serviceReply("laser", [
        "Ofrecemos **corte láser de alta precisión** para proyectos industriales, arquitectónicos, publicitarios y decorativos.",
        "También fabricamos productos personalizados cortados con láser: llaveros, piezas decorativas, figuras y paneles.",
      ]),
  },
  {
    id: "modelado3d",
    topic: "modelado3d",
    keywords: ["3d", "modelad", "cad", "render", "ingenieria inversa", "parametric", "escane", "diseno de pieza"],
    reply: () =>
      serviceReply(
        "modelado3d",
        [
          "En **diseño y modelado 3D** hacemos ingeniería inversa de muestras físicas, modelado paramétrico, planos normalizados 2D bajo ISO/ASME con GD&T y renderizado para validación.",
          "Todo optimizado para mecanizado CNC y corte láser.",
        ],
        "/servicios/modelado-3d"
      ),
  },
  {
    id: "proyectos",
    topic: "proyectos",
    keywords: ["proyecto", "maquina", "maquinaria", "transportador", "banda", "automatiz", "neumatic", "retrofit", "utillaje", "jig", "fixture", "linea de produccion"],
    reply: () =>
      serviceReply(
        "proyectos",
        [
          "Diseñamos y construimos **proyectos metalmecánicos a la medida**: sistemas de transporte industrial, dispositivos de ensamble y utillajes, automatización mecánica y neumática, y modernización (retrofit) de maquinaria.",
        ],
        "/servicios/diseno-proyectos"
      ),
  },
  {
    id: "asesoria",
    topic: "asesoria",
    keywords: ["asesor tecnic", "asesoria", "dfm", "optimiz", "reducir costo", "tolerancia", "fabricabilidad", "revision de plano"],
    reply: () =>
      serviceReply(
        "asesoria",
        [
          "Con la **asesoría técnica en DFM** revisamos tus diseños para bajar costos y evitar retrabajos: racionalización de tolerancias (GD&T), optimización geométrica para CNC y láser, selección de materiales y definición de la ruta de fabricación.",
        ],
        "/servicios/asesoria-dfm"
      ),
  },
  {
    id: "servicios",
    keywords: ["servicio", "que hacen", "que ofrecen", "a que se dedican", "catalogo"],
    reply: () => ({
      text: [
        "Estos son nuestros servicios:",
        "• **Mecanizado CNC**: torno, fresa y piezas especiales\n• **Corte láser** de alta precisión\n• **Diseño y modelado 3D**\n• **Diseño de proyectos** metalmecánicos\n• **Asesoría técnica** en DFM y costos",
        "¿Sobre cuál quieres saber más?",
      ],
      suggestions: ["Mecanizado CNC", "Corte láser", "Modelado 3D", "Diseño de proyectos", "Asesoría DFM"],
    }),
  },
  {
    id: "productos",
    topic: "productos",
    keywords: ["producto", "llavero", "decorac", "decorativ", "figura", "panel", "regalo", "personaliz", "souvenir"],
    reply: () => ({
      topic: "productos",
      text: [
        "Fabricamos **productos metálicos a la medida**: llaveros personalizados, piezas decorativas en metal, figuras dimensionales y paneles decorativos para arquitectura e interiorismo.",
      ],
      actions: [{ label: "Ver productos", href: "/#productos", kind: "secondary" }, cotizarAction],
      suggestions: ["Corte láser", "Solicitar cotización", "Hablar con un asesor"],
    }),
  },
  {
    id: "industrias",
    keywords: ["industria", "sector", "alimento", "bebida", "plastic", "empaque", "automotri", "construccion", "publicidad"],
    reply: () => ({
      text: [
        "Atendemos a la industria de **alimentos y bebidas**, **plásticos y empaques** y **automotriz**, además de construcción, publicidad y otros sectores.",
        "Por ejemplo: líneas sanitarias en acero inoxidable, moldes y herramentales, utillajes y galgas de verificación.",
      ],
      actions: [{ label: "Ver sectores", href: "/#sectores", kind: "secondary" }],
      suggestions: ["Servicios", "Solicitar cotización"],
    }),
  },
  {
    id: "materiales",
    keywords: ["material", "acero", "inoxidable", "aluminio", "metal$", "metales$", "nylon", "delrin", "ptfe", "polimero"],
    reply: (topic) => ({
      topic,
      text: [
        "En nuestros proyectos trabajamos con aceros comerciales como **1045 y 4140**, inoxidables **AISI 304/316** y polímeros técnicos como **Nylon, POM (Delrin) y PTFE**.",
        "Para confirmar un material o espesor específico, cuéntanos tu requerimiento.",
      ],
      actions: [cotizarAction],
      suggestions: ["Asesoría DFM", "Hablar con un asesor"],
    }),
  },
  {
    id: "archivos",
    keywords: ["archivo", "adjunt", "plano", "dwg", "step", "stl", "pdf", "formato", "enviar diseno"],
    reply: (topic) => ({
      topic,
      text: [
        `Puedes adjuntar tu plano o modelo en **${SIMET.formatos}** directamente en el formulario de cotización.`,
        "Si solo tienes una muestra física, también podemos hacer el levantamiento dimensional.",
      ],
      actions: [cotizarAction],
      suggestions: ["Tiempo de respuesta", "Modelado 3D"],
    }),
  },
  {
    id: "tiempos",
    keywords: ["tiempo", "tarda", "demora", "plazo", "entrega", "rapido", "urgente"],
    reply: (topic) => ({
      topic,
      text: [
        `Respondemos cada solicitud en **${SIMET.respuesta}**. El tiempo de fabricación depende del proyecto y lo indicamos en la cotización.`,
        "Si es urgente, escríbenos por WhatsApp.",
      ],
      actions: [whatsappAction(topic), cotizarAction],
    }),
  },
  {
    id: "horario",
    keywords: ["horario", "hora$", "abren", "atienden", "cierran", "sabado", "domingo"],
    reply: () => ({
      text: [`Nuestro horario de atención es **${SIMET.horario}**.`, `Estamos en ${SIMET.direccion}.`],
      actions: [{ label: "Cómo llegar", href: SIMET.mapa, kind: "secondary" }],
      suggestions: ["Contacto", "Solicitar cotización"],
    }),
  },
  {
    id: "ubicacion",
    keywords: ["ubicacion", "direccion", "donde", "mosquera", "llegar", "visitar", "sede"],
    reply: () => ({
      text: [`Estamos en **${SIMET.direccion}**.`, `Atendemos ${SIMET.horario.toLowerCase()}.`],
      actions: [{ label: "Cómo llegar", href: SIMET.mapa, kind: "secondary" }],
      suggestions: ["Contacto", "Solicitar cotización"],
    }),
  },
  {
    id: "contacto",
    keywords: ["contact", "telefono", "llamar", "celular", "numero", "correo", "email", "mail", "whatsapp"],
    reply: (topic) => ({
      topic,
      text: [
        `📞 **${SIMET.telefonos.join(" – ")}**`,
        `✉️ **${SIMET.email}**`,
        `Horario: ${SIMET.horario}.`,
      ],
      actions: [whatsappAction(topic), { label: "Llamar", href: "tel:+573173315892", kind: "secondary" }],
    }),
  },
  {
    id: "asesor",
    keywords: ["asesor$", "asesores$", "humano", "persona$", "agente", "ingeniero$", "vendedor"],
    reply: (topic) => ({
      topic,
      text: ["Claro, un asesor de SIMET puede atenderte directamente por WhatsApp o por teléfono en horario laboral."],
      actions: [whatsappAction(topic), { label: "Llamar", href: "tel:+573173315892", kind: "secondary" }],
    }),
  },
  {
    id: "empresa",
    keywords: ["quienes", "empresa", "experiencia", "anos$", "trayectoria", "nosotros", "confianza"],
    reply: () => ({
      text: [
        "**SIMET S.A.S.** tiene más de **25 años de experiencia** en ingeniería mecánica, mantenimiento industrial, mecanizado CNC, torno, fresa, diseño y fabricación de piezas especiales y corte láser.",
        "Trabajamos con altos estándares de calidad y seguridad, con acompañamiento técnico desde el diseño hasta la entrega.",
      ],
      actions: [{ label: "Conócenos", href: "/#conocenos", kind: "secondary" }],
      suggestions: ["Servicios", "Solicitar cotización"],
    }),
  },
  {
    id: "saludo",
    keywords: ["hola", "buenas", "buenos dias", "buen dia", "saludos", "hey", "que tal"],
    reply: () => ({
      text: ["¡Hola! 👋 ¿En qué te puedo ayudar hoy?"],
      suggestions: MAIN_SUGGESTIONS,
    }),
  },
  {
    id: "gracias",
    keywords: ["gracias", "muy amable", "perfecto", "excelente", "listo"],
    reply: () => ({
      text: ["¡Con gusto! Si necesitas algo más, aquí estoy."],
      suggestions: ["Solicitar cotización", "Servicios"],
    }),
  },
  {
    id: "despedida",
    keywords: ["adios", "chao", "hasta luego", "nos vemos", "bye"],
    reply: () => ({
      text: ["¡Gracias por visitar SIMET! Que tengas un excelente día."],
    }),
  },
];

export const FALLBACK = (topic?: TopicId): BotReply => ({
  topic,
  text: [
    "Aún no tengo una respuesta precisa para eso.",
    "Puedo ayudarte con **servicios, cotizaciones, productos, horario o ubicación**. Si prefieres, un asesor te atiende por WhatsApp.",
  ],
  actions: [whatsappAction(topic)],
  suggestions: MAIN_SUGGESTIONS,
});
