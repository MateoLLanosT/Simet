import ServiceDetail, { type Feature } from "@/components/ServiceDetail";
import { images } from "@/lib/images";

export const metadata = {
  title: "Asesoría Técnica en DFM y Optimización de Costos | SIMET S.A.S.",
  description:
    "Reduzca costos de producción y optimice la viabilidad técnica de sus piezas con asesoría en Diseño para Manufactura.",
};

const optimizationAxes: Feature[] = [
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
];

const sectors: Feature[] = [
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
];

export default function AsesoriaDfmPage() {
  return (
    <ServiceDetail
      title="Asesoría Técnica en Diseño para Manufactura (DFM) y Optimización de Costos"
      lead="Reduzca costos de producción, evite retrabajos en taller y optimice la viabilidad técnica de sus piezas antes de encender un centro CNC o el láser."
      ctaLabel="Solicitar Revisión Técnica de Planos"
      intro={{
        heading: "Fabricabilidad real: menos costos, cero retrabajos",
        body: (
          <>
            <p>
              Un plano mecánicamente correcto en el papel no siempre es rentable ni viable en la
              máquina. Geometrías complejas innecesarias, esquinas interiores inaccesibles para
              fresas estándar o tolerancias milimétricas excesivas pueden disparar los costos de
              maquinado hasta en un 50%.
            </p>
            <p>
              En <strong>SIMET S.A.S.</strong> ponemos a disposición de su departamento de ingeniería
              o compras nuestros más de 25 años de experiencia práctica de taller. Mediante
              consultoría en DFM (Design for Manufacturing), auditamos sus diseños para proponer
              ajustes que garanticen la funcionalidad de la pieza al menor costo de mecanizado y en
              el menor tiempo de entrega posible.
            </p>
          </>
        ),
        image: images.asesoria,
        imageAlt: "Ingenieros de SIMET revisando planos técnicos junto a piezas mecanizadas",
      }}
      features={{ heading: "Ejes de Optimización y Asesoría en Manufactura", items: optimizationAxes }}
      secondary={{ items: sectors }}
      banner={{
        heading: "¿Desea optimizar los costos de sus planos o piezas actuales?",
        text: "Envíenos sus requerimientos técnicos o planos preliminares para una revisión de fabricabilidad sin costo ni compromiso.",
      }}
    />
  );
}