import { SIMET, whatsappUrl } from "@/lib/contact";
import BROCHURE_IMAGES from "@/lib/brochure-images.json";

/**
 * Contenido del brochure digital (/brochure y su PDF). Textos tomados del
 * tríptico aprobado (SIMET_TRIPTICO_REVISION.pdf). Criterio del sprint: no
 * afirmar años, certificaciones ni cifras que SIMET no haya confirmado.
 */

export type BrochureIconName =
  | "cnc" | "laser" | "cube" | "project" | "advice"
  | "precision" | "quality" | "custom" | "commitment"
  | "whatsapp" | "mail" | "globe" | "pin" | "facebook" | "instagram" | "arrow" | "menu";

const mensajeWhatsApp = "Hola SIMET, vengo del brochure y quiero cotizar un proyecto.";

export const brochureLinks = {
  whatsapp: whatsappUrl(SIMET.whatsappVentas.numero, mensajeWhatsApp),
  email: `mailto:${SIMET.email}?subject=${encodeURIComponent("Cotización desde el brochure")}`,
  sitio: SIMET.sitio.url,
  mapa: SIMET.mapa,
};

/** Ruta del PDF generado con `npm run brochure:pdf` */
export const BROCHURE_PDF = "/brochure/SIMET-Brochure.pdf";

type BrochureImage = keyof typeof BROCHURE_IMAGES;

/**
 * Copias comprimidas de las fotos (las genera `npm run brochure:pdf` según
 * brochure-images.json). Son JPEG a propósito: Chrome los incrusta tal cual en
 * el PDF; con WebP los guardaría sin compresión y el archivo pesaría el triple.
 */
export const brochureImage = (key: BrochureImage) => {
  const entry = BROCHURE_IMAGES[key];
  return `/brochure/img/${key}.${"format" in entry ? entry.format : "jpg"}`;
};

export const brochure = {
  cover: {
    title: ["Servicios", "industriales", "mecanizados"],
    tagline: "Precisión que transforma ideas en soluciones",
    image: brochureImage("cover"),
    logo: brochureImage("logo"),
  },

  sections: [
    { id: "quienes-somos", label: "¿Quiénes somos?" },
    { id: "servicios", label: "Nuestros servicios" },
    { id: "sectores", label: "Sectores que atendemos" },
    { id: "por-que-elegirnos", label: "¿Por qué elegirnos?" },
    { id: "contactanos", label: "Contacto" },
  ],

  about: {
    title: "¿Quiénes somos?",
    /** Párrafos; admite **negrita** */
    body: [
      "En **SIMET S.A.S.** nos especializamos en ofrecer soluciones para el sector industrial mediante procesos de mecanizado, fabricación de componentes y desarrollo de proyectos metalmecánicos.",
      "Trabajamos para brindar soluciones eficientes, adaptadas a los requerimientos técnicos de cada cliente, con un enfoque en la calidad, la precisión y el mejoramiento continuo.",
      "Ofrecemos soluciones integrales en mecanizado, fabricación de piezas industriales y desarrollo de proyectos metalmecánicos, orientadas a satisfacer las necesidades de la industria.",
    ],
    values: ["Tecnología", "Precisión", "Calidad", "Compromiso"],
    // La foto del equipo (images.equipo) muestra un letrero de "22 años": no se
    // usa hasta que SIMET confirme la cifra (criterio del sprint)
    image: brochureImage("about"),
    imageAlt: "Taller de SIMET S.A.S.",
  },

  services: {
    title: "Nuestros servicios",
    subtitle: "Soluciones industriales a la medida de cada proyecto",
    items: [
      {
        icon: "cnc",
        name: "Mecanizado CNC",
        desc: "Fabricación de piezas y componentes industriales mediante procesos de mecanizado de precisión, de acuerdo con planos y especificaciones técnicas.",
        href: "/servicios/mecanizado-cnc",
      },
      {
        icon: "laser",
        name: "Corte láser",
        desc: "Soluciones de corte de láminas metálicas para la fabricación de piezas y componentes con geometrías personalizadas.",
        href: "/servicios/corte-laser",
      },
      {
        icon: "cube",
        name: "Diseño y modelado 3D",
        desc: "Desarrollo de modelos digitales y diseños técnicos para la conceptualización, fabricación y optimización de piezas mecánicas.",
        href: "/servicios/modelado-3d",
      },
      {
        icon: "project",
        name: "Proyectos metalmecánicos",
        desc: "Desarrollo y fabricación de soluciones industriales adaptadas a los requerimientos específicos de cada proyecto.",
        href: "/servicios/diseno-proyectos",
      },
      {
        icon: "advice",
        name: "Asesoría técnica",
        desc: "Acompañamiento en el desarrollo de soluciones de fabricación, selección de procesos y optimización de componentes industriales.",
        href: "/servicios/asesoria-dfm",
      },
    ] satisfies { icon: BrochureIconName; name: string; desc: string; href: string }[],
  },

  sectors: {
    title: "Sectores que atendemos",
    subtitle: "Soluciones para diferentes industrias.",
    items: [
      { name: "Industria alimentaria", desc: "Soluciones y componentes para equipos y procesos de producción.", image: brochureImage("sector-alimentos") },
      { name: "Industria plástica", desc: "Fabricación de piezas y componentes utilizados en maquinaria y procesos industriales.", image: brochureImage("sector-plasticos") },
      { name: "Industria automotriz", desc: "Desarrollo de componentes mecánicos y soluciones de fabricación.", image: brochureImage("sector-automotriz") },
      { name: "Industria metalmecánica", desc: "Mecanizado, fabricación y desarrollo de piezas industriales.", image: brochureImage("sector-metalmecanica") },
    ],
  },

  why: {
    title: "¿Por qué elegirnos?",
    image: brochureImage("why"),
    imageAlt: "Corte láser de una lámina metálica en SIMET",
    items: [
      { icon: "precision", name: "Precisión", desc: "Atención a los requerimientos técnicos de cada proyecto." },
      { icon: "quality", name: "Calidad", desc: "Compromiso con los procesos de fabricación y el producto final." },
      { icon: "custom", name: "Soluciones personalizadas", desc: "Adaptación a las necesidades de nuestros clientes." },
      { icon: "commitment", name: "Compromiso", desc: "Responsabilidad en cada etapa del proyecto." },
      { icon: "advice", name: "Acompañamiento técnico", desc: "Orientación para encontrar soluciones eficientes." },
    ] satisfies { icon: BrochureIconName; name: string; desc: string }[],
  },

  contact: {
    title: ["Hagamos realidad", "tu próximo proyecto"],
    body: "En SIMET S.A.S. convertimos tus necesidades industriales en soluciones de fabricación.",
    cta: "¡Contáctanos y cotiza tu proyecto!",
    items: [
      { icon: "whatsapp", label: "WhatsApp ventas", value: SIMET.whatsappVentas.visible, href: brochureLinks.whatsapp, primary: true },
      { icon: "mail", label: "Correo", value: SIMET.email, href: brochureLinks.email },
      { icon: "globe", label: "Sitio web", value: SIMET.sitio.visible, href: brochureLinks.sitio },
      { icon: "pin", label: "Ubicación", value: SIMET.direccion, href: brochureLinks.mapa },
    ] satisfies { icon: BrochureIconName; label: string; value: string; href: string; primary?: boolean }[],
    social: [
      { icon: "facebook", label: SIMET.facebook.visible, href: SIMET.facebook.url },
      { icon: "instagram", label: SIMET.instagram.visible, href: SIMET.instagram.url },
    ] satisfies { icon: BrochureIconName; label: string; href: string }[],
  },
};
