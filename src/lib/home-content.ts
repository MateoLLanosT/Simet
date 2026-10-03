import { images } from "@/lib/images";

/**
 * Contenido de la página de inicio. Lo usan la página (src/app/page.tsx) y el
 * asistente con IA (/api/chat): al editarlo aquí se actualizan la web y las
 * respuestas del chat a la vez.
 */

export interface HomeCard {
  image: string;
  title: string;
  description: string;
  link: string;
}

export interface HomeProduct {
  image: string;
  icon: string;
  title: string;
  description: string;
}

export interface HomeDifferentiator {
  icon: string;
  title: string;
  desc: string;
}

export const home = {
  hero: {
    tag: "METALMECÁNICA DE PRECISIÓN",
    title: "Confía tus proyectos a expertos en metalmecánica",
    lead: "Obtén piezas únicas y a la medida de tus necesidades.",
    badge: ["PRECISIÓN", "INGENIERÍA", "SOLUCIONES REALES"],
  },

  services: [
    {
      image: images.cnc,
      title: "Centro de Fabricación y Diseño CNC",
      description: "Mecanizado de precisión, fabricación de piezas especiales, diseño industrial, torno, fresa y reparación de maquinaria.",
      link: "/servicios/mecanizado-cnc",
    },
    {
      image: images.laser,
      title: "Corte Láser de Alta Precisión",
      description: "Corte de alta precisión para proyectos industriales, arquitectónicos, publicitarios y decorativos.",
      link: "/servicios/corte-laser",
    },
    {
      image: images.modelado3d,
      title: "Diseño y modelado 3D",
      description: "Modelado paramétrico y desarrollo visual para la fabricación de piezas y nuevos proyectos industriales.",
      link: "/servicios/modelado-3d",
    },
    {
      image: images.proyectos,
      title: "Diseño de proyectos",
      description: "Ingeniería, planificación y desarrollo de soluciones industriales adaptadas a cada requerimiento.",
      link: "/servicios/diseno-proyectos",
    },
    {
      image: images.asesoria,
      title: "Asesoría para fabricación",
      description: "Acompañamiento técnico en procesos de manufactura, desde el diseño hasta la entrega final.",
      link: "/servicios/asesoria-dfm",
    },
  ] satisfies HomeCard[],

  industries: [
    {
      image: images.alimentos,
      title: "Alimentos y bebidas",
      description: "Equipos sanitarios y de proceso para la industria de alimentos y bebidas con tolerancias sanitarias estrictas.",
      link: "/servicios/diseno-proyectos",
    },
    {
      image: images.plasticos,
      title: "Plásticos y empaques",
      description: "Moldes, herramentales y piezas de precisión para la industria del plástico, formado y empaque masivo.",
      link: "/servicios/modelado-3d",
    },
    {
      image: images.automotriz,
      title: "Industria automotriz",
      description: "Desarrollo y mecanizado de componentes metalmecánicos de alto desempeño para líneas de producción automotriz.",
      link: "/servicios/asesoria-dfm",
    },
  ] satisfies HomeCard[],

  productsIntro:
    "En SIMET fabricamos productos metálicos a la medida, combinando tecnología, precisión y diseño para hacer realidad tus ideas.",

  products: [
    {
      image: images.llaveros,
      icon: "◇",
      title: "LLAVEROS PERSONALIZADOS",
      description: "Diseños únicos en metal, ideales para empresas, eventos corporativos y recordatorios de alta calidad.",
    },
    {
      image: images.decorativas,
      icon: "♫",
      title: "PIEZAS DECORATIVAS EN METAL",
      description: "Elementos decorativos con cortes láser de alta precisión para dar presencia estética a tus espacios.",
    },
    {
      image: images.figuras,
      icon: "▱",
      title: "FIGURAS DIMENSIONALES",
      description: "Modelos y figuras en metal ensambladas mediante corte computarizado y tolerancias exactas.",
    },
    {
      image: images.paneles,
      icon: "△",
      title: "PANELES DECORATIVOS",
      description: "Diseños icónicos y personalizados para proyectos arquitectónicos y de interiorismo.",
    },
  ] satisfies HomeProduct[],

  badges: ["Fabricación a la medida", "Alta precisión en cada detalle", "Soluciones para diversas industrias"],

  experience: {
    heading: "Con más de 25 años de experiencia...",
    /** Párrafos; admite **negrita** */
    body: [
      "Somos una empresa especializada en **ingeniería mecánica, mantenimiento industrial, mecanizado CNC, torno, fresa, diseño y fabricación de piezas especiales, y corte por láser**.",
      "En SIMET trabajamos con altos estándares de calidad y seguridad, garantizando precisión en cada proceso y soluciones adaptadas a las necesidades de nuestros clientes.",
    ],
  },

  differentiators: [
    {
      icon: images.iconoExperiencia,
      title: "+25 años de experiencia",
      desc: "Precisión y calidad comprobada en cada proyecto.",
    },
    {
      icon: images.iconoIndustrias,
      title: "Soluciones para múltiples industrias",
      desc: "Alimentos, bebidas, plásticos, construcción, publicidad y más.",
    },
    {
      icon: images.iconoAcompanamiento,
      title: "Acompañamiento personalizado",
      desc: "Asesoría técnica desde el diseño hasta la entrega final.",
    },
    {
      icon: images.iconoTecnologia,
      title: "Tecnología de última generación",
      desc: "Equipos CNC y láser para trabajos de alta precisión.",
    },
  ] satisfies HomeDifferentiator[],
};
