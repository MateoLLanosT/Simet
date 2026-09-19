import Link from "next/link";
import Image from "next/image";

const servicios = [
  {
    title: "Diseño de Proyectos Metalmecánicos",
    description: "Ingeniería, planificación y desarrollo de soluciones industriales a medida.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    href: "/servicios/diseno-proyectos",
  },
  {
    title: "Modelado 3D para Manufactura",
    description: "Modelado paramétrico y desarrollo visual para fabricación de piezas industriales.",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80",
    href: "/servicios/modelado-3d",
  },
  {
    title: "Asesoría Técnica en DFM y Costos",
    description: "Acompañamiento técnico desde el diseño hasta la entrega final.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
    href: "/servicios/asesoria-dfm",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <section style={{ padding: "70px 0 50px", textAlign: "center" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <span
            style={{
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "1.5px",
              color: "var(--text-muted)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: 6,
            }}
          >
            NUESTROS SERVICIOS
          </span>
          <h1
            style={{
              color: "var(--primary-red)",
              fontSize: "clamp(2rem, 3.8vw, 2.95rem)",
              fontWeight: 800,
              letterSpacing: "-0.5px",
              lineHeight: 1.25,
              maxWidth: 980,
              margin: "0 auto 20px",
            }}
          >
            Soluciones Integrales en Metalmecánica
          </h1>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1.1rem",
              maxWidth: 820,
              margin: "0 auto 34px",
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Transformamos necesidades operativas en soluciones industriales personalizadas,
            garantizando robustez, precisión y seguridad operativa.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 0 80px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}
          className="simet-servicios-grid"
        >
          {servicios.map((s) => (
            <Link key={s.href} href={s.href}>
              <article
                style={{
                  background: "var(--white)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-sm)",
                  border: "1px solid #eef2f6",
                  display: "flex",
                  flexDirection: "column",
                  transition: "var(--transition)",
                  height: "100%",
                }}
              >
                <div style={{ height: 220, width: "100%", overflow: "hidden", position: "relative" }}>
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div
                  style={{
                    padding: "28px 24px 30px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#0f2b42",
                      lineHeight: 1.35,
                      marginBottom: 12,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.55,
                      marginBottom: 20,
                      flexGrow: 1,
                    }}
                  >
                    {s.description}
                  </p>
                  <span
                    style={{
                      fontSize: "0.84rem",
                      fontWeight: 700,
                      color: "var(--primary-red)",
                      letterSpacing: "0.5px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    SABER MÁS →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .simet-servicios-grid { grid-template-columns: 1fr !important; max-width: 480px; margin: 0 auto; }
        }
      `}</style>
    </>
  );
}
