import ServiceDetail, { type Feature } from "@/components/ServiceDetail";
import { images } from "@/lib/images";

export const metadata = {
  title: "Diseño y Desarrollo de Proyectos Metalmecánicos | SIMET S.A.S.",
  description:
    "Ingeniería, planificación y desarrollo de soluciones industriales a medida para la industria.",
};

const capabilities: Feature[] = [
  {
    icon: "gear",
    title: "Sistemas de Transporte Industrial",
    desc: "Bandas modulares sanitarias, transportadores de rodillos por gravedad/motorizados y mesas de acumulación rotativas.",
  },
  {
    icon: "cube",
    title: "Dispositivos de Ensamble y Utillajes",
    desc: "Diseño de jigs & fixtures ergonómicos, galgas de verificación dimensional y cunas de montaje para ensamble asistido.",
  },
  {
    icon: "document",
    title: "Automatización Mecánica y Neumática",
    desc: "Mecanismos de transferencia paso a paso, estaciones de prensado neumático, dosificadores y guillotinas de corte.",
  },
  {
    icon: "monitor",
    title: "Modernización y Retrofit Mecánico",
    desc: "Rediseño y repotenciación estructural de maquinaria obsoleta para elevar velocidades de operación y seguridad.",
  },
];

const sectors: Feature[] = [
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
];

export default function DisenoProyectosPage() {
  return (
    <ServiceDetail
      title="Diseño y Desarrollo de Proyectos Metalmecánicos e Integración Industrial"
      lead="Transformamos necesidades operativas en maquinaria, dispositivos mecánicos y líneas de producción a medida, garantizando robustez y seguridad operativa."
      ctaLabel="Evaluar mi Proyecto"
      intro={{
        heading: "Soluciones mecánicas a la medida de su planta",
        body: (
          <>
            <p>
              En las plantas de producción, la maquinaria estándar de catálogo muchas veces no se
              adapta a las limitaciones de espacio, los ritmos de trabajo específicos o las
              características del producto local.
            </p>
            <p>
              En <strong>SIMET S.A.S.</strong> concebimos, calculamos y construimos maquinaria y
              dispositivos industriales personalizados. Nuestro equipo de ingeniería analiza a fondo
              las condiciones reales de su línea de producción para entregar sistemas que eliminan
              cuellos de botella, aumentan la cadencia operativa y reducen tiempos muertos.
            </p>
          </>
        ),
        image: images.proyectos,
        imageAlt: "Verificación dimensional y escaneo 3D de una pieza mecanizada",
        imageFirst: true,
      }}
      features={{ heading: "Capacidades de Desarrollo e Integración de Proyectos", items: capabilities }}
      secondary={{ items: sectors }}
      banner={{
        heading: "¿Tiene un desafío operativo o requiere maquinaria a medida?",
        text: "Cuéntenos su necesidad operativa en planta. Nuestros ingenieros evaluarán la viabilidad técnica y le presentarán una propuesta formal.",
      }}
    />
  );
}
