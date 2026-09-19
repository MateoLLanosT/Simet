import Image from "next/image";
import Link from "next/link";

const footerNav = [
  { href: "/", label: "Inicio" },
  { href: "/servicios/diseno-proyectos", label: "Proyectos Metalmecánicos" },
  { href: "/servicios/modelado-3d", label: "Modelado 3D CAD" },
  { href: "/servicios/asesoria-dfm", label: "Asesoría DFM & Costos" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer
      id="contacto"
      style={{
        width: "100%",
        background:
          "radial-gradient(ellipse at 72% 60%, rgba(30,72,100,0.25) 0%, rgba(5,31,50,0) 42%), linear-gradient(115deg, #041b2d 0%, #06263e 58%, #031724 100%)",
        color: "#ffffff",
        borderTop: "3px solid #b20b12",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: 1300,
          margin: "0 auto",
          padding: "60px 0 45px",
          display: "grid",
          gridTemplateColumns: "1.25fr 1.35fr 0.85fr 0.95fr",
          columnGap: 50,
          rowGap: 35,
          alignItems: "start",
        }}
        className="simet-footer-grid"
      >
        {/* Marca */}
        <div>
          <div style={{ marginBottom: 18 }}>
            <Image
              src="/legacy/cropped-Logo-simet-.png"
              alt="SIMET S.A.S."
              width={160}
              height={52}
            />
          </div>
          <p style={{ maxWidth: 280, fontSize: 13, lineHeight: 1.6, color: "#aab7c0" }}>
            Soluciones en metalmecánica para la industria, con precisión, calidad y compromiso.
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h3 style={{ margin: "0 0 22px", fontSize: 15, fontWeight: 700, color: "#ffffff" }}>
            Contacto
          </h3>
          <ContactItem
            icon={<path d="M12 2C8.7 2 6 4.7 6 8c0 4.7 6 12 6 12s6-7.3 6-12c0-3.3-2.7-6-6-6zm0 8.2A2.2 2.2 0 1 1 12 5.8a2.2 2.2 0 0 1 0 4.4z" />}
          >
            Carrera 3 # 16-58<br />Mosquera, Cundinamarca
          </ContactItem>
          <ContactItem
            icon={<path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3.7c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2z" />}
          >
            <a href="tel:+573173315892">(317) 331 5892</a> – <a href="tel:+573173315890">(317) 331 5890</a>
          </ContactItem>
          <ContactItem
            icon={<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />}
          >
            <a href="mailto:atencionalcliente@simet.com.co">atencionalcliente@simet.com.co</a>
          </ContactItem>
          <ContactItem
            icon={<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 11h5v-2h-4V6h-2v7h1z" />}
          >
            Lun – Vie 8:00 a.m. – 5:00 p.m.
          </ContactItem>
        </div>

        {/* Navegación */}
        <div>
          <h3 style={{ margin: "0 0 22px", fontSize: 15, fontWeight: 700, color: "#ffffff" }}>
            Navegación
          </h3>
          <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {footerNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: "#aebac3",
                  fontSize: 13,
                  textDecoration: "none",
                  transition: "color 0.2s ease, transform 0.2s ease",
                  display: "inline-block",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 style={{ margin: "0 0 22px", fontSize: 15, fontWeight: 700, color: "#ffffff" }}>
            Redes sociales
          </h3>
          <div style={{ display: "flex", gap: 10 }}>
            <SocialButton href="https://www.facebook.com/share/1MQqpSHH1A/" label="Facebook">
              f
            </SocialButton>
            <SocialButton href="https://www.instagram.com/simet_s.a.s" label="Instagram">
              ◎
            </SocialButton>
          </div>
        </div>
      </div>

      {/* Franja inferior */}
      <div style={{ width: "100%", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div
          style={{
            width: "90%",
            maxWidth: 1300,
            minHeight: 64,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
            padding: "16px 0",
          }}
          className="simet-footer-bottom"
        >
          <p style={{ fontSize: "11.5px", color: "#82939f", margin: 0 }}>
            © 2026 SIMET S.A.S. — Todos los derechos reservados.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.8px", color: "#81919c" }}>
              PRECISIÓN QUE IMPULSA LA INDUSTRIA
            </span>
            <i
              style={{
                width: 32,
                height: 2,
                background: "#b20b12",
                borderRadius: 2,
                display: "block",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          .simet-footer-grid { grid-template-columns: 1fr 1fr !important; column-gap: 40px !important; row-gap: 40px !important; padding: 50px 0 35px !important; }
        }
        @media (max-width: 600px) {
          .simet-footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; padding: 40px 0 30px !important; }
          .simet-footer-bottom { flex-direction: column !important; align-items: flex-start !important; gap: 14px !important; padding: 20px 0 !important; }
        }
      `}</style>
    </footer>
  );
}

function ContactItem({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "20px minmax(0, 1fr)",
        gap: 12,
        alignItems: "start",
        marginBottom: 14,
      }}
    >
      <span
        style={{
          width: 20,
          height: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 2,
        }}
      >
        <svg width={16} height={16} viewBox="0 0 24 24" fill="#cbd5e1">
          {icon}
        </svg>
      </span>
      <p style={{ fontSize: 13, lineHeight: 1.5, color: "#aebac3", margin: 0 }}>
        {children}
      </p>
    </div>
  );
}

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        width: 38,
        height: 38,
        border: "1px solid rgba(255,255,255,0.25)",
        borderRadius: 4,
        background: "rgba(255,255,255,0.04)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 15,
        fontWeight: 700,
        color: "#ffffff",
        textDecoration: "none",
        transition: "background 0.25s ease, border-color 0.25s ease, transform 0.25s ease",
      }}
    >
      {children}
    </a>
  );
}
