import ServiceDetail, { type Feature } from "@/components/ServiceDetail";
import { images } from "@/lib/images";

export const metadata = {
  title: "Diseño y Modelado 3D Mecánico | SIMET S.A.S.",
  description:
    "Modelado paramétrico 3D, ingeniería inversa y planos normalizados para manufactura de alta precisión.",
};

const cadCapabilities: Feature[] = [
  {
    icon: "gear",
    title: "Ingeniería Inversa",
    desc: "Levantamiento dimensional de muestras físicas y reconstrucción de piezas importadas o descontinuadas.",
  },
  {
    icon: "cube",
    title: "Modelado Paramétrico 3D",
    desc: "Geometría inteligente con simulación de ensambles dinámicos y detección previa de interferencias.",
  },
  {
    icon: "document",
    title: "Planos Normalizados 2D",
    desc: "Documentación técnica bajo normas ISO/ASME con tolerancias GD&T y especificación de rugosidad.",
  },
  {
    icon: "monitor",
    title: "Renderizado y Validación",
    desc: "Representaciones fotorrealistas para aprobación visual de ensamble y manuales técnicos de montaje.",
  },
];

const sectors: Feature[] = [
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
];

export default function Modelado3DPage() {
  return (
    <ServiceDetail
      title="Diseño y Modelado 3D Mecánico para Manufactura de Alta Precisión"
      lead="Transformamos conceptos, muestras físicas desgastadas y planos 2D en modelos CAD de alta exactitud optimizados para mecanizado CNC y corte láser."
      ctaLabel="Solicitar Cotización de Diseño"
      intro={{
        heading: "Precisión desde el plano digital hasta el taller",
        body: (
          <>
            <p>
              En el entorno de manufactura actual, un diseño deficiente se traduce en paradas
              imprevistas de planta, sobrecostos de mecanizado y desperdicio de material. En{" "}
              <strong>SIMET S.A.S.</strong> cerramos la brecha entre la ingeniería conceptual y la
              producción real en taller.
            </p>
            <p>
              Empleamos software CAD/CAM avanzado para garantizar que cada geometría cumpla su función
              y sea completamente viable y económica de fabricar en centros CNC, tornos y corte láser
              de alta definición.
            </p>
          </>
        ),
        image: images.modelado3d,
        imageAlt: "Figura metálica diseñada en 3D y cortada con precisión por SIMET",
      }}
      features={{ heading: "Capacidades de Diseño e Ingeniería CAD", items: cadCapabilities }}
      secondary={{ items: sectors }}
      banner={{
        heading: "¿Tiene un plano o pieza que requiere modelado de precisión?",
        text: "Envíenos sus requerimientos técnicos o muestras físicas para una evaluación y levantamiento dimensional sin costo.",
      }}
    />
  );
}
