import Image from "next/image";
import Link from "next/link";
import GearMark from "@/components/GearMark";
import RichText from "@/components/RichText";
import { FeatureIcon } from "@/components/icons";
import { stagger } from "@/lib/motion";
import type { Feature, ServicePageContent } from "@/lib/service-pages";

/** Plantilla común de las páginas de servicio: misma estructura y mismo ritmo de animación. */
export default function ServiceDetail({
  eyebrow,
  title,
  lead,
  ctaLabel,
  secondaryCta,
  intro,
  features,
  secondary,
  banner,
}: ServicePageContent) {
  const heroOffset = eyebrow ? 1 : 0;
  const image = (
    <div className="simet-image-wrapper" data-reveal="unveil">
      <Image src={intro.image} alt={intro.imageAlt} fill sizes="(max-width: 900px) 100vw, 50vw" />
      {intro.caption && (
        <div className="simet-image-caption">
          <div>
            <span>{intro.caption.eyebrow}</span>
            <strong>{intro.caption.title}</strong>
          </div>
          {intro.caption.badge && <em>{intro.caption.badge}</em>}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* HERO */}
      <section className="simet-page-hero">
        <div className="simet-container simet-container--narrow">
          <span className="simet-red-indicator simet-red-indicator--center simet-enter" style={stagger(0)} />
          {eyebrow && (
            <span className="simet-subtag simet-enter" style={stagger(0)}>
              {eyebrow}
            </span>
          )}
          <h1 className="simet-enter" style={stagger(heroOffset)}>{title}</h1>
          <p className="simet-enter" style={stagger(heroOffset + 1)}>{lead}</p>
          <div className="simet-page-hero__actions simet-enter" style={stagger(heroOffset + 2)}>
            <Link href="/contacto" className="simet-btn-outline">
              {ctaLabel}
            </Link>
            {secondaryCta && (
              <a href={secondaryCta.href} className="simet-card-link">
                {secondaryCta.label} <span aria-hidden="true">↓</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* INTRODUCCIÓN CON FOTO */}
      <section style={{ padding: "40px 0 80px" }}>
        <div className="simet-container simet-container--narrow">
          <div className={`simet-split ${intro.imageFirst ? "simet-split--image-first" : ""}`}>
            {intro.imageFirst && image}
            <div className="simet-split-content" data-reveal={intro.imageFirst ? "right" : "left"}>
              {intro.eyebrow && <span className="simet-subtag">{intro.eyebrow}</span>}
              <h2>{intro.heading}</h2>
              {intro.body.map((paragraph, i) => (
                <p key={i}>
                  <RichText text={paragraph} />
                </p>
              ))}
              {intro.highlights && (
                <ul className="simet-checks">
                  {intro.highlights.map((item) => (
                    <li key={item}>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {!intro.imageFirst && image}
          </div>
        </div>
      </section>

      {/* CAPACIDADES Y SEGUNDA GRILLA */}
      <section style={{ padding: "30px 0 60px" }}>
        <div className="simet-container simet-container--narrow">
          <SectionHeader id={features.id} eyebrow={features.eyebrow}>
            {features.heading}
          </SectionHeader>
          <FeatureGrid items={features.items} />

          <div className="simet-divider" data-reveal />

          <SectionHeader id={secondary.id} eyebrow={secondary.eyebrow}>
            {secondary.heading ?? "Sectores Industriales de Aplicación"}
          </SectionHeader>
          <FeatureGrid items={secondary.items} />
        </div>
      </section>

      {/* CTA */}
      <section id="banner" style={{ padding: "20px 0 70px" }}>
        <div className="simet-container simet-container--narrow">
          <div className="simet-cta-card" data-reveal="zoom">
            <GearMark />
            <h2>{banner.heading}</h2>
            <p>{banner.text}</p>
            <Link href="/contacto" className="simet-btn-red">
              {banner.cta ?? "SOLICITAR COTIZACIÓN"} <span className="simet-btn-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeader({ id, eyebrow, children }: { id?: string; eyebrow?: string; children: React.ReactNode }) {
  return (
    <div id={id} className="simet-section-header" data-reveal>
      <span className="simet-red-indicator simet-red-indicator--center" />
      {eyebrow && <span className="simet-subtag">{eyebrow}</span>}
      <h2 className="simet-section-title">{children}</h2>
    </div>
  );
}

/** 4 elementos → 4 columnas; si no, 3 (como la grilla de sectores). */
function FeatureGrid({ items }: { items: Feature[] }) {
  return (
    <div className={items.length % 4 === 0 ? "simet-grid-4" : "simet-grid-3"}>
      {items.map((item, i) => (
        <FeatureCard key={item.title} index={i} {...item} />
      ))}
    </div>
  );
}

function FeatureCard({ icon, tag, title, desc, index }: Feature & { index: number }) {
  return (
    <div className="simet-card" data-reveal style={stagger(index)}>
      {icon && (
        <div className="simet-icon-box">
          <FeatureIcon name={icon} />
        </div>
      )}
      {tag && <span className="simet-card__tag">{tag}</span>}
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
