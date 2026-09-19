import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";

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
    description: "Equipos sanitarios y de proceso para la industria de alimentos y bebidas con tolerancias sanitarias estrictas.",
    link: "/servicios/diseno-proyectos",
  },
  {
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80",
    title: "Plásticos y empaques",
    description: "Moldes, herramentales y piezas de precisión para la industria del plástico, formado y empaque masivo.",
    link: "/servicios/modelado-3d",
  },
  {
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=800&q=80",
    title: "Industria automotriz",
    description: "Desarrollo y mecanizado de componentes metalmecánicos de alto desempeño para líneas de producción automotriz.",
    link: "/servicios/asesoria-dfm",
  },
];

const products = [
  {
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80",
    icon: "◇",
    title: "LLAVEROS PERSONALIZADOS",
    description: "Diseños únicos en metal, ideales para empresas, eventos corporativos y recordatorios de alta calidad.",
  },
  {
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=600&q=80",
    icon: "♫",
    title: "PIEZAS DECORATIVAS EN METAL",
    description: "Elementos decorativos con cortes láser de alta precisión para dar presencia estética a tus espacios.",
  },
  {
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    icon: "▬",
    title: "FIGURAS DIMENSIONALES",
    description: "Modelos y figuras en metal ensambladas mediante corte computarizado y tolerancias exactas.",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    icon: "▲",
    title: "PANELES DECORATIVOS",
    description: "Diseños icónicos y celosías personalizadas para proyectos de arquitectura e interiorismo industrial.",
  },
];

export default function Home() {
  return (
    <>
      {/* 1. HERO PRINCIPAL */}
      <section
        style={{
          position: "relative",
          background:
            "linear-gradient(120deg, rgba(6, 17, 30, 0.94) 0%, rgba(13, 38, 64, 0.88) 60%, rgba(6, 17, 30, 0.93) 100%), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=85') center/cover no-repeat",
          color: "var(--white)",
          padding: "130px 0 110px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

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
          <div style={{ maxWidth: 740 }}>
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "2.5px",
                color: "#38bdf8",
                textTransform: "uppercase",
                marginBottom: 16,
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(56, 189, 248, 0.12)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                padding: "6px 14px",
                borderRadius: "100px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#38bdf8",
                  boxShadow: "0 0 8px #38bdf8",
                }}
              />
              METALMECÁNICA DE PRECISIÓN
            </span>

            <h1
              style={{
                fontSize: "clamp(2.4rem, 4.4vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.8px",
                marginBottom: 20,
                color: "var(--white)",
                textShadow: "0 2px 20px rgba(0,0,0,0.35)",
              }}
            >
              Confía tus proyectos a expertos en metalmecánica
            </h1>

            <p
              style={{
                fontSize: "1.18rem",
                color: "#cbd5e1",
                marginBottom: 38,
                fontWeight: 400,
                maxWidth: 620,
                lineHeight: 1.6,
              }}
            >
              Obtén piezas únicas y a la medida de tus necesidades con tolerancias exactas y acabados industriales.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
              <a
                href="#contacto"
                style={{
                  background: "linear-gradient(135deg, var(--primary-red) 0%, #7d141b 100%)",
                  color: "var(--white)",
                  padding: "15px 32px",
                  borderRadius: "var(--radius-sm)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  letterSpacing: "0.5px",
                  transition: "var(--transition)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 10px 25px -4px rgba(158, 28, 37, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.3)",
                }}
                className="hover-lift"
              >
                SOLICITAR COTIZACIÓN
              </a>

              <a
                href="#productos"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  color: "var(--white)",
                  border: "1px solid rgba(255, 255, 255, 0.28)",
                  padding: "15px 30px",
                  borderRadius: "var(--radius-sm)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  transition: "var(--transition)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.15)",
                }}
                className="hover-lift"
              >
                VER PORTAFOLIO
              </a>
            </div>
          </div>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.16)",
              borderLeft: "4px solid #38bdf8",
              borderRadius: "var(--radius-md)",
              padding: "22px 26px",
              fontSize: "0.82rem",
              letterSpacing: "2px",
              lineHeight: 1.9,
              color: "#94a3b8",
              fontWeight: 600,
              boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.2)",
              minWidth: "230px",
            }}
          >
            <span style={{ display: "block", color: "var(--white)", fontWeight: 700 }}>PRECISIÓN</span>
            <span style={{ display: "block", color: "var(--white)", fontWeight: 700 }}>INGENIERÍA</span>
            <span style={{ display: "block", color: "var(--white)", fontWeight: 700 }}>SOLUCIONES REALES</span>
          </div>
        </div>
      </section>

      {/* 2. SERVICIOS */}
      <section style={{ padding: "95px 0 75px", backgroundColor: "#f8fafc" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ marginBottom: 50 }}>
            <span
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "2px",
                color: "var(--primary-red)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 8,
              }}
            >
              NUESTROS SERVICIOS
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3vw, 2.7rem)",
                fontWeight: 800,
                color: "#0f172a",
                letterSpacing: "-0.6px",
              }}
            >
              ¿En qué podemos ayudarle?
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 22,
            }}
            className="simet-services-grid"
          >
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. INDUSTRIAS */}
      <section style={{ padding: "90px 0 100px", backgroundColor: "#f1f5f9" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ marginBottom: 45 }}>
            <span
              style={{
                display: "inline-block",
                width: 44,
                height: 4,
                background: "linear-gradient(90deg, var(--primary-red), #ef4444)",
                marginBottom: 10,
                borderRadius: "2px",
              }}
            />
            <span
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "2px",
                color: "var(--primary-red)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 6,
              }}
            >
              SECTORES QUE ATENDEMOS
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3vw, 2.7rem)",
                fontWeight: 800,
                color: "#0f172a",
                letterSpacing: "-0.6px",
              }}
            >
              Industrias donde operamos
            </h2>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 30 }}
            className="simet-industrias-grid"
          >
            {industries.map((ind) => (
              <article
                key={ind.title}
                style={{
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  boxShadow: "0 14px 30px -8px rgba(15, 23, 42, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.9)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "var(--transition)",
                }}
                className="hover-lift"
              >
                <div style={{ height: 230, width: "100%", overflow: "hidden", position: "relative" }}>
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
                    padding: "26px 24px 28px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: "#0e304b",
                      marginBottom: 12,
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {ind.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                      marginBottom: 22,
                      flexGrow: 1,
                    }}
                  >
                    {ind.description}
                  </p>
                  <Link
                    href={ind.link}
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "var(--primary-red)",
                      letterSpacing: "0.6px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
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

      {/* 4. PRODUCTOS */}
      <section
        id="productos"
        style={{ padding: "100px 0 70px", backgroundColor: "var(--white)", textAlign: "center" }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto 55px" }}>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.2vw, 2.75rem)",
                fontWeight: 800,
                color: "#0f172a",
                marginBottom: 14,
                letterSpacing: "-0.5px",
              }}
            >
              NUESTROS PRODUCTOS
            </h2>
            <p style={{ fontSize: "1.08rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
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
                  background: "rgba(255, 255, 255, 0.75)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.06)",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  flexDirection: "column",
                  transition: "var(--transition)",
                }}
                className="hover-lift"
              >
                <div style={{ height: 210, width: "100%", overflow: "hidden", position: "relative" }}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div style={{ padding: "24px 20px 24px", flexGrow: 1 }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "rgba(158, 28, 37, 0.08)",
                      color: "var(--primary-red)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.1rem",
                      marginBottom: 12,
                    }}
                  >
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
                  <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.55 }}>
                    {p.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
              marginTop: 60,
              paddingTop: 40,
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
                  gap: 10,
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#475569",
                  letterSpacing: "0.6px",
                  textTransform: "uppercase",
                  background: "rgba(241, 245, 249, 0.75)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  padding: "10px 20px",
                  borderRadius: "100px",
                  border: "1px solid #cbd5e1",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.03)",
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

      {/* 5. EXPERIENCIA */}
      <section
        id="conocenos"
        style={{
          padding: "100px 0",
          background: "linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%)",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.15fr 0.85fr",
              gap: 55,
              alignItems: "center",
            }}
            className="simet-split-exp"
          >
            <div>
              <h2
                style={{
                  color: "var(--primary-red)",
                  fontSize: "clamp(2rem, 3.2vw, 2.75rem)",
                  fontWeight: 800,
                  marginBottom: 24,
                  lineHeight: 1.2,
                  letterSpacing: "-0.6px",
                }}
              >
                Con más de 25 años de experiencia...
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text-main)",
                  marginBottom: 20,
                  textAlign: "justify",
                  lineHeight: 1.7,
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
                  fontSize: "1.05rem",
                  color: "var(--text-main)",
                  marginBottom: 24,
                  textAlign: "justify",
                  lineHeight: 1.7,
                }}
              >
                En SIMET trabajamos con altos estándares de calidad y seguridad, garantizando
                precisión en cada proceso y soluciones adaptadas a las necesidades de nuestros
                clientes.
              </p>
              <a
                href="#contacto"
                style={{
                  background: "linear-gradient(135deg, var(--primary-red) 0%, #7d141b 100%)",
                  color: "var(--white)",
                  padding: "15px 32px",
                  borderRadius: "var(--radius-sm)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  letterSpacing: "0.5px",
                  transition: "var(--transition)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,255,255,0.2)",
                  boxShadow: "0 8px 20px rgba(158, 28, 37, 0.35)",
                }}
                className="hover-lift"
              >
                Conócenos
              </a>
            </div>

            <div
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.2)",
                border: "5px solid rgba(255, 255, 255, 0.9)",
                background: "#cbd5e1",
                position: "relative",
                minHeight: 380,
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

      {/* 6. DIFERENCIALES DARK GLASS */}
      <section
        style={{
          background: "#071524",
          backgroundImage:
            "radial-gradient(circle at top right, rgba(158, 28, 37, 0.22), transparent 45%), radial-gradient(circle at bottom left, rgba(56, 189, 248, 0.12), transparent 40%)",
          padding: "100px 0",
          textAlign: "center",
          color: "var(--white)",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
          <h2
            style={{
              color: "#ef4444",
              fontSize: "clamp(2rem, 3.2vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "0.8px",
              marginBottom: 55,
              textTransform: "uppercase",
              textShadow: "0 0 25px rgba(239, 68, 68, 0.3)",
            }}
          >
            PONEMOS A TU DISPOSICIÓN
          </h2>

          <div
            style={{
              background: "rgba(11, 27, 44, 0.65)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "var(--radius-lg)",
              padding: "60px 40px",
              boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 36,
              }}
              className="simet-mesh-grid"
            >
              {[
                {
                  icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z",
                  title: "+25 años de experiencia",
                  desc: "Precisión y calidad comprobada en cada proyecto desarrollado con tecnología de punta.",
                },
                {
                  icon: "M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z",
                  title: "Soluciones para múltiples industrias",
                  desc: "Alimentos, bebidas, plásticos, construcción, publicidad y manufactura especializada.",
                },
                {
                  icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
                  title: "Acompañamiento personalizado",
                  desc: "Asesoría técnica y diagnóstico DFM desde la idea conceptual hasta la entrega final.",
                },
                {
                  icon: "M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v5H6z",
                  title: "Tecnología de última generación",
                  desc: "Centros de mecanizado CNC de alta velocidad y fibra láser para cortes exigentes.",
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
                  className="simet-mesh-item"
                >
                  <div
                    style={{
                      width: 95,
                      height: 95,
                      borderRadius: "50%",
                      border: "2px solid rgba(255,255,255,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                      transition: "var(--transition)",
                      background: "rgba(255,255,255,0.04)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      boxShadow: "inset 0 1px 2px rgba(255, 255, 255, 0.2)",
                    }}
                    className="simet-circle-icon"
                  >
                    <svg width={48} height={48} viewBox="0 0 24 24" fill="var(--white)">
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <h4
                    style={{
                      color: "#f87171",
                      fontSize: "1.12rem",
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
                  <p style={{ fontSize: "0.92rem", color: "#94a3b8", lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FORMULARIO DE CONTACTO INTEGRADO DIRECTAMENTE AQUÍ */}
      <section id="contacto">
        <ContactForm />
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