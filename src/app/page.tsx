import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    title: "Centro de Fabricación y Diseño CNC",
    description: "Mecanizado de precisión, fabricación de piezas especiales, diseño industrial, torno, fresa y reparación de maquinaria.",
    link: "/servicios/modelado-3d",
  },
  {
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80",
    title: "Corte Láser de Alta Precisión",
    description: "Corte de alta precisión para proyectos industriales, arquitectónicos, publicitarios y decorativos.",
    link: "/#contacto",
  },
  {
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80",
    title: "Diseño y modelado 3D",
    description: "Modelado paramétrico y desarrollo visual para la fabricación de piezas y nuevos proyectos industriales.",
    link: "/servicios/modelado-3d",
  },
  {
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80",
    title: "Diseño de proyectos",
    description: "Ingeniería, planificación y desarrollo de soluciones industriales adaptadas a cada requerimiento.",
    link: "/servicios/diseno-proyectos",
  },
  {
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600&q=80",
    title: "Asesoría para fabricación",
    description: "Acompañamiento técnico en procesos de manufactura, desde el diseño hasta la entrega final.",
    link: "/servicios/asesoria-dfm",
  },
];

const industries = [
  {
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80",
    title: "Alimentos y bebidas",
    description: "Equipos sanitarios y de proceso para la industria de alimentos y bebidas.",
    link: "/servicios/diseno-proyectos",
  },
  {
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80",
    title: "Plásticos y empaques",
    description: "Moldes, herramentales y piezas de precisión para la industria del plástico y empaque.",
    link: "/servicios/modelado-3d",
  },
  {
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=800&q=80",
    title: "Industria automotriz",
    description: "Desarrollo y mecanizado de componentes metalmecánicos para equipos y procesos del sector automotriz.",
    link: "/servicios/asesoria-dfm",
  },
];

const products = [
  {
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80",
    icon: "◇",
    title: "LLAVEROS PERSONALIZADOS",
    description: "Diseños únicos en metal, ideales para empresas, eventos y regalos especiales.",
  },
  {
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=600&q=80",
    icon: "♫",
    title: "PIEZAS DECORATIVAS EN METAL",
    description: "Elementos decorativos con cortes de alta precisión para dar vida a tus espacios.",
  },
  {
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    icon: "▬",
    title: "FIGURAS DIMENSIONALES",
    description: "Modelos y figuras en metal cortadas con tecnología de precisión.",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    icon: "▲",
    title: "PANELES DECORATIVOS",
    description: "Diseños icónicos y personalizados para proyectos arquitectónicos y de interiorismo.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          background:
            "linear-gradient(115deg, rgba(8,37,60,0.94) 0%, rgba(13,56,90,0.88) 60%, rgba(8,37,60,0.92) 100%), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=85') center/cover no-repeat",
          color: "var(--white)",
          padding: "110px 0 100px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 40,
            position: "relative",
            zIndex: 2,
          }}
          className="simet-hero-inner"
        >
          <div style={{ maxWidth: 720 }}>
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: 2,
                color: "#70b4c8",
                textTransform: "uppercase",
                marginBottom: 14,
                display: "block",
              }}
            >
              METALMECÁNICA DE PRECISIÓN
            </span>
            <h1
              style={{
                fontSize: "clamp(2.3rem, 4.2vw, 3.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.5px",
                marginBottom: 18,
                color: "var(--white)",
              }}
            >
              Confía tus proyectos a expertos en metalmecánica
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                color: "#cbd5e1",
                marginBottom: 34,
                fontWeight: 300,
                maxWidth: 600,
              }}
            >
              Obtén piezas únicas y a la medida de tus necesidades.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <a
                href="#contacto"
                style={{
                  backgroundColor: "var(--primary-red)",
                  color: "var(--white)",
                  padding: "14px 30px",
                  borderRadius: "var(--radius-sm)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  letterSpacing: "0.5px",
                  transition: "var(--transition)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid var(--primary-red)",
                }}
              >
                SOLICITAR COTIZACIÓN
              </a>
              <a
                href="#productos"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "var(--white)",
                  border: "1.5px solid rgba(255,255,255,0.35)",
                  padding: "14px 28px",
                  borderRadius: "var(--radius-sm)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  transition: "var(--transition)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                VER PORTAFOLIO
              </a>
            </div>
          </div>
          <div
            style={{
              borderLeft: "2px solid #70b4c8",
              paddingLeft: 18,
              fontSize: "0.82rem",
              letterSpacing: "1.5px",
              lineHeight: 1.7,
              color: "#94a3b8",
              fontWeight: 600,
            }}
          >
            <span style={{ display: "block", color: "var(--white)" }}>PRECISIÓN</span>
            <span style={{ display: "block", color: "var(--white)" }}>INGENIERÍA</span>
            <span style={{ display: "block", color: "var(--white)" }}>SOLUCIONES REALES</span>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section style={{ padding: "85px 0 65px", backgroundColor: "var(--white)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ marginBottom: 45 }}>
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
            <h2
              style={{
                fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)",
                fontWeight: 800,
                color: "#113453",
                letterSpacing: "-0.5px",
              }}
            >
              ¿En qué podemos ayudarle?
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 20,
            }}
            className="simet-services-grid"
          >
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIAS */}
      <section style={{ padding: "70px 0 90px", backgroundColor: "#f1f5f9" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ marginBottom: 40 }}>
            <span
              style={{
                display: "inline-block",
                width: 42,
                height: 3,
                background: "var(--primary-red)",
                marginBottom: 8,
              }}
            />
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
              SECTORES QUE ATENDEMOS
            </span>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)",
                fontWeight: 800,
                color: "#113453",
                letterSpacing: "-0.5px",
              }}
            >
              Industrias donde operamos
            </h2>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}
            className="simet-industrias-grid"
          >
            {industries.map((ind) => (
              <article
                key={ind.title}
                style={{
                  background: "var(--white)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-sm)",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  flexDirection: "column",
                  transition: "var(--transition)",
                }}
              >
                <div style={{ height: 220, width: "100%", overflow: "hidden", position: "relative" }}>
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div
                  style={{
                    padding: "24px 22px 26px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#0e304b",
                      marginBottom: 12,
                    }}
                  >
                    {ind.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.55,
                      marginBottom: 20,
                      flexGrow: 1,
                    }}
                  >
                    {ind.description}
                  </p>
                  <Link
                    href={ind.link}
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
                    CONOCER SOLUCIONES →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section
        id="productos"
        style={{ padding: "90px 0 60px", backgroundColor: "var(--white)", textAlign: "center" }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto 50px" }}>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.2vw, 2.6rem)",
                fontWeight: 800,
                color: "#113453",
                marginBottom: 14,
                letterSpacing: "-0.3px",
              }}
            >
              NUESTROS PRODUCTOS
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-muted)" }}>
              En SIMET fabricamos productos metálicos a la medida, combinando tecnología, precisión y
              diseño para hacer realidad tus ideas.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
              textAlign: "left",
            }}
            className="simet-productos-grid"
          >
            {products.map((p) => (
              <article
                key={p.title}
                style={{
                  background: "var(--white)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-sm)",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  flexDirection: "column",
                  transition: "var(--transition)",
                }}
              >
                <div style={{ height: 200, width: "100%", overflow: "hidden", position: "relative" }}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div style={{ padding: "22px 20px 24px", flexGrow: 1 }}>
                  <div style={{ color: "var(--primary-red)", fontSize: "1.2rem", marginBottom: 8 }}>
                    {p.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 800,
                      color: "#0e304b",
                      letterSpacing: "0.4px",
                      marginBottom: 10,
                      lineHeight: 1.35,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                    {p.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Badges */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 30,
              marginTop: 55,
              paddingTop: 35,
              borderTop: "1px solid #e2e8f0",
              flexWrap: "wrap",
            }}
          >
            {[
              "Fabricación a la medida",
              "Alta precisión en cada detalle",
              "Soluciones para diversas industrias",
            ].map((badge) => (
              <div
                key={badge}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  letterSpacing: "0.6px",
                  textTransform: "uppercase",
                }}
              >
                <svg width={18} height={18} viewBox="0 0 24 24" fill="var(--accent-blue)">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section
        id="conocenos"
        style={{
          padding: "90px 0",
          background: "linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%)",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.15fr 0.85fr",
              gap: 50,
              alignItems: "center",
            }}
            className="simet-split-exp"
          >
            <div>
              <h2
                style={{
                  color: "var(--primary-red)",
                  fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)",
                  fontWeight: 800,
                  marginBottom: 22,
                  lineHeight: 1.25,
                }}
              >
                Con más de 25 años de experiencia...
              </h2>
              <p
                style={{
                  fontSize: "1.025rem",
                  color: "var(--text-main)",
                  marginBottom: 20,
                  textAlign: "justify",
                }}
              >
                Somos una empresa especializada en{" "}
                <strong>
                  ingeniería mecánica, mantenimiento industrial, mecanizado CNC, torno, fresa,
                  diseño y fabricación de piezas especiales, y corte por láser
                </strong>
                .
              </p>
              <p
                style={{
                  fontSize: "1.025rem",
                  color: "var(--text-main)",
                  marginBottom: 20,
                  textAlign: "justify",
                }}
              >
                En SIMET trabajamos con altos estándares de calidad y seguridad, garantizando
                precisión en cada proceso y soluciones adaptadas a las necesidades de nuestros
                clientes.
              </p>
              <a
                href="#contacto"
                style={{
                  backgroundColor: "var(--primary-red)",
                  color: "var(--white)",
                  padding: "14px 30px",
                  borderRadius: "var(--radius-sm)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  letterSpacing: "0.5px",
                  transition: "var(--transition)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid var(--primary-red)",
                  marginTop: 10,
                }}
              >
                Conócenos
              </a>
            </div>
            <div
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-md)",
                background: "#cbd5e1",
                position: "relative",
                minHeight: 330,
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80"
                alt="Equipo SIMET S.A.S."
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIALES */}
      <section
        style={{
          background: "#091522",
          padding: "85px 0",
          textAlign: "center",
          color: "var(--white)",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
          <h2
            style={{
              color: "var(--primary-red)",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "0.5px",
              marginBottom: 50,
              textTransform: "uppercase",
            }}
          >
            PONEMOS A TU DISPOSICIÓN
          </h2>
          <div
            style={{
              background: "rgba(2,10,18,0.75)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "var(--radius-lg)",
              padding: "55px 35px",
              boxShadow: "inset 0 0 40px rgba(0,0,0,0.6)",
              backdropFilter: "blur(4px)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 32,
              }}
              className="simet-mesh-grid"
            >
              {[
                {
                  icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z",
                  title: "+25 años de experiencia",
                  desc: "Precisión y calidad comprobada en cada proyecto.",
                },
                {
                  icon: "M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z",
                  title: "Soluciones para múltiples industrias",
                  desc: "Alimentos, bebidas, plásticos, construcción, publicidad y más.",
                },
                {
                  icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
                  title: "Acompañamiento personalizado",
                  desc: "Asesoría técnica desde el diseño hasta la entrega final.",
                },
                {
                  icon: "M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v5H6z",
                  title: "Tecnología de última generación",
                  desc: "Equipos CNC y láser para trabajos de alta precisión.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: 105,
                      height: 105,
                      borderRadius: "50%",
                      border: "3px solid var(--white)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 22,
                      transition: "var(--transition)",
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    <svg width={52} height={52} viewBox="0 0 24 24" fill="var(--white)">
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <h4
                    style={{
                      color: "var(--primary-red)",
                      fontSize: "1.1rem",
                      fontWeight: 800,
                      marginBottom: 10,
                      lineHeight: 1.35,
                      minHeight: 46,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "0.92rem", color: "#cbd5e1", lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1200px) {
          .simet-services-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 900px) {
          .simet-hero-inner { flex-direction: column !important; align-items: flex-start !important; }
          .simet-services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .simet-industrias-grid { grid-template-columns: 1fr !important; }
          .simet-split-exp { grid-template-columns: 1fr !important; }
          .simet-mesh-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .simet-services-grid { grid-template-columns: 1fr !important; }
          .simet-productos-grid { grid-template-columns: 1fr !important; }
          .simet-mesh-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
