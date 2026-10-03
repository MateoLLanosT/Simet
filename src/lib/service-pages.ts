import type { IconName } from "@/components/icons";
import { images } from "@/lib/images";

/**
 * Contenido de las páginas de servicio. Lo usan las páginas (vía ServiceDetail)
 * y el asistente con IA (/api/chat): al editar un servicio aquí se actualizan
 * la web y las respuestas del chat a la vez.
 */

export interface Feature {
  icon?: IconName;
  /** Etiqueta destacada sobre el título, p. ej. "Torno CNC" o "Hasta 16 mm" */
  tag?: string;
  title: string;
  desc: string;
}

interface Section {
  /** Ancla para enlazar la sección desde el hero */
  id?: string;
  eyebrow?: string;
  heading: string;
  items: Feature[];
}

export interface ServicePageContent {
  eyebrow?: string;
  title: string;
  lead: string;
  ctaLabel: string;
  /** Enlace secundario del hero hacia una sección de la misma página */
  secondaryCta?: { label: string; href: string };
  intro: {
    eyebrow?: string;
    heading: string;
    /** Párrafos; admite **negrita** */
    body: string[];
    /** Puntos clave con check, bajo el texto */
    highlights?: string[];
    image: string;
    imageAlt: string;
    imageFirst?: boolean;
    /** Ficha sobre la foto */
    caption?: { eyebrow: string; title: string; badge?: string };
  };
  features: Section;
  /** Segunda grilla (sectores, materiales, espesores…). Sin título, "Sectores Industriales de Aplicación" */
  secondary: Omit<Section, "heading"> & { heading?: string };
  banner: { heading: string; text: string; cta?: string };
}

export interface ServicePage {
  metadata: { title: string; description: string };
  content: ServicePageContent;
}

export type ServiceSlug = "mecanizado-cnc" | "corte-laser" | "modelado-3d" | "diseno-proyectos" | "asesoria-dfm";

export const servicePages: Record<ServiceSlug, ServicePage> = {
  "mecanizado-cnc": {
    metadata: {
      title: "Mecanizado y Torno CNC de Precisión | SIMET S.A.S.",
      description:
        "Mecanizado CNC, fresado multiejes, torneado y fabricación de piezas especiales con tolerancias milimétricas.",
    },
    content: {
      eyebrow: "FABRICACIÓN & MAQUINADO INDUSTRIAL",
      title: "Centro de Mecanizado, Torno y Fresado CNC de Precisión",
      lead: "Fabricamos piezas de alta complejidad dimensional con acabados controlados y tolerancias milimétricas en series cortas, medianas y de producción continua.",
      ctaLabel: "Cotizar Mecanizado CNC",
      secondaryCta: { label: "Ver Equipos y Capacidades", href: "#capacidades" },
      intro: {
        eyebrow: "CALIDAD Y METROLOGÍA",
        heading: "Maquinado exacto bajo rigurosas tolerancias ISO",
        body: [
          "En **SIMET S.A.S.** integramos centros de mecanizado CNC y tornos paralelos operados por técnicos especializados con más de dos décadas en la industria metalmecánica.",
          "Garantizamos repetibilidad absoluta en lotes de producción y entrega de certificados de verificación dimensional, asegurando un ensamble fluido sin fricciones ni ajustes manuales de taller.",
        ],
        highlights: ["Tolerancias de ±0.01 mm", "Control de rugosidad Ra", "Tratamientos Térmicos"],
        image: images.cnc,
        imageAlt: "Torno CNC mecanizando una pieza cilíndrica con refrigerante",
        caption: { eyebrow: "MAQUINADO CERTIFICADO", title: "Piezas críticas y herramentales", badge: "Tolerancia H7" },
      },
      features: {
        id: "capacidades",
        eyebrow: "CAPACIDADES DE PLANTA",
        heading: "Nuestras Soluciones de Mecanizado",
        items: [
          {
            icon: "cube",
            tag: "Fresado 3 & 4 Ejes",
            title: "Centros de Mecanizado Vertical CNC",
            desc: "Fresado y barrenado de alta velocidad para piezas prismáticas, cajas de engranajes y matrices con tolerancias de ±0.01 mm.",
          },
          {
            icon: "gear",
            tag: "Torno CNC",
            title: "Torneado CNC y Convencional",
            desc: "Mecanizado cilíndrico de ejes, bujes, bridas y roscas especiales de gran longitud en aceros tratados y aleaciones especiales.",
          },
          {
            icon: "document",
            tag: "Piezas a la Medida",
            title: "Fabricación de Repuestos Especiales",
            desc: "Duplicación exacta de piezas importadas o fuera de catálogo a partir de muestra física con tratamientos térmicos incluidos.",
          },
          {
            icon: "monitor",
            tag: "Mantenimiento Industrial",
            title: "Recuperación y Rectificado",
            desc: "Restauración de alojamientos de rodamientos, encamisados, mandrinado y balanceo dinámico de conjuntos mecánicos.",
          },
        ],
      },
      secondary: {
        eyebrow: "AMPLIO STOCK",
        heading: "Materiales que Mecanizamos",
        items: [
          { title: "Aceros al Carbono & Bonificados", desc: "1020, 1045, 4140, 8620 con temple o cementación." },
          { title: "Aceros Inoxidables", desc: "AISI 304, 316L, 410, 420 grado sanitario y quirúrgico." },
          { title: "Polímeros Técnicos", desc: "Nylon 6, POM (Delrin), PTFE (Teflón), UHMW-PE." },
          { title: "Metales No Ferrosos", desc: "Aluminio serie 6000/7000, bronces fosforados y latón." },
        ],
      },
      banner: {
        heading: "¿Necesita cotizar piezas en Torno o Centro CNC?",
        text: "Envíenos sus planos o acérquese con la muestra física para una cotización técnica inmediata.",
        cta: "Solicitar Cotización de Mecanizado",
      },
    },
  },

  "corte-laser": {
    metadata: {
      title: "Corte Láser de Alta Precisión | SIMET S.A.S.",
      description:
        "Servicio de corte por fibra láser para láminas metálicas de acero al carbono, inoxidable y aluminio con bordes limpios sin rebaba.",
    },
    content: {
      eyebrow: "TECNOLOGÍA FIBRA LÁSER DE ALTA VELOCIDAD",
      title: "Corte Láser CNC de Alta Precisión y Acabado Limpio",
      lead: "Corte de lámina metálica con la más avanzada tecnología por fibra láser: bordes limpios sin rebaba, ranurados exactos y mínimo desperdicio de material.",
      ctaLabel: "Cotizar Corte Láser",
      secondaryCta: { label: "Ver Tabla de Espesores", href: "#espesores" },
      intro: {
        eyebrow: "BORDES PERFECTOS SIN RETRABAJOS",
        heading: "Ahorre tiempo de pulido con corte por fibra óptica",
        body: [
          "El corte por fibra láser supera ampliamente al plasma tradicional y al oxicorte en calidad superficial y velocidad. La concentración térmica focalizada evita la deformación de láminas delgadas y entrega bordes listos para pintura o soldadura.",
          "Procesamos sus planos en formato **DXF, DWG o STEP** con anidado computarizado (nesting), maximizando el número de piezas por lámina para reducir su costo por unidad.",
        ],
        highlights: ["Corte con Nitrógeno de Alta Pureza", "Nesting para ahorro de chapa", "Cero escoria"],
        image: images.laser,
        imageAlt: "Cabezal de corte láser trabajando sobre lámina metálica",
        caption: { eyebrow: "PRECISIÓN LÁSER", title: "Corte en Inox y Acero al Carbón", badge: "±0.05 mm" },
      },
      features: {
        eyebrow: "CAMPOS DE APLICACIÓN",
        heading: "Soluciones en Corte Láser",
        items: [
          {
            icon: "gear",
            tag: "Fibra Láser CNC",
            title: "Corte por Fibra Láser CNC",
            desc: "Corte de alta velocidad y máxima fidelidad geométrica para siluetas complejas, ensambles ranurados y perforaciones precisas.",
          },
          {
            icon: "cube",
            tag: "Paneles & Arquitectura",
            title: "Corte de Paneles y Celosías",
            desc: "Desarrollo de paneles decorativos, cerramientos arquitectónicos y fachadas metálicas según diseño vectorial personalizado.",
          },
          {
            icon: "document",
            tag: "Chapa & Ensamble",
            title: "Corte de Piezas para Ensamble",
            desc: "Cortes con tolerancias estrechas que permiten ensamblajes tipo mecano soldados con mínimo tiempo de preparación.",
          },
          {
            icon: "monitor",
            tag: "Producción Rápida",
            title: "Prototipado Rápido y Maquila",
            desc: "Atención de pedidos urgentes desde una sola pieza hasta lotes industriales de miles de unidades en tiempos récord.",
          },
        ],
      },
      secondary: {
        id: "espesores",
        eyebrow: "CAPACIDAD TÉCNICA",
        heading: "Materiales y Espesores de Corte",
        items: [
          {
            tag: "Hasta 16 mm",
            title: "Acero al Carbono (HR / CR)",
            desc: "Corte con oxígeno para espesores gruesos sin deformación.",
          },
          {
            tag: "Hasta 10 mm",
            title: "Acero Inoxidable (304 / 316)",
            desc: "Corte con nitrógeno de alta presión: borde brillante libre de óxido.",
          },
          {
            tag: "Hasta 6 mm",
            title: "Aluminio",
            desc: "Geometría exacta sin afectación térmica perjudicial.",
          },
          {
            tag: "1500 x 3000 mm",
            title: "Formatos de Lámina",
            desc: "Mesa industrial amplia para máximo aprovechamiento de material.",
          },
        ],
      },
      banner: {
        heading: "¿Tiene planos en DXF o DWG listos para corte?",
        text: "Cargue sus vectores o planos para calcular el anidado y cotizarle en menos de 24 horas.",
        cta: "Cotizar Corte de Lámina",
      },
    },
  },

  "modelado-3d": {
    metadata: {
      title: "Diseño y Modelado 3D Mecánico | SIMET S.A.S.",
      description:
        "Modelado paramétrico 3D, ingeniería inversa y planos normalizados para manufactura de alta precisión.",
    },
    content: {
      title: "Diseño y Modelado 3D Mecánico para Manufactura de Alta Precisión",
      lead: "Transformamos conceptos, muestras físicas desgastadas y planos 2D en modelos CAD de alta exactitud optimizados para mecanizado CNC y corte láser.",
      ctaLabel: "Solicitar Cotización de Diseño",
      intro: {
        heading: "Precisión desde el plano digital hasta el taller",
        body: [
          "En el entorno de manufactura actual, un diseño deficiente se traduce en paradas imprevistas de planta, sobrecostos de mecanizado y desperdicio de material. En **SIMET S.A.S.** cerramos la brecha entre la ingeniería conceptual y la producción real en taller.",
          "Empleamos software CAD/CAM avanzado para garantizar que cada geometría cumpla su función y sea completamente viable y económica de fabricar en centros CNC, tornos y corte láser de alta definición.",
        ],
        image: images.modelado3d,
        imageAlt: "Figura metálica diseñada en 3D y cortada con precisión por SIMET",
      },
      features: {
        heading: "Capacidades de Diseño e Ingeniería CAD",
        items: [
          {
            icon: "gear",
            title: "Ingeniería Inversa",
            desc: "Levantamiento dimensional de muestras físicas y reconstrucción de piezas importadas o descontinuadas con instrumentos de metrología.",
            tag: "Metrología & Escaneo",
          },
          {
            icon: "cube",
            title: "Modelado Paramétrico 3D",
            desc: "Geometría inteligente con simulación de ensambles dinámicos, análisis de interferencias y optimización directa para CNC.",
            tag: "CAD Sólido",
          },
          {
            icon: "document",
            title: "Planos Normalizados 2D",
            desc: "Documentación técnica bajo normas ISO/ASME con tolerancias GD&T, rugosidades superficiales y tablas de corte láser.",
            tag: "Planos ISO/ASME",
          },
          {
            icon: "monitor",
            title: "Renderizado y Validación",
            desc: "Representaciones fotorrealistas para aprobación visual de ensamble, manuales técnicos de montaje y presentaciones corporativas.",
            tag: "Render & Despiece",
          },
        ],
      },
      secondary: {
        items: [
          {
            icon: "food",
            title: "Alimentos y Bebidas",
            desc: "Componentes en aceros inoxidables sanitarios (AISI 304/316) y polímeros grado alimenticio para líneas de llenado, dosificación y transporte.",
          },
          {
            icon: "package",
            title: "Plásticos y Empaques",
            desc: "Matrices de corte, mordazas de sellado térmico, moldes de termoformado y boquillas de extrusión con tolerancias de alta precisión.",
          },
          {
            icon: "car",
            title: "Industria Automotriz",
            desc: "Utillajes de ensamble (jigs & fixtures), galgas de verificación dimensional y soportes mecánicos para trabajo continuo.",
          },
        ],
      },
      banner: {
        heading: "¿Tiene un plano o pieza que requiere modelado de precisión?",
        text: "Envíenos sus requerimientos técnicos o muestras físicas para una evaluación y levantamiento dimensional sin costo.",
      },
    },
  },

  "diseno-proyectos": {
    metadata: {
      title: "Diseño y Desarrollo de Proyectos Metalmecánicos | SIMET S.A.S.",
      description: "Ingeniería, planificación y desarrollo de soluciones industriales a medida para la industria.",
    },
    content: {
      title: "Diseño y Desarrollo de Proyectos Metalmecánicos e Integración Industrial",
      lead: "Transformamos necesidades operativas en maquinaria, dispositivos mecánicos y líneas de producción a medida, garantizando robustez y seguridad operativa.",
      ctaLabel: "Evaluar mi Proyecto",
      intro: {
        heading: "Soluciones mecánicas a la medida de su planta",
        body: [
          "En las plantas de producción, la maquinaria estándar de catálogo muchas veces no se adapta a las limitaciones de espacio, los ritmos de trabajo específicos o las características del producto local.",
          "En **SIMET S.A.S.** concebimos, calculamos y construimos maquinaria y dispositivos industriales personalizados. Nuestro equipo de ingeniería analiza a fondo las condiciones reales de su línea de producción para entregar sistemas que eliminan cuellos de botella, aumentan la cadencia operativa y reducen tiempos muertos.",
        ],
        image: images.proyectos,
        imageAlt: "Verificación dimensional y escaneo 3D de una pieza mecanizada",
        imageFirst: true,
      },
      features: {
        heading: "Capacidades de Desarrollo e Integración de Proyectos",
        items: [
          {
            icon: "gear",
            title: "Sistemas de Transporte Industrial",
            desc: "Bandas modulares sanitarias, transportadores de rodillos por gravedad/motorizados y mesas de acumulación rotativas.",
            tag: "Líneas de Transporte",
          },
          {
            icon: "cube",
            title: "Dispositivos de Ensamble y Utillajes",
            desc: "Diseño de jigs & fixtures ergonómicos, galgas de verificación dimensional y cunas de montaje para ensamble asistido.",
            tag: "Jigs & Fixtures",
          },
          {
            icon: "document",
            title: "Automatización Mecánica y Neumática",
            desc: "Mecanismos de transferencia paso a paso, estaciones de prensado neumático, dosificadores y guillotinas de corte.",
            tag: "Automatización",
          },
          {
            icon: "monitor",
            title: "Modernización y Retrofit Mecánico",
            desc: "Rediseño y repotenciación estructural de maquinaria obsoleta para elevar velocidades de operación y seguridad.",
            tag: "Retrofit de Planta",
          },
        ],
      },
      secondary: {
        items: [
          {
            icon: "food",
            title: "Alimentos y Bebidas",
            desc: "Líneas sanitarias en acero inoxidable AISI 304/316 con sistemas de fácil desarme para lavado CIP, transportadores de envases y dosificadores.",
          },
          {
            icon: "package",
            title: "Plásticos y Empaques",
            desc: "Sistemas de alimentación para tolvas, desbobinadores industriales, carros de cambio de moldes y mesas de empaque secundario.",
          },
          {
            icon: "car",
            title: "Industria Automotriz",
            desc: "Pistas de rodillos para flujo continuo de partes, cunas de soldadura repetitiva y estaciones de prueba de carga y fatiga.",
          },
        ],
      },
      banner: {
        heading: "¿Tiene un desafío operativo o requiere maquinaria a medida?",
        text: "Cuéntenos su necesidad operativa en planta. Nuestros ingenieros evaluarán la viabilidad técnica y le presentarán una propuesta formal.",
      },
    },
  },

  "asesoria-dfm": {
    metadata: {
      title: "Asesoría Técnica en DFM y Optimización de Costos | SIMET S.A.S.",
      description:
        "Reduzca costos de producción y optimice la viabilidad técnica de sus piezas con asesoría en Diseño para Manufactura.",
    },
    content: {
      title: "Asesoría Técnica en Diseño para Manufactura (DFM) y Optimización de Costos",
      lead: "Reduzca costos de producción, evite retrabajos en taller y optimice la viabilidad técnica de sus piezas antes de encender un centro CNC o el láser.",
      ctaLabel: "Solicitar Revisión Técnica de Planos",
      intro: {
        heading: "Fabricabilidad real: menos costos, cero retrabajos",
        body: [
          "Un plano mecánicamente correcto en el papel no siempre es rentable ni viable en la máquina. Geometrías complejas innecesarias, esquinas interiores inaccesibles para fresas estándar o tolerancias milimétricas excesivas pueden disparar los costos de maquinado hasta en un 50%.",
          "En **SIMET S.A.S.** ponemos a disposición de su departamento de ingeniería o compras nuestros más de 25 años de experiencia práctica de taller. Mediante consultoría en DFM (Design for Manufacturing), auditamos sus diseños para proponer ajustes que garanticen la funcionalidad de la pieza al menor costo de mecanizado y en el menor tiempo de entrega posible.",
        ],
        image: images.asesoria,
        imageAlt: "Ingenieros de SIMET revisando planos técnicos junto a piezas mecanizadas",
      },
      features: {
        heading: "Ejes de Optimización y Asesoría en Manufactura",
        items: [
          {
            icon: "gear",
            title: "Racionalización de Tolerancias (GD&T)",
            desc: "Ajuste entre tolerancias críticas de ensamble y tolerancias comerciales de taller, eliminando sobrecostos innecesarios en zonas no funcionales.",
            tag: "Ajuste GD&T",
          },
          {
            icon: "cube",
            title: "Optimización Geométrica CNC y Láser",
            desc: "Adecuación de radios internos para herramientas estándar, diseño de cavidades estables y espesores uniformes para evitar deformación térmica.",
            tag: "CNC & Láser",
          },
          {
            icon: "document",
            title: "Selección Estratégica de Materiales",
            desc: "Sustitución de aleaciones importadas por aceros comerciales (1045, 4140, inoxidables 304/316) y polímeros técnicos (Nylon, POM/Delrin, PTFE).",
            tag: "Materiales",
          },
          {
            icon: "monitor",
            title: "Definición de Ruta de Fabricación",
            desc: "Determinación del proceso más económico según el lote: torneado, fresado multiejes, corte láser, conformado o ensambles soldados.",
            tag: "Ruta de Proceso",
          },
        ],
      },
      secondary: {
        items: [
          {
            icon: "food",
            title: "Alimentos y Bebidas",
            desc: "Selección de acabados superficiales sanitarios (Ra ≤ 0.8 µm) y aceros inoxidables certificados para normativas de inocuidad alimentaria.",
          },
          {
            icon: "package",
            title: "Plásticos y Empaques",
            desc: "Optimización de canales de refrigeración y geometrías en moldes de termoformado y sellado para reducir tiempos de ciclo térmico.",
          },
          {
            icon: "car",
            title: "Industria Automotriz",
            desc: "Asesoría en tratamientos térmicos (temple, cementación, nitruración) para piezas de ensamble sometidas a ciclos severos de fatiga mecánica.",
          },
        ],
      },
      banner: {
        heading: "¿Desea optimizar los costos de sus planos o piezas actuales?",
        text: "Envíenos sus requerimientos técnicos o planos preliminares para una revisión de fabricabilidad sin costo ni compromiso.",
      },
    },
  },
};
