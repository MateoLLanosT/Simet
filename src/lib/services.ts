import { images } from "@/lib/images";

/**
 * Catálogo de servicios con página propia. El menú, el footer y /servicios
 * se construyen desde aquí: para sumar un servicio basta con añadirlo a esta
 * lista y crear su página en src/app/servicios/<slug>/page.tsx con ServiceDetail.
 */
export interface Service {
  href: string;
  /** Nombre oficial (menú y tarjeta de /servicios) */
  name: string;
  /** Nombre corto (footer) */
  shortName: string;
  summary: string;
  image: string;
}

export const services: Service[] = [
  {
    href: "/servicios/mecanizado-cnc",
    name: "Centro de Mecanizado y Torno CNC",
    shortName: "Mecanizado y Torno CNC",
    summary: "Mecanizado de precisión, fabricación de piezas especiales, diseño industrial, torno, fresa y reparación de maquinaria.",
    image: images.cnc,
  },
  {
    href: "/servicios/corte-laser",
    name: "Corte Láser de Alta Precisión",
    shortName: "Corte Láser",
    summary: "Corte de alta precisión para proyectos industriales, arquitectónicos, publicitarios y decorativos.",
    image: images.laser,
  },
  {
    href: "/servicios/diseno-proyectos",
    name: "Diseño de Proyectos Metalmecánicos",
    shortName: "Proyectos Metalmecánicos",
    summary: "Ingeniería, planificación y desarrollo de soluciones industriales a medida.",
    image: images.proyectos,
  },
  {
    href: "/servicios/modelado-3d",
    name: "Modelado 3D para Manufactura",
    shortName: "Modelado 3D CAD",
    summary: "Modelado paramétrico y desarrollo visual para fabricación de piezas industriales.",
    image: images.modelado3d,
  },
  {
    href: "/servicios/asesoria-dfm",
    name: "Asesoría Técnica en DFM y Costos",
    shortName: "Asesoría DFM & Costos",
    summary: "Acompañamiento técnico desde el diseño hasta la entrega final.",
    image: images.asesoria,
  },
];
