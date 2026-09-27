import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";
import { stagger } from "@/lib/motion";

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
          {services.map((s, i) => (
            <ServiceCard
              key={s.href}
              index={i}
              image={s.image}
              title={s.name}
              description={s.summary}
              link={s.href}
              sizes="(max-width: 900px) 100vw, 33vw"
            />
          ))}
        </div>
      </section>
    </>
  );
}
