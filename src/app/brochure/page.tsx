import Image from "next/image";
import { Oswald, Roboto } from "next/font/google";
import BrochureIcon from "@/components/brochure/BrochureIcon";
import RichText from "@/components/RichText";
import { BROCHURE_PDF, brochure, brochureLinks } from "@/lib/brochure";
import { SIMET } from "@/lib/contact";
import "./brochure.css";

// Tipografías del tríptico: condensada para títulos, Roboto para el texto
const oswald = Oswald({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--bro-font-title" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--bro-font-body" });

export const metadata = {
  title: "Brochure | SIMET S.A.S.",
  description:
    "Brochure de SIMET S.A.S.: mecanizado CNC, corte láser, diseño y modelado 3D, proyectos metalmecánicos y asesoría técnica.",
};

const TOTAL_PAGES = brochure.sections.length + 1;
const pageNumber = (n: number) => `${String(n).padStart(2, "0")} / ${String(TOTAL_PAGES).padStart(2, "0")}`;

/**
 * Brochure digital. En pantalla cada sección se ve como una página 9:16; al
 * imprimir (npm run brochure:pdf) cada una ocupa una hoja del PDF, con los
 * enlaces activos. Las medidas van en unidades del ancho de la página (cqw),
 * así la web y el PDF se ven idénticos en cualquier tamaño.
 * Las fotos usan `unoptimized` para servir los JPEG ya preparados
 * (ver brochureImage) en lugar de WebP.
 */
export default function BrochurePage() {
  const { cover, sections, about, services, sectors, why, contact } = brochure;

  return (
    <div className={`bro ${oswald.variable} ${roboto.variable}`}>
      <div className="bro-toolbar">
        <p>
          <strong>Brochure SIMET S.A.S.</strong>
          <span>Desliza para ver las 6 páginas o descárgalo en PDF.</span>
        </p>
        <a href={BROCHURE_PDF} download className="bro-btn bro-btn--red">
          Descargar PDF
        </a>
      </div>

      <div className="bro-doc">
        {/* 01 · PORTADA */}
        <section id="portada" className="bro-page bro-cover" aria-label="Portada">
          <Image src={cover.image} alt="" fill unoptimized loading="eager" className="bro-cover__bg" />
          <div className="bro-cover__shade" />
          <div className="bro-cover__inner">
            <Image
              src={cover.logo}
              alt="SIMET S.A.S. — Empresa de Servicios Indumetalmecánicos"
              width={1184}
              height={465}
              unoptimized
              loading="eager"
              className="bro-cover__logo"
            />
            <h1 className="bro-cover__title">
              {cover.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <p className="bro-cover__tagline">{cover.tagline}</p>
            <span className="bro-rule" />

            <nav className="bro-index" aria-label="Contenido del brochure">
              {sections.map((s, i) => (
                <a key={s.id} href={`#${s.id}`} className="bro-index__item">
                  <span className="bro-index__num">{String(i + 2).padStart(2, "0")}</span>
                  <span className="bro-index__label">{s.label}</span>
                  <BrochureIcon name="arrow" />
                </a>
              ))}
            </nav>

            <a href={brochureLinks.whatsapp} className="bro-btn bro-btn--red bro-btn--block">
              <BrochureIcon name="whatsapp" />
              Cotiza tu proyecto
            </a>
          </div>
        </section>

        {/* 02 · ¿QUIÉNES SOMOS? */}
        <section id="quienes-somos" className="bro-page">
          <div className="bro-page__body">
            <SectionTitle title={about.title} />
            {about.body.map((paragraph, i) => (
              <p key={i} className="bro-text">
                <RichText text={paragraph} />
              </p>
            ))}
            <div className="bro-photo bro-photo--wide">
              <Image src={about.image} alt={about.imageAlt} fill unoptimized loading="eager" />
            </div>
            <p className="bro-values">{about.values.join(" · ")}</p>
          </div>
          <PageBar n={2} />
        </section>

        {/* 03 · SERVICIOS */}
        <section id="servicios" className="bro-page">
          <div className="bro-page__body">
            <SectionTitle title={services.title} subtitle={services.subtitle} />
            <ol className="bro-services">
              {services.items.map((s, i) => (
                <li key={s.name}>
                  <a href={`${SIMET.sitio.url}${s.href}`} className="bro-service">
                    <span className="bro-service__head">
                      <span className="bro-service__num">{String(i + 1).padStart(2, "0")}</span>
                      <BrochureIcon name={s.icon} />
                      <span className="bro-service__name">{s.name}</span>
                      <span className="bro-service__more">
                        Ver más <BrochureIcon name="arrow" />
                      </span>
                    </span>
                    <span className="bro-service__desc">{s.desc}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
          <PageBar n={3} />
        </section>

        {/* 04 · SECTORES */}
        <section id="sectores" className="bro-page">
          <div className="bro-page__body">
            <SectionTitle title={sectors.title} subtitle={sectors.subtitle} />
            <ul className="bro-sectors">
              {sectors.items.map((s) => (
                <li key={s.name} className="bro-sector">
                  <div className="bro-photo bro-sector__photo">
                    <Image src={s.image} alt="" fill unoptimized loading="eager" />
                  </div>
                  <div>
                    <h3 className="bro-sector__name">{s.name}</h3>
                    <p className="bro-sector__desc">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <PageBar n={4} />
        </section>

        {/* 05 · ¿POR QUÉ ELEGIRNOS? */}
        <section id="por-que-elegirnos" className="bro-page">
          <div className="bro-page__body">
            <SectionTitle title={why.title} />
            <div className="bro-photo bro-photo--wide">
              <Image src={why.image} alt={why.imageAlt} fill unoptimized loading="eager" />
            </div>
            <ul className="bro-reasons">
              {why.items.map((r) => (
                <li key={r.name} className="bro-reason">
                  <BrochureIcon name={r.icon} />
                  <div>
                    <h3 className="bro-reason__name">{r.name}</h3>
                    <p className="bro-reason__desc">{r.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <PageBar n={5} />
        </section>

        {/* 06 · CONTACTO */}
        <section id="contactanos" className="bro-page bro-contact">
          <div className="bro-page__body">
            <h2 className="bro-title">
              {contact.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
            <span className="bro-rule" />
            <p className="bro-text">{contact.body}</p>
            <p className="bro-contact__cta">{contact.cta}</p>

            <ul className="bro-contact__list">
              {contact.items.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={`bro-contact__item ${item.primary ? "is-primary" : ""}`}>
                    <BrochureIcon name={item.icon} />
                    <span>
                      <span className="bro-contact__label">{item.label}</span>
                      <span className="bro-contact__value">{item.value}</span>
                    </span>
                    <BrochureIcon name="arrow" className="bro-contact__go" />
                  </a>
                </li>
              ))}
            </ul>

            <p className="bro-contact__social-title">Síguenos en nuestras redes sociales</p>
            <div className="bro-contact__social">
              {contact.social.map((s) => (
                <a key={s.label} href={s.href} className="bro-social">
                  <BrochureIcon name={s.icon} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <PageBar n={6} />
        </section>
      </div>
    </div>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="bro-header">
      <h2 className="bro-title">{title}</h2>
      <span className="bro-rule" />
      {subtitle && <p className="bro-subtitle">{subtitle}</p>}
    </header>
  );
}

/** Barra inferior de cada página: volver al índice y cotizar por WhatsApp. */
function PageBar({ n }: { n: number }) {
  return (
    <footer className="bro-bar">
      <a href="#portada" className="bro-bar__index">
        <BrochureIcon name="menu" />
        Índice
      </a>
      <span className="bro-bar__page">{pageNumber(n)}</span>
      <a href={brochureLinks.whatsapp} className="bro-btn bro-btn--red bro-btn--small">
        <BrochureIcon name="whatsapp" />
        Cotizar
      </a>
    </footer>
  );
}
