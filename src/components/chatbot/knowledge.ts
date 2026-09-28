import { PLAN_FORMATS } from "../../lib/quote-validation";

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
  formatos: PLAN_FORMATS,
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

export const MAIN_SUGGESTIONS = ["Portafolio de servicios", "Sectores productivos", "Solicitar cotización", "Productos", "Horario y ubicación", "Hablar con un asesor"];
export const SERVICE_SUGGESTIONS = ["Mecanizado CNC", "Corte láser", "Modelado 3D", "Diseño de proyectos", "Asesoría DFM"];
export const SECTOR_SUGGESTIONS = ["Alimentos y bebidas", "Plásticos y empaques", "Automotriz", "Otros sectores"];

export const WELCOME: BotReply = {
  text: [
    "¡Hola! Soy el **asistente virtual de SIMET S.A.S.**",
    "Te ayudo con información de servicios, productos y cotizaciones. ¿Qué necesitas?",
  ],
  suggestions: MAIN_SUGGESTIONS,
};

export interface Intent {
  id: string;
  /** Selecciones exactas de botones: tienen prioridad sobre palabras clave. */
  selections?: string[];
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
  suggestions: ["Formatos de archivo", "Tiempo de respuesta", "Hablar con un asesor", "Portafolio de servicios", "Sectores productivos", "Menú principal"],
});

export const INTENTS: Intent[] = [
  {
    id: "menu",
    selections: ["Menú principal"],
    keywords: ["menu", "volver", "inicio"],
    reply: () => ({ text: ["¿Qué deseas consultar?"], suggestions: MAIN_SUGGESTIONS }),
  },
  ...SECTOR_SUGGESTIONS.map((sector, index): Intent => ({
    id: `sector-${index}`,
    selections: [sector],
    keywords: [["alimento", "bebida"], ["plastic", "empaque"], ["automotri"], ["otros sectores", "construccion", "publicidad"]][index],
    reply: () => ({
      text: [`Seleccionaste **${sector}**. ¿Qué servicio necesitas para tu proyecto?`],
      suggestions: [...SERVICE_SUGGESTIONS, "Sectores productivos", "Menú principal"],
    }),
  })),
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
    selections: ["Mecanizado CNC"],
    topic: "cnc",
    keywords: ["cnc", "mecaniz", "maquinad", "torno", "tornead", "fresa", "fresad", "pieza", "repuesto", "reparacion", "mantenimiento", "rectific", "mandrin", "buje"],
    reply: () =>
      serviceReply(
        "cnc",
        [
          "Nuestro **Centro de Mecanizado, Torno y Fresado CNC** fabrica piezas de alta complejidad dimensional con tolerancias de **±0.01 mm**: fresado en 3 y 4 ejes, torneado CNC y convencional, repuestos especiales a partir de muestra física, y recuperación y rectificado de conjuntos mecánicos.",
          "Trabajamos series cortas, medianas y de producción continua. Si tienes un plano o una muestra física, podemos fabricarla o reconstruirla.",
        ],
        "/servicios/mecanizado-cnc"
      ),
  },
  {
    id: "laser",
    selections: ["Corte láser"],
    topic: "laser",
    keywords: ["laser", "corte", "cortar", "lamina", "chapa", "fibra", "nesting", "celosia"],
    reply: () =>
      serviceReply(
        "laser",
        [
          "Cortamos lámina metálica con **fibra láser CNC**: bordes limpios sin rebaba, ranurados exactos y precisión de **±0.05 mm**, para proyectos industriales, arquitectónicos, publicitarios y decorativos.",
          "Procesamos planos en DXF, DWG o STEP con anidado (nesting) para reducir el costo por pieza, desde una sola unidad hasta lotes de miles.",
        ],
        "/servicios/corte-laser"
      ),
  },
  {
    id: "modelado3d",
    selections: ["Modelado 3D"],
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
    selections: ["Diseño de proyectos"],
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
    selections: ["Asesoría DFM"],
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
    selections: ["Portafolio de servicios", "Servicios"],
    keywords: ["portafolio", "servicio", "que hacen", "que ofrecen", "a que se dedican", "catalogo"],
    reply: () => ({
      text: [
        "Estos son nuestros servicios:",
        "• **Mecanizado CNC**: torno, fresa y piezas especiales\n• **Corte láser** de alta precisión\n• **Diseño y modelado 3D**\n• **Diseño de proyectos** metalmecánicos\n• **Asesoría técnica** en DFM y costos",
        "¿Sobre cuál quieres saber más?",
      ],
      suggestions: [...SERVICE_SUGGESTIONS, "Sectores productivos", "Menú principal"],
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
    selections: ["Sectores productivos"],
    keywords: ["industria", "sector"],
    reply: () => ({
      text: [
        "Atendemos a la industria de **alimentos y bebidas**, **plásticos y empaques** y **automotriz**, además de construcción, publicidad y otros sectores.",
        "Por ejemplo: líneas sanitarias en acero inoxidable, moldes y herramentales, utillajes y galgas de verificación.",
      ],
      actions: [{ label: "Ver sectores", href: "/#sectores", kind: "secondary" }],
      suggestions: [...SECTOR_SUGGESTIONS, "Portafolio de servicios", "Menú principal"],
    }),
  },
  {
    id: "materiales",
    keywords: ["material", "acero", "inoxidable", "aluminio", "metal$", "metales$", "nylon", "delrin", "ptfe", "teflon", "polimero", "bronce", "laton", "uhmw"],
    reply: (topic) => ({
      topic,
      text: [
        "En mecanizado CNC trabajamos aceros al carbono y bonificados (**1020, 1045, 4140, 8620**), inoxidables (**AISI 304, 316L, 410, 420**), polímeros técnicos (**Nylon 6, POM/Delrin, PTFE, UHMW-PE**) y no ferrosos (**aluminio 6000/7000, bronce y latón**).",
        "En corte láser cortamos acero al carbono, acero inoxidable y aluminio.",
      ],
      actions: [{ label: "Ver mecanizado CNC", href: "/servicios/mecanizado-cnc", kind: "secondary" }, cotizarAction],
      suggestions: ["Espesores de corte láser", "Asesoría DFM", "Hablar con un asesor"],
    }),
  },
  {
    id: "espesores",
    topic: "laser",
    keywords: ["espesor", "calibre", "grosor", "milimetro", "tamano de lamina", "formato de lamina"],
    reply: () => ({
      topic: "laser",
      text: [
        "Estas son nuestras capacidades de **corte láser**:",
        "• Acero al carbono (HR / CR): **hasta 16 mm**\n• Acero inoxidable 304 / 316: **hasta 10 mm**\n• Aluminio: **hasta 6 mm**\n• Láminas de hasta **1500 x 3000 mm**",
      ],
      actions: [{ label: "Ver corte láser", href: "/servicios/corte-laser", kind: "secondary" }, cotizarAction],
      suggestions: ["Formatos de archivo", "Materiales", "Hablar con un asesor"],
    }),
  },
  {
    id: "archivos",
    keywords: ["archivo", "adjunt", "plano", "dwg", "dxf", "step", "stp", "stl", "pdf", "formato", "enviar diseno"],
    reply: (topic) => ({
      topic,
      text: [
        `Puedes adjuntar tu plano o modelo en **${SIMET.formatos}** directamente en el formulario de cotización.`,
        "También puedes confirmar que tienes planos y los enviarás después, o indicar que aún no tienes planos técnicos.",
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
