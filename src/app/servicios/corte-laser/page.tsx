import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Corte Láser de Alta Precisión | SIMET S.A.S.",
  description:
    "Servicio de corte por fibra láser para láminas metálicas de acero al carbono, inoxidable y aluminio con bordes limpios sin rebaba.",
};

const laserCapabilities = [
  {
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80",
    title: "Corte por Fibra Láser CNC",
    desc: "Corte de alta velocidad y máxima fidelidad geométrica para siluetas complejas, ensambles ranurados y perforaciones precisas.",
    tag: "Fibra Láser CNC",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    title: "Corte de Paneles y Celosías",
    desc: "Desarrollo de paneles decorativos, cerramientos arquitectónicos y fachadas metálicas según diseño vectorial personalizado.",
    tag: "Paneles & Arquitectura",
  },
  {
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80",
    title: "Corte de Piezas para Ensamble",
    desc: "Cortes con tolerancias estrechas que permiten ensamblajes tipo mecano soldados con mínimo tiempo de preparación.",
    tag: "Chapa & Ensamble",
  },
  {
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=600&q=80",
    title: "Prototipado Rápido y Maquila",
    desc: "Atención de pedidos urgentes desde una sola pieza hasta lotes industriales de miles de unidades en tiempos récord.",
    tag: "Producción Rápida",
  },
];

const capacities = [
  { material: "Acero al Carbono (HR / CR)", thickness: "Hasta 16 mm", feature: "Corte con oxígeno para espesores gruesos sin deformación." },
  { material: "Acero Inoxidable (304 / 316)", thickness: "Hasta 10 mm", feature: "Corte con nitrógeno de alta presión: borde brillante libre de óxido." },
  { material: "Aluminio", thickness: "Hasta 6 mm", feature: "Geometría exacta sin afectación térmica perjudicial." },
  { material: "Formatos de Lámina", thickness: "1500 x 3000 mm", feature: "Mesa industrial amplia para máximo aprovechamiento de material." },
];

export default function CorteLaserPage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          background:
            "linear-gradient(125deg, rgba(6, 17, 30, 0.95) 0%, rgba(11, 33, 56, 0.9) 60%, rgba(6, 17, 30, 0.94) 100%), url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1920&q=85') center/cover no-repeat",
          color: "var(--white)",
          padding: "115px 0 95px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-15%",
            right: "10%",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.16) 0%, transparent 70%)",
            filter: "blur(70px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: 940, margin: "0 auto", textAlign: "center" }}>
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
                border: "1px solid rgba(56, 189, 248, 0.28)",
                padding: "6px 16px",
                borderRadius: "100px",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#38bdf8", boxShadow: "0 0 8px #38bdf8" }} />
              TECNOLOGÍA FIBRA LÁSER DE ALTA VELOCIDAD
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
              Corte Láser CNC de Alta Precisión y Acabado Limpio
            </h1>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "1.15rem",
                maxWidth: 800,
                margin: "0 auto 36px",
                lineHeight: 1.65,
                fontWeight: 400,
              }}
            >
              Corte de lámina metálica con la más avanzada tecnología por fibra láser: bordes limpios sin rebaba, ranurados exactos y mínimo desperdicio de material.
            </p>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <Link
                href="/#contacto"
                style={{
                  background: "linear-gradient(135deg, var(--primary-red) 0%, #7d141b 100%)",
                  color: "var(--white)",
                  padding: "15px 34px",
                  borderRadius: "var(--radius-sm)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  letterSpacing: "0.5px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 10px 25px -4px rgba(158, 28, 37, 0.45)",
                }}
                className="hover-lift"
              >
                Cotizar Corte Láser
              </Link>

              <a
                href="#espesores"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(14px)",
                  color: "var(--white)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  padding: "15px 30px",
                  borderRadius: "var(--radius-sm)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="hover-lift"
              >
                Ver Tabla de Espesores
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DETALLES DE CORTE */}
      <section style={{ padding: "95px 0", backgroundColor: "#f8fafc" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
          <div className="simet-split" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 60, alignItems: "center" }}>
            <div>
              <span style={{ fontSize: "0.82rem", fontWeight: 700, letterSpacing: "2px", color: "var(--primary-red)", textTransform: "uppercase", display: "block", marginBottom: 10 }}>
                BORDES PERFECTOS SIN RETRABAJOS
              </span>
              <h2 style={{ color: "#0f172a", fontSize: "clamp(2rem, 3vw, 2.6rem)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.6px", marginBottom: 24 }}>
                Ahorre tiempo de pulido con corte por fibra óptica
              </h2>
              <p style={{ fontSize: "1.025rem", color: "var(--text-main)", lineHeight: 1.7, marginBottom: 18, textAlign: "justify" }}>
                El corte por fibra láser supera ampliamente al plasma tradicional y al oxicorte en calidad superficial y velocidad. La concentración térmica focalizada evita la deformación de láminas delgadas y entrega bordes listos para pintura o soldadura.
              </p>
              <p style={{ fontSize: "1.025rem", color: "var(--text-main)", lineHeight: 1.7, marginBottom: 28, textAlign: "justify" }}>
                Procesamos sus planos en formato <strong>DXF, DWG o STEP</strong> con anidado computarizado (nesting), maximizando el número de piezas por lámina para reducir su costo por unidad.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {["Corte con Nitrógeno de Alta Pureza", "Nesting para ahorro de chapa", "Cero escoria"].map((item) => (
                  <span key={item} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255, 255, 255, 0.8)", border: "1px solid #cbd5e1", borderRadius: "100px", padding: "6px 14px", fontSize: "0.82rem", fontWeight: 700, color: "#334155" }}>
                    <span style={{ color: "var(--primary-red)" }}>✓</span> {item}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.18)", border: "6px solid rgba(255, 255, 255, 0.9)", background: "#cbd5e1", minHeight: 400 }} className="hover-lift">
              <Image
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=80"
                alt="Corte láser de chapa metálica SIMET"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px", background: "rgba(7, 21, 36, 0.85)", backdropFilter: "blur(14px)", border: "1px solid rgba(255, 255, 255, 0.18)", borderRadius: "var(--radius-md)", padding: "16px 20px", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <span style={{ display: "block", fontSize: "0.72rem", letterSpacing: "1.5px", color: "#38bdf8", fontWeight: 700 }}>PRECISIÓN LÁSER</span>
                  <strong style={{ fontSize: "0.95rem" }}>Corte en Inox y Acero al Carbón</strong>
                </div>
                <span style={{ background: "var(--primary-red)", color: "#fff", fontSize: "0.75rem", fontWeight: 700, padding: "4px 10px", borderRadius: "100px" }}>±0.05 mm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPACIDADES */}
      <section style={{ padding: "85px 0 75px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
          <div className="simet-section-header" style={{ maxWidth: 760, margin: "0 auto 55px", textAlign: "center" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, letterSpacing: "2px", color: "var(--primary-red)", textTransform: "uppercase", display: "block", marginBottom: 8 }}>CAMPOS DE APLICACIÓN</span>
            <h2 className="simet-section-title" style={{ fontSize: "clamp(2rem, 3.2vw, 2.6rem)", color: "#0f172a" }}>Soluciones en Corte Láser</h2>
          </div>

          <div className="simet-grid-4" style={{ gap: 24 }}>
            {laserCapabilities.map((c) => (
              <article key={c.title} style={{ background: "rgba(255, 255, 255, 0.8)", backdropFilter: "blur(12px)", borderRadius: "var(--radius-md)", border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.06)", display: "flex", flexDirection: "column" }} className="hover-lift">
                <div style={{ height: 160, width: "100%", position: "relative", overflow: "hidden" }}>
                  <Image src={c.image} alt={c.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 25vw" />
                  <span style={{ position: "absolute", top: 12, right: 12, background: "rgba(7, 21, 36, 0.75)", backdropFilter: "blur(8px)", color: "#38bdf8", fontSize: "0.72rem", fontWeight: 700, padding: "4px 10px", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.15)" }}>
                    {c.tag}
                  </span>
                </div>
                <div style={{ padding: "22px 20px 24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0e304b", marginBottom: 10, lineHeight: 1.35, minHeight: 44 }}>{c.title}</h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6, flexGrow: 1 }}>{c.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="simet-divider" style={{ margin: "75px auto 65px" }} />

          {/* TABLA DE ESPESORES */}
          <div id="espesores" className="simet-section-header" style={{ maxWidth: 760, margin: "0 auto 50px", textAlign: "center" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, letterSpacing: "2px", color: "var(--primary-red)", textTransform: "uppercase", display: "block", marginBottom: 8 }}>CAPACIDAD TÉCNICA</span>
            <h2 className="simet-section-title" style={{ fontSize: "clamp(2rem, 3.2vw, 2.6rem)", color: "#0f172a" }}>Materiales y Espesores de Corte</h2>
          </div>

          <div className="simet-grid-4" style={{ gap: 20 }}>
            {capacities.map((item) => (
              <div key={item.material} style={{ background: "#f8fafc", padding: "24px 20px", borderRadius: "var(--radius-md)", border: "1px solid #e2e8f0" }}>
                <span style={{ color: "var(--primary-red)", fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase", display: "block", marginBottom: 4 }}>{item.thickness}</span>
                <h4 style={{ color: "#0e304b", fontWeight: 800, fontSize: "1.05rem", marginBottom: 8 }}>{item.material}</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.5 }}>{item.feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "30px 0 85px", backgroundColor: "#f8fafc" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ background: "linear-gradient(130deg, #071524 0%, #0d2640 100%)", borderRadius: "var(--radius-lg)", padding: "65px 40px", textAlign: "center", color: "var(--white)" }}>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.5rem)", fontWeight: 800, marginBottom: 16 }}>¿Tiene planos en DXF o DWG listos para corte?</h2>
            <p style={{ fontSize: "1.1rem", color: "#cbd5e1", maxWidth: 800, margin: "0 auto 30px" }}>Cargue sus vectores o planos para calcular el anidado y cotizarle en menos de 24 horas.</p>
            <Link href="/#contacto" style={{ background: "linear-gradient(135deg, var(--primary-red) 0%, #7d141b 100%)", color: "var(--white)", padding: "16px 36px", borderRadius: "var(--radius-sm)", fontWeight: 700, textDecoration: "none", display: "inline-block" }}>
              Cotizar Corte de Lámina
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}