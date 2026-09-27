import ServiceDetail, { type Feature } from "@/components/ServiceDetail";
import { images } from "@/lib/images";

export const metadata = {
  title: "Mecanizado y Torno CNC de Precisión | SIMET S.A.S.",
  description:
    "Mecanizado CNC, fresado multiejes, torneado y fabricación de piezas especiales con tolerancias milimétricas.",
};

const cncCapabilities: Feature[] = [
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
];

const materials: Feature[] = [
  { title: "Aceros al Carbono & Bonificados", desc: "1020, 1045, 4140, 8620 con temple o cementación." },
  { title: "Aceros Inoxidables", desc: "AISI 304, 316L, 410, 420 grado sanitario y quirúrgico." },
  { title: "Polímeros Técnicos", desc: "Nylon 6, POM (Delrin), PTFE (Teflón), UHMW-PE." },
  { title: "Metales No Ferrosos", desc: "Aluminio serie 6000/7000, bronces fosforados y latón." },
];

export default function MecanizadoCncPage() {
  return (
    <ServiceDetail
      eyebrow="FABRICACIÓN & MAQUINADO INDUSTRIAL"
      title="Centro de Mecanizado, Torno y Fresado CNC de Precisión"
      lead="Fabricamos piezas de alta complejidad dimensional con acabados controlados y tolerancias milimétricas en series cortas, medianas y de producción continua."
      ctaLabel="Cotizar Mecanizado CNC"
      secondaryCta={{ label: "Ver Equipos y Capacidades", href: "#capacidades" }}
      intro={{
        eyebrow: "CALIDAD Y METROLOGÍA",
        heading: "Maquinado exacto bajo rigurosas tolerancias ISO",
        body: (
          <>
            <p>
              En <strong>SIMET S.A.S.</strong> integramos centros de mecanizado CNC y tornos paralelos
              operados por técnicos especializados con más de dos décadas en la industria
              metalmecánica.
            </p>
            <p>
              Garantizamos repetibilidad absoluta en lotes de producción y entrega de certificados de
              verificación dimensional, asegurando un ensamble fluido sin fricciones ni ajustes
              manuales de taller.
            </p>
          </>
        ),
        highlights: ["Tolerancias de ±0.01 mm", "Control de rugosidad Ra", "Tratamientos Térmicos"],
        image: images.cnc,
        imageAlt: "Torno CNC mecanizando una pieza cilíndrica con refrigerante",
        caption: { eyebrow: "MAQUINADO CERTIFICADO", title: "Piezas críticas y herramentales", badge: "Tolerancia H7" },
      }}
      features={{ id: "capacidades", eyebrow: "CAPACIDADES DE PLANTA", heading: "Nuestras Soluciones de Mecanizado", items: cncCapabilities }}
      secondary={{ eyebrow: "AMPLIO STOCK", heading: "Materiales que Mecanizamos", items: materials }}
      banner={{
        heading: "¿Necesita cotizar piezas en Torno o Centro CNC?",
        text: "Envíenos sus planos o acérquese con la muestra física para una cotización técnica inmediata.",
        cta: "Solicitar Cotización de Mecanizado",
      }}
    />
  );
}
