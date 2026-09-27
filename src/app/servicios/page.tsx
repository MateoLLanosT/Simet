import ServiceCard from "@/components/ServiceCard";
import { images } from "@/lib/images";
import { stagger } from "@/lib/motion";

const servicios = [
  {
    title: "Diseño de Proyectos Metalmecánicos",
    description: "Ingeniería, planificación y desarrollo de soluciones industriales a medida.",
    image: images.proyectos,
    link: "/servicios/diseno-proyectos",
  },
  {
    title: "Modelado 3D para Manufactura",
    description: "Modelado paramétrico y desarrollo visual para fabricación de piezas industriales.",
    image: images.modelado3d,
    link: "/servicios/modelado-3d",
  },
  {
    title: "Asesoría Técnica en DFM y Costos",
    description: "Acompañamiento técnico desde el diseño hasta la entrega final.",
    image: images.asesoria,
    link: "/servicios/asesoria-dfm",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <section className="simet-page-hero">
        <div className="simet-container simet-container--narrow">
          <span className="simet-red-indicator simet-red-indicator--center simet-enter" style={stagger(0)} />
          <span className="simet-subtag simet-enter" style={stagger(0)}>
            NUESTROS SERVICIOS
          </span>
          <h1 className="simet-enter" style={stagger(1)}>
            Soluciones Integrales en Metalmecánica
          </h1>
          <p className="simet-enter" style={stagger(2)}>
            Transformamos necesidades operativas en soluciones industriales personalizadas,
            garantizando robustez, precisión y seguridad operativa.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 0 80px" }}>
        <div className="simet-container simet-container--narrow simet-servicios-grid">
          {servicios.map((s, i) => (
            <ServiceCard key={s.link} index={i} sizes="(max-width: 900px) 100vw, 33vw" {...s} />
          ))}
        </div>
      </section>
    </>
  );
}
