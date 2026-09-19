import Image from "next/image";

export const metadata = {
  title: "Diseño y Modelado 3D Mecánico | SIMET S.A.S.",
  description:
    "Modelado paramétrico 3D, ingeniería inversa y planos normalizados para manufactura de alta precisión.",
};

const cadCapabilities = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width={58} height={58} fill="currentColor"><path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/></svg>
    ),
    title: "Ingeniería Inversa",
    desc: "Levantamiento dimensional de muestras físicas y reconstrucción de piezas importadas o descontinuadas.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={58} height={58} fill="currentColor"><path d="m12 2 9.5 5.5v11L12 24l-9.5-5.5v-11L12 2Zm0 2.311L4.85 8.442 12 12.574l7.15-4.132L12 4.311ZM3.85 10.14v7.719L11 21.99v-7.72L3.85 10.14Zm16.3 0-7.15 4.13v7.72l7.15-4.13v-7.72Z"/></svg>
    ),
    title: "Modelado Paramétrico 3D",
    desc: "Geometría inteligente con simulación de ensambles dinámicos y detección previa de interferencias.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={58} height={58} fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm-1 2 5 5h-5V4ZM8 12h8v2H8v-2Zm0 4h8v2H8v-2Zm0-8h4v2H8V8Z"/></svg>
    ),
    title: "Planos Normalizados 2D",
    desc: "Documentación técnica bajo normas ISO/ASME con tolerancias GD&T y especificación de rugosidad.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={58} height={58} fill="currentColor"><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 14H3V4h18v12Z"/></svg>
    ),
    title: "Renderizado y Validación",
    desc: "Representaciones fotorrealistas para aprobación visual de ensamble y manuales técnicos de montaje.",
  },
];

const sectors = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width={58} height={58} fill="currentColor"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96ZM12 18l-1.5-1.5L12 15l1.5 1.5L12 18Zm3-3-1.5-1.5L15 12l1.5 1.5L15 15Zm-6 0-1.5-1.5L9 12l1.5 1.5L9 15Z"/></svg>
    ),
    title: "Alimentos y Bebidas",
    desc: "Componentes en aceros inoxidables sanitarios (AISI 304/316) y polímeros grado alimenticio para líneas de llenado, dosificación y transporte.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={58} height={58} fill="currentColor"><path d="m12 1.5 9 5.2v10.6l-9 5.2-9-5.2V6.7l9-5.2zm0 2.3L5.4 7.6 12 11.4l6.6-3.8L12 3.8zM4.5 9.2v7.7l6.5 3.8v-7.7L4.5 9.2zm15 0-6.5 3.8v7.7l6.5-3.8V9.2z"/></svg>
    ),
    title: "Plásticos y Empaques",
    desc: "Matrices de corte, mordazas de sellado térmico, moldes de termoformado y boquillas de extrusión con tolerancias de alta precisión.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={58} height={58} fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>
    ),
    title: "Industria Automotriz",
    desc: "Utillajes de ensamble (jigs & fixtures), galgas de verificación dimensional y soportes mecánicos para trabajo continuo.",
  },
];

export default function Modelado3DPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: "70px 0 50px", textAlign: "center" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
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
            Diseño y Modelado 3D Mecánico para Manufactura de Alta Precisión
          </h1>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1.1rem",
              maxWidth: 820,
              margin: "0 auto 34px",
              lineHeight: 1.6,
            }}
          >
            Transformamos conceptos, muestras físicas desgastadas y planos 2D en modelos CAD de alta
            exactitud optimizados para mecanizado CNC y corte láser.
          </p>
          <a
            href="#banner"
            className="simet-btn-outline"
          >
            Solicitar Cotización de Diseño
          </a>
        </div>
      </section>

      {/* PRECISIÓN */}
      <section style={{ padding: "40px 0 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="simet-split" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>
            <div className="simet-precision-content">
              <h2>Precisión desde el plano digital hasta el taller</h2>
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
            </div>
            <div className="simet-image-wrapper">
              <Image
                src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80"
                alt="Control CNC de precisión"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CAPACIDADES */}
      <section style={{ padding: "30px 0 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="simet-section-header">
            <h2 className="simet-section-title">Capacidades de Diseño e Ingeniería CAD</h2>
          </div>
          <div className="simet-grid-4">
            {cadCapabilities.map((c) => (
              <div key={c.title} className="simet-card">
                <div className="simet-icon-box">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="simet-divider" />

          <div className="simet-section-header">
            <h2 className="simet-section-title">Sectores Industriales de Aplicación</h2>
          </div>
          <div className="simet-grid-3">
            {sectors.map((s) => (
              <div key={s.title} className="simet-card">
                <div className="simet-icon-box">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="banner" style={{ padding: "20px 0 70px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="simet-cta-card">
            <h2>¿Tiene un plano o pieza que requiere modelado de precisión?</h2>
            <p>Envíenos sus requerimientos técnicos o muestras físicas para una evaluación y levantamiento dimensional sin costo.</p>
          </div>
        </div>
      </section>
    </>
  );
}
