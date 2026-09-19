import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Diseño y Desarrollo de Proyectos Metalmecánicos | SIMET S.A.S.",
  description:
    "Ingeniería, planificación y desarrollo de soluciones industriales a medida para la industria.",
};

const capabilities = [
  {
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg viewBox="0 0 24 24" width={26} height={26} fill="currentColor">
        <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" />
      </svg>
    ),
    title: "Sistemas de Transporte Industrial",
    desc: "Bandas modulares sanitarias, transportadores de rodillos por gravedad/motorizados y mesas de acumulación rotativas.",
    tag: "Líneas de Transporte",
  },
  {
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg viewBox="0 0 24 24" width={26} height={26} fill="currentColor">
        <path d="m12 2 9.5 5.5v11L12 24l-9.5-5.5v-11L12 2Zm0 2.311L4.85 8.442 12 12.574l7.15-4.132L12 4.311ZM3.85 10.14v7.719L11 21.99v-7.72L3.85 10.14Zm16.3 0-7.15 4.13v7.72l7.15-4.13v-7.72Z" />
      </svg>
    ),
    title: "Dispositivos de Ensamble y Utillajes",
    desc: "Diseño de jigs & fixtures ergonómicos, galgas de verificación dimensional y cunas de montaje para ensamble asistido.",
    tag: "Jigs & Fixtures",
  },
  {
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg viewBox="0 0 24 24" width={26} height={26} fill="currentColor">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm-1 2 5 5h-5V4ZM8 12h8v2H8v-2Zm0 4h8v2H8v-2Zm0-8h4v2H8V8Z" />
      </svg>
    ),
    title: "Automatización Mecánica y Neumática",
    desc: "Mecanismos de transferencia paso a paso, estaciones de prensado neumático, dosificadores y guillotinas de corte.",
    tag: "Automatización",
  },
  {
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg viewBox="0 0 24 24" width={26} height={26} fill="currentColor">
        <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 14H3V4h18v12Z" />
      </svg>
    ),
    title: "Modernización y Retrofit Mecánico",
    desc: "Rediseño y repotenciación estructural de maquinaria obsoleta para elevar velocidades de operación y seguridad.",
    tag: "Retrofit de Planta",
  },
];

const sectors = [
  {
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96ZM12 18l-1.5-1.5L12 15l1.5 1.5L12 18Zm3-3-1.5-1.5L15 12l1.5 1.5L15 15Zm-6 0-1.5-1.5L9 12l1.5 1.5L9 15Z" />
      </svg>
    ),
    title: "Alimentos y Bebidas",
    desc: "Líneas sanitarias en acero inoxidable AISI 304/316 con sistemas de fácil desarme para lavado CIP, transportadores de envases y dosificadores.",
  },
  {
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
        <path d="m12 1.5 9 5.2v10.6l-9 5.2-9-5.2V6.7l9-5.2zm0 2.3L5.4 7.6 12 11.4l6.6-3.8L12 3.8zM4.5 9.2v7.7l6.5 3.8v-7.7L4.5 9.2zm15 0-6.5 3.8v7.7l6.5-3.8V9.2z" />
      </svg>
    ),
    title: "Plásticos y Empaques",
    desc: "Sistemas de alimentación para tolvas, desbobinadores industriales, carros de cambio de moldes y mesas de empaque secundario.",
  },
  {
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
      </svg>
    ),
    title: "Industria Automotriz",
    desc: "Pistas de rodillos para flujo continuo de partes, cunas de soldadura repetitiva y estaciones de prueba de carga y fatiga.",
  },
];

export default function DisenoProyectosPage() {
  return (
    <>
      {/* 1. HERO CON IMAGEN DE FONDO & AMBIENTE GLASS */}
      <section
        style={{
          position: "relative",
          background:
            "linear-gradient(125deg, rgba(6, 17, 30, 0.95) 0%, rgba(11, 33, 56, 0.9) 60%, rgba(6, 17, 30, 0.94) 100%), url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1920&q=85') center/cover no-repeat",
          color: "var(--white)",
          padding: "115px 0 95px",
          overflow: "hidden",
        }}
      >
        {/* Glow difuso ambiental */}
        <div
          style={{
            position: "absolute",
            top: "-15%",
            right: "12%",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.16) 0%, transparent 70%)",
            filter: "blur(70px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "2.5px",
                color: "#38bdf8",
                textTransform: "uppercase",
                marginBottom: 20,
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(56, 189, 248, 0.12)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(56, 189, 248, 0.28)",
                padding: "6px 16px",
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
              INGENIERÍA &amp; INTEGRACIÓN MECÁNICA
            </span>

            <h1
              style={{
                fontSize: "clamp(2.1rem, 4vw, 3.25rem)",
                fontWeight: 800,
                letterSpacing: "-0.8px",
                lineHeight: 1.2,
                color: "var(--white)",
                marginBottom: 22,
                textShadow: "0 2px 20px rgba(0,0,0,0.35)",
              }}
            >
              Diseño y Desarrollo de Proyectos Metalmecánicos e Integración Industrial
            </h1>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "1.15rem",
                maxWidth: 820,
                margin: "0 auto 36px",
                lineHeight: 1.65,
                fontWeight: 400,
              }}
            >
              Transformamos necesidades operativas en maquinaria, dispositivos mecánicos y líneas de
              producción a medida, garantizando robustez y seguridad operativa en planta.
            </p>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <a
                href="#banner"
                style={{
                  background: "linear-gradient(135deg, var(--primary-red) 0%, #7d141b 100%)",
                  color: "var(--white)",
                  padding: "15px 34px",
                  borderRadius: "var(--radius-sm)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  letterSpacing: "0.5px",
                  transition: "var(--transition)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 10px 25px -4px rgba(158, 28, 37, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.3)",
                }}
                className="hover-lift"
              >
                Evaluar mi Proyecto
              </a>

              <a
                href="#capacidades"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  color: "var(--white)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  padding: "15px 30px",
                  borderRadius: "var(--radius-sm)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  transition: "var(--transition)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="hover-lift"
              >
                Ver Capacidades de Planta
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SOLUCIONES MECÁNICAS (SPLIT CON IMAGEN + CHIP TÉCNICO GLASS) */}
      <section style={{ padding: "95px 0", backgroundColor: "#f8fafc" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
          <div
            className="simet-split"
            style={{
              display: "grid",
              gridTemplateColumns: "0.95fr 1.05fr",
              gap: 60,
              alignItems: "center",
            }}
          >
            {/* Imagen con marco Glass y Chip Flotante */}
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.18)",
                border: "6px solid rgba(255, 255, 255, 0.9)",
                background: "#cbd5e1",
                minHeight: 420,
              }}
              className="hover-lift"
            >
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                alt="Ingeniero en diseño mecánico CAD y maquinado de proyectos"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Badge Flotante Glass */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  right: "20px",
                  background: "rgba(7, 21, 36, 0.82)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  borderRadius: "var(--radius-md)",
                  padding: "16px 20px",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                }}
              >
                <div>
                  <span style={{ display: "block", fontSize: "0.72rem", letterSpacing: "1.5px", color: "#38bdf8", fontWeight: 700 }}>
                    PROCESO INTEGRAL
                  </span>
                  <strong style={{ fontSize: "0.95rem" }}>Diseño CAD 3D &rarr; Fabricación &rarr; Puesta en Marcha</strong>
                </div>
                <span
                  style={{
                    background: "var(--primary-red)",
                    color: "#fff",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: "100px",
                  }}
                >
                  Llave en Mano
                </span>
              </div>
            </div>

            {/* Contenido de Soluciones */}
            <div className="simet-solutions-content">
              <span
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  color: "var(--primary-red)",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: 10,
                }}
              >
                SOLUCIONES ADAPTADAS A SU PLANTA
              </span>
              <h2
                style={{
                  color: "#0f172a",
                  fontSize: "clamp(2rem, 3vw, 2.6rem)",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: "-0.6px",
                  marginBottom: 24,
                }}
              >
                Soluciones mecánicas a la medida de su planta
              </h2>
              <p
                style={{
                  fontSize: "1.025rem",
                  color: "var(--text-main)",
                  lineHeight: 1.7,
                  marginBottom: 18,
                  textAlign: "justify",
                }}
              >
                En las plantas de producción, la maquinaria estándar de catálogo muchas veces no se
                adapta a las limitaciones de espacio, los ritmos de trabajo específicos o las
                características del producto local.
              </p>
              <p
                style={{
                  fontSize: "1.025rem",
                  color: "var(--text-main)",
                  lineHeight: 1.7,
                  marginBottom: 28,
                  textAlign: "justify",
                }}
              >
                En <strong>SIMET S.A.S.</strong> concebimos, calculamos y construimos maquinaria y
                dispositivos industriales personalizados. Nuestro equipo de ingeniería analiza a fondo
                las condiciones reales de su línea de producción para entregar sistemas que eliminan
                cuellos de botella, aumentan la cadencia operativa y reducen tiempos muertos.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {["Cálculo de cargas y esfuerzos", "Planos de ensamble y despiece", "Integración neumática"].map((item) => (
                  <span
                    key={item}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: "rgba(255, 255, 255, 0.8)",
                      border: "1px solid #cbd5e1",
                      borderRadius: "100px",
                      padding: "6px 14px",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "#334155",
                    }}
                  >
                    <span style={{ color: "var(--primary-red)" }}>✓</span> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAPACIDADES DE DESARROLLO (TARJETAS GLASS CON PREVIEWS FOTOGRÁFICOS) */}
      <section id="capacidades" style={{ padding: "85px 0 75px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
          <div className="simet-section-header" style={{ maxWidth: 780, margin: "0 auto 55px", textAlign: "center" }}>
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
              ALCANCE DE INGENIERÍA
            </span>
            <h2 className="simet-section-title" style={{ fontSize: "clamp(2rem, 3.2vw, 2.6rem)", color: "#0f172a" }}>
              Capacidades de Desarrollo e Integración de Proyectos
            </h2>
          </div>

          <div className="simet-grid-4" style={{ gap: 24 }}>
            {capabilities.map((c) => (
              <article
                key={c.title}
                style={{
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid #e2e8f0",
                  overflow: "hidden",
                  boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.06)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "var(--transition)",
                }}
                className="hover-lift"
              >
                {/* Imagen Preview */}
                <div style={{ height: 160, width: "100%", position: "relative", overflow: "hidden" }}>
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(15, 23, 42, 0.6) 0%, transparent 60%)",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      background: "rgba(7, 21, 36, 0.75)",
                      backdropFilter: "blur(8px)",
                      color: "#38bdf8",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: "100px",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    {c.tag}
                  </span>
                </div>

                <div style={{ padding: "22px 20px 24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "rgba(158, 28, 37, 0.08)",
                      color: "var(--primary-red)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 14,
                      marginTop: "-38px",
                      position: "relative",
                      zIndex: 2,
                      boxShadow: "0 6px 14px rgba(0,0,0,0.1)",
                      border: "2px solid #ffffff",
                    }}
                  >
                    {c.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 800,
                      color: "#0e304b",
                      marginBottom: 10,
                      lineHeight: 1.35,
                      minHeight: 44,
                    }}
                  >
                    {c.title}
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6, flexGrow: 1 }}>
                    {c.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="simet-divider" style={{ margin: "75px auto 65px" }} />

          {/* 4. SECTORES INDUSTRIALES CON FOTOGRAFÍAS */}
          <div className="simet-section-header" style={{ maxWidth: 760, margin: "0 auto 50px", textAlign: "center" }}>
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
              SECTORES ATENDIDOS
            </span>
            <h2 className="simet-section-title" style={{ fontSize: "clamp(2rem, 3.2vw, 2.6rem)", color: "#0f172a" }}>
              Sectores Industriales de Aplicación
            </h2>
          </div>

          <div className="simet-grid-3" style={{ gap: 30 }}>
            {sectors.map((s) => (
              <article
                key={s.title}
                style={{
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid #e2e8f0",
                  overflow: "hidden",
                  boxShadow: "0 12px 28px -6px rgba(15, 23, 42, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "var(--transition)",
                }}
                className="hover-lift"
              >
                <div style={{ height: 210, width: "100%", position: "relative", overflow: "hidden" }}>
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(7, 21, 36, 0.7) 0%, transparent 60%)",
                    }}
                  />
                </div>

                <div style={{ padding: "26px 22px 28px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      background: "var(--primary-red)",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 14,
                      marginTop: "-42px",
                      position: "relative",
                      zIndex: 2,
                      boxShadow: "0 6px 16px rgba(158, 28, 37, 0.35)",
                      border: "2px solid #ffffff",
                    }}
                  >
                    {s.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 800,
                      color: "#0e304b",
                      marginBottom: 12,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.6, flexGrow: 1 }}>
                    {s.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA DARK GLASS BANNER */}
      <section id="banner" style={{ padding: "30px 0 85px", backgroundColor: "#f8fafc" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              background: "linear-gradient(130deg, #071524 0%, #0d2640 100%)",
              borderRadius: "var(--radius-lg)",
              padding: "65px 40px",
              textAlign: "center",
              color: "var(--white)",
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: "0 25px 50px -12px rgba(7, 21, 36, 0.45)",
            }}
          >
            {/* Glow sutil */}
            <div
              style={{
                position: "absolute",
                top: "-50%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "400px",
                height: "300px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(239, 68, 68, 0.25) 0%, transparent 70%)",
                filter: "blur(60px)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", zIndex: 2, maxWidth: 840, margin: "0 auto" }}>
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "2.5px",
                  color: "#38bdf8",
                  textTransform: "uppercase",
                  marginBottom: 14,
                  display: "inline-block",
                }}
              >
                CONSULTORÍA SIN COSTO
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.9rem, 3.2vw, 2.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.25,
                  marginBottom: 16,
                  letterSpacing: "-0.5px",
                }}
              >
                ¿Tiene un desafío operativo o requiere maquinaria a medida?
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#cbd5e1",
                  lineHeight: 1.6,
                  marginBottom: 32,
                  fontWeight: 400,
                }}
              >
                Cuéntenos su necesidad operativa en planta. Nuestros ingenieros evaluarán la viabilidad técnica y le presentarán una propuesta formal y cronograma de fabricación.
              </p>

              <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
                <Link
                  href="/#contacto"
                  style={{
                    background: "linear-gradient(135deg, var(--primary-red) 0%, #7d141b 100%)",
                    color: "var(--white)",
                    padding: "16px 36px",
                    borderRadius: "var(--radius-sm)",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    letterSpacing: "0.5px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 10px 25px -4px rgba(158, 28, 37, 0.5)",
                  }}
                  className="hover-lift"
                >
                  Solicitar Evaluación de Proyecto
                </Link>

                <a
                  href="https://wa.me/573173315892"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    color: "var(--white)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    padding: "16px 32px",
                    borderRadius: "var(--radius-sm)",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                  className="hover-lift"
                >
                  Hablar con un Ingeniero por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}