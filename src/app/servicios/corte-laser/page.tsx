import ServiceDetail, { type Feature } from "@/components/ServiceDetail";
import { images } from "@/lib/images";

export const metadata = {
  title: "Corte Láser de Alta Precisión | SIMET S.A.S.",
  description:
    "Servicio de corte por fibra láser para láminas metálicas de acero al carbono, inoxidable y aluminio con bordes limpios sin rebaba.",
};

const laserCapabilities: Feature[] = [
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
];

const capacities: Feature[] = [
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
];

export default function CorteLaserPage() {
  return (
    <ServiceDetail
      eyebrow="TECNOLOGÍA FIBRA LÁSER DE ALTA VELOCIDAD"
      title="Corte Láser CNC de Alta Precisión y Acabado Limpio"
      lead="Corte de lámina metálica con la más avanzada tecnología por fibra láser: bordes limpios sin rebaba, ranurados exactos y mínimo desperdicio de material."
      ctaLabel="Cotizar Corte Láser"
      secondaryCta={{ label: "Ver Tabla de Espesores", href: "#espesores" }}
      intro={{
        eyebrow: "BORDES PERFECTOS SIN RETRABAJOS",
        heading: "Ahorre tiempo de pulido con corte por fibra óptica",
        body: (
          <>
            <p>
              El corte por fibra láser supera ampliamente al plasma tradicional y al oxicorte en
              calidad superficial y velocidad. La concentración térmica focalizada evita la
              deformación de láminas delgadas y entrega bordes listos para pintura o soldadura.
            </p>
            <p>
              Procesamos sus planos en formato <strong>DXF, DWG o STEP</strong> con anidado
              computarizado (nesting), maximizando el número de piezas por lámina para reducir su
              costo por unidad.
            </p>
          </>
        ),
        highlights: ["Corte con Nitrógeno de Alta Pureza", "Nesting para ahorro de chapa", "Cero escoria"],
        image: images.laser,
        imageAlt: "Cabezal de corte láser trabajando sobre lámina metálica",
        caption: { eyebrow: "PRECISIÓN LÁSER", title: "Corte en Inox y Acero al Carbón", badge: "±0.05 mm" },
      }}
      features={{ eyebrow: "CAMPOS DE APLICACIÓN", heading: "Soluciones en Corte Láser", items: laserCapabilities }}
      secondary={{ id: "espesores", eyebrow: "CAPACIDAD TÉCNICA", heading: "Materiales y Espesores de Corte", items: capacities }}
      banner={{
        heading: "¿Tiene planos en DXF o DWG listos para corte?",
        text: "Cargue sus vectores o planos para calcular el anidado y cotizarle en menos de 24 horas.",
        cta: "Cotizar Corte de Lámina",
      }}
    />
  );
}
