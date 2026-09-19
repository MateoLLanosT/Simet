import Image from "next/image";

export const metadata = {
  title: "Diseño y Desarrollo de Proyectos Metalmecánicos | SIMET S.A.S.",
  description:
    "Ingeniería, planificación y desarrollo de soluciones industriales a medida para la industria.",
};

const capabilities = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width={58} height={58} fill="currentColor"><path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/></svg>
    ),
    title: "Sistemas de Transporte Industrial",
    desc: "Bandas modulares sanitarias, transportadores de rodillos por gravedad/motorizados y mesas de acumulación rotativas.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={58} height={58} fill="currentColor"><path d="m12 2 9.5 5.5v11L12 24l-9.5-5.5v-11L12 2Zm0 2.311L4.85 8.442 12 12.574l7.15-4.132L12 4.311ZM3.85 10.14v7.719L11 21.99v-7.72L3.85 10.14Zm16.3 0-7.15 4.13v7.72l7.15-4.13v-7.72Z"/></svg>
    ),
    title: "Dispositivos de Ensamble y Utillajes",
    desc: "Diseño de jigs & fixtures ergonómicos, galgas de verificación dimensional y cunas de montaje para ensamble asistido.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={58} height={58} fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm-1 2 5 5h-5V4ZM8 12h8v2H8v-2Zm0 4h8v2H8v-2Zm0-8h4v2H8V8Z"/></svg>
    ),
    title: "Automatización Mecánica y Neumática",
    desc: "Mecanismos de transferencia paso a paso, estaciones de prensado neumático, dosificadores y guillotinas de corte.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={58} height={58} fill="currentColor"><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 14H3V4h18v12Z"/></svg>
    ),
    title: "Modernización y Retrofit Mecánico",
    desc: "Rediseño y repotenciación estructural de maquinaria obsoleta para elevar velocidades de operación y seguridad.",
  },
];

const sectors = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width={58} height={58} fill="currentColor"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96ZM12 18l-1.5-1.5L12 15l1.5 1.5L12 18Zm3-3-1.5-1.5L15 12l1.5 1.5L15 15Zm-6 0-1.5-1.5L9 12l1.5 1.5L9 15Z"/></svg>
    ),
    title: "Alimentos y Bebidas",
    desc: "Líneas sanitarias en acero inoxidable AISI 304/316 con sistemas de fácil desarme para lavado CIP, transportadores de envases y dosificadores.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={58} height={58} fill="currentColor"><path d="m12 1.5 9 5.2v10.6l-9 5.2-9-5.2V6.7l9-5.2zm0 2.3L5.4 7.6 12 11.4l6.6-3.8L12 3.8zM4.5 9.2v7.7l6.5 3.8v-7.7L4.5 9.2zm15 0-6.5 3.8v7.7l6.5-3.8V9.2z"/></svg>
    ),
    title: "Plásticos y Empaques",
    desc: "Sistemas de alimentación para tolvas, desbobinadores industriales, carros de cambio de moldes y mesas de empaque secundario.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={58} height={58} fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>
    ),
    title: "Industria Automotriz",
    desc: "Pistas de rodillos para flujo continuo de partes, cunas de soldadura repetitiva y estaciones de prueba de carga y fatiga.",
  },
];

export default function DisenoProyectosPage() {
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
            Diseño y Desarrollo de Proyectos Metalmecánicos e Integración Industrial
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
            Transformamos necesidades operativas en maquinaria, dispositivos mecánicos y líneas de
            producción a medida, garantizando robustez y seguridad operativa.
          </p>
          <a
            href="#banner"
            className="simet-btn-outline"
          >
            Evaluar mi Proyecto
          </a>
        </div>
      </section>

      {/* SOLUCIONES */}
      <section style={{ padding: "40px 0 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="simet-split simet-split-grid">
            <div className="simet-image-wrapper">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                alt="Ingeniero en diseño mecánico CAD"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="simet-solutions-content">
              <h2>Soluciones mecánicas a la medida de su planta</h2>
              <p>
                En las plantas de producción, la maquinaria estándar de catálogo muchas veces no se
                adapta a las limitaciones de espacio, los ritmos de trabajo específicos o las
                características del producto local.
              </p>
              <p>
                En <strong>SIMET S.A.S.</strong> concebimos, calculamos y construimos maquinaria y
                dispositivos industriales personalizados. Nuestro equipo de ingeniería analiza a fondo
                las condiciones reales de su línea de producción para entregar sistemas que eliminan
                cuellos de botella, aumentan la cadencia operativa y reducen tiempos muertos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPACIDADES */}
      <section style={{ padding: "30px 0 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="simet-section-header">
            <h2 className="simet-section-title">Capacidades de Desarrollo e Integración de Proyectos</h2>
          </div>
          <div className="simet-grid-4">
            {capabilities.map((c) => (
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
            <h2>¿Tiene un desafío operativo o requiere maquinaria a medida?</h2>
            <p>Cuéntenos su necesidad operativa en planta. Nuestros ingenieros evaluarán la viabilidad técnica y le presentarán una propuesta formal.</p>
          </div>
        </div>
      </section>
    </>
  );
}
