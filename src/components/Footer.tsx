import Image from "next/image";
import Link from "next/link";
import { stagger } from "@/lib/motion";
import { services } from "@/lib/services";

const footerNav = [
  { href: "/", label: "Inicio" },
  ...services.map((s) => ({ href: s.href, label: s.shortName })),
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer id="contacto" className="simet-footer">
      <div className="simet-footer__inner">
        {/* Marca */}
        <div data-reveal style={stagger(0)}>
          <Image
            src="/brand/logo-simet.png"
            alt="SIMET S.A.S."
            width={600}
            height={222}
            className="simet-footer__logo"
          />
          <p className="simet-footer__description">
            Soluciones en metalmecánica para la industria, con precisión, calidad y compromiso.
          </p>
        </div>

        {/* Contacto */}
        <div data-reveal style={stagger(1)}>
          <h3>Contacto</h3>
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
            icon={<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />}
          >
            Lun – Vie 8:00 a.m. – 5:00 p.m.
          </ContactItem>
        </div>

        {/* Navegación */}
        <div data-reveal style={stagger(2)}>
          <h3>Navegación</h3>
          <nav className="simet-footer__nav">
            {footerNav.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Redes sociales */}
        <div data-reveal style={stagger(3)}>
          <h3>Redes sociales</h3>
          <div className="simet-footer__social-list">
            <SocialButton href="https://www.facebook.com/share/1MQqpSHH1A/" label="Facebook">
              <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H7v3h2v9h3v-9h2.5l.5-3h-3V7a1 1 0 0 1 1-1h2z" />
            </SocialButton>
            <SocialButton href="https://www.instagram.com/simet_s.a.s" label="Instagram">
              <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1.2" />
            </SocialButton>
          </div>
        </div>
      </div>

      {/* Franja inferior */}
      <div className="simet-footer__bottom">
        <div className="simet-footer__bottom-inner" data-reveal="fade">
          <p className="simet-footer__copyright">
            © 2026 SIMET S.A.S. — Todos los derechos reservados.
          </p>
          <div className="simet-footer__slogan">
            <span>PRECISIÓN QUE IMPULSA LA INDUSTRIA</span>
            <i className="simet-footer-slogan-line" />
          </div>
        </div>
      </div>
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
    <div className="simet-footer__contact-item">
      <span className="simet-footer__contact-icon">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          {icon}
        </svg>
      </span>
      <p>{children}</p>
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
      className="simet-footer__social-button"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {children}
      </svg>
    </a>
  );
}
