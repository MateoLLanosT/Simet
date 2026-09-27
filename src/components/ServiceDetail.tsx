import Image from "next/image";
import Link from "next/link";
import GearMark from "@/components/GearMark";
import { FeatureIcon, type IconName } from "@/components/icons";
import { stagger } from "@/lib/motion";

export interface Feature {
  icon: IconName;
  title: string;
  desc: string;
}

interface ServiceDetailProps {
  title: string;
  lead: string;
  ctaLabel: string;
  intro: {
    heading: string;
    body: React.ReactNode;
    image: string;
    imageAlt: string;
    imageFirst?: boolean;
  };
  features: { heading: string; items: Feature[] };
  sectors: Feature[];
  banner: { heading: string; text: string };
}

/** Plantilla común de las páginas de servicio: misma estructura y mismo ritmo de animación. */
export default function ServiceDetail({ title, lead, ctaLabel, intro, features, sectors, banner }: ServiceDetailProps) {
  const image = (
    <div className="simet-image-wrapper" data-reveal="unveil">
      <Image src={intro.image} alt={intro.imageAlt} fill sizes="(max-width: 900px) 100vw, 50vw" />
    </div>
  );

  return (
    <>
      {/* HERO */}
      <section className="simet-page-hero">
        <div className="simet-container simet-container--narrow">
          <span className="simet-red-indicator simet-red-indicator--center simet-enter" style={stagger(0)} />
          <h1 className="simet-enter" style={stagger(0)}>{title}</h1>
          <p className="simet-enter" style={stagger(1)}>{lead}</p>
          <Link href="/contacto" className="simet-btn-outline simet-enter" style={stagger(2)}>
            {ctaLabel}
          </Link>
        </div>
      </section>

      {/* INTRODUCCIÓN CON FOTO */}
      <section style={{ padding: "40px 0 80px" }}>
        <div className="simet-container simet-container--narrow">
          <div className={`simet-split ${intro.imageFirst ? "simet-split--image-first" : ""}`}>
            {intro.imageFirst && image}
            <div className="simet-split-content" data-reveal={intro.imageFirst ? "right" : "left"}>
              <h2>{intro.heading}</h2>
              {intro.body}
            </div>
            {!intro.imageFirst && image}
          </div>
        </div>
      </section>

      {/* CAPACIDADES Y SECTORES */}
      <section style={{ padding: "30px 0 60px" }}>
        <div className="simet-container simet-container--narrow">
          <SectionHeader>{features.heading}</SectionHeader>
          <div className="simet-grid-4">
            {features.items.map((item, i) => (
              <FeatureCard key={item.title} index={i} {...item} />
            ))}
          </div>

          <div className="simet-divider" data-reveal />

          <SectionHeader>Sectores Industriales de Aplicación</SectionHeader>
          <div className="simet-grid-3">
            {sectors.map((item, i) => (
              <FeatureCard key={item.title} index={i} {...item} />
            ))}
          </div>
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
              SOLICITAR COTIZACIÓN <span className="simet-btn-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="simet-section-header" data-reveal>
      <span className="simet-red-indicator simet-red-indicator--center" />
      <h2 className="simet-section-title">{children}</h2>
    </div>
  );
}

function FeatureCard({ icon, title, desc, index }: Feature & { index: number }) {
  return (
    <div className="simet-card" data-reveal style={stagger(index)}>
      <div className="simet-icon-box">
        <FeatureIcon name={icon} />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
