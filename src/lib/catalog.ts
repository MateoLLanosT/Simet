/**
 * Catálogo 3D. Los modelos .glb viven en public/models (exportados desde Inventor).
 * Material, proceso y descripciones son PROVISIONALES hasta que SIMET los confirme.
 */
export type Finish = "acero" | "acero-oscuro" | "teflon";

export interface CatalogItem {
  slug: string;
  name: string;
  category: string;
  process: string;
  material: string;
  finish: Finish;
  model: string;
  description: string;
  specs: { label: string; value: string }[];
}

export const catalog: CatalogItem[] = [
  {
    slug: "eje",
    name: "Eje de transmisión",
    category: "Transmisión",
    process: "Torneado CNC",
    material: "Acero 4140",
    finish: "acero",
    model: "/models/eje-3.glb",
    description: "Eje torneado con escalonamientos y alojamientos para rodamientos, fabricado bajo plano o a partir de muestra física.",
    specs: [{ label: "Tolerancia", value: "±0.01 mm" }, { label: "Acabado", value: "Rectificado" }],
  },
  {
    slug: "pinon-pequeno",
    name: "Piñón pequeño",
    category: "Transmisión",
    process: "Fresado CNC",
    material: "Acero 1045",
    finish: "acero-oscuro",
    model: "/models/pinon-pequeno.glb",
    description: "Piñón de dientes helicoidales para reposición en maquinaria industrial.",
    specs: [{ label: "Tratamiento", value: "Temple" }, { label: "Uso", value: "Repuesto" }],
  },
  {
    slug: "rosca",
    name: "Pieza roscada",
    category: "Componentes",
    process: "Torneado CNC",
    material: "Acero inoxidable 304",
    finish: "acero",
    model: "/models/rosca.glb",
    description: "Componente con rosca especial mecanizada para ensambles de precisión.",
    specs: [{ label: "Rosca", value: "Especial" }, { label: "Tolerancia", value: "±0.01 mm" }],
  },
  {
    slug: "punzon",
    name: "Punzón",
    category: "Herramentales",
    process: "Torneado y rectificado",
    material: "Acero de herramienta",
    finish: "acero-oscuro",
    model: "/models/punzon.glb",
    description: "Punzón para matrices de corte y troquelado.",
    specs: [{ label: "Tratamiento", value: "Temple" }, { label: "Uso", value: "Troquelado" }],
  },
  {
    slug: "mordazas",
    name: "Mordazas",
    category: "Herramentales",
    process: "Fresado CNC",
    material: "Acero 1045",
    finish: "acero",
    model: "/models/mordazas.glb",
    description: "Mordazas para sujeción y sellado en líneas de empaque.",
    specs: [{ label: "Sector", value: "Plásticos y empaques" }],
  },
  {
    slug: "placa-teflon",
    name: "Placa en teflón",
    category: "Polímeros técnicos",
    process: "Fresado CNC",
    material: "PTFE (Teflón)",
    finish: "teflon",
    model: "/models/placa-teflon.glb",
    description: "Placa mecanizada en PTFE para aplicaciones de bajo rozamiento y grado alimenticio.",
    specs: [{ label: "Sector", value: "Alimentos y bebidas" }],
  },
  {
    slug: "tapa",
    name: "Tapa",
    category: "Componentes",
    process: "Torneado CNC",
    material: "Aluminio 6061",
    finish: "acero",
    model: "/models/tapa.glb",
    description: "Tapa mecanizada para cierre de carcasas y equipos.",
    specs: [{ label: "Tolerancia", value: "±0.02 mm" }],
  },
];

export const getItem = (slug: string) => catalog.find((i) => i.slug === slug);
