import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import GearMark from "@/components/GearMark";
import RichText from "@/components/RichText";
import { home } from "@/lib/home-content";
import { images } from "@/lib/images";
import { stagger } from "@/lib/motion";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="simet-home-hero">
        <Image
          src={images.hero}
          alt=""
          fill
          preload
          sizes="100vw"
          className="simet-home-hero__bg"
        />
        <div className="simet-home-hero__overlay" />
        <GearMark />

        <div className="simet-container simet-home-hero__inner">
          <div className="simet-home-hero__content">
            <span className="simet-home-hero__tag simet-enter" style={stagger(0)}>
              {home.hero.tag}
            </span>
            <h1 className="simet-home-hero__title simet-enter" style={stagger(1)}>
              {home.hero.title}
            </h1>
            <p className="simet-home-hero__lead simet-enter" style={stagger(2)}>
              {home.hero.lead}
            </p>
            <div className="simet-home-hero__actions simet-enter" style={stagger(3)}>
              <Link href="/contacto" className="simet-btn-red">
                SOLICITAR COTIZACIÓN
              </Link>
              <a href="#productos" className="simet-btn-ghost">
                VER PORTAFOLIO
              </a>
            </div>
          </div>

          <div className="simet-home-hero__badge">
            {home.hero.badge.map((word, i) => (
              <span key={word} className="simet-enter-right" style={stagger(i + 3)}>
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="simet-section-servicios" id="servicios">
        <div className="simet-container">
          <div className="simet-section-heading" data-reveal>
            <span className="simet-red-indicator" />
            <span className="simet-subtag">NUESTROS SERVICIOS</span>
            <h2 className="simet-title-main">¿En qué podemos ayudarle?</h2>
          </div>
          <div className="simet-services-grid">
            {home.services.map((s, i) => (
              <ServiceCard key={s.title} index={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIAS */}
      <section className="simet-section-industrias" id="sectores">
        <div className="simet-container">
          <div className="simet-section-heading" data-reveal>
            <span className="simet-red-indicator" />
            <span className="simet-subtag">SECTORES QUE ATENDEMOS</span>
            <h2 className="simet-title-main">Industrias donde operamos</h2>
          </div>
          <div className="simet-industrias-grid">
            {home.industries.map((ind, i) => (
              <article key={ind.title} className="simet-industria-card" data-reveal style={stagger(i)}>
                <div className="simet-card-thumb">
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>
                <div className="simet-card-body">
                  <h3>{ind.title}</h3>
                  <p>{ind.description}</p>
                  <Link href={ind.link} className="simet-card-link">
                    CONOCER SOLUCIONES <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="simet-section-productos" id="productos">
        <div className="simet-container">
          <div className="simet-productos-header" data-reveal>
            <span className="simet-red-indicator simet-red-indicator--center" />
            <h2>NUESTROS PRODUCTOS</h2>
            <p>{home.productsIntro}</p>
          </div>

          <div className="simet-productos-grid">
            {home.products.map((p, i) => (
              <article key={p.title} className="simet-producto-card" data-reveal style={stagger(i)}>
                <div className="simet-card-thumb">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1040px) 50vw, 25vw"
                  />
                </div>
                <div className="simet-card-body">
                  <span className="simet-producto-icon" aria-hidden="true">{p.icon}</span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="simet-badges-row">
            {home.badges.map((badge, i) => (
              <div key={badge} className="simet-badge-item" data-reveal="fade" style={stagger(i)}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="simet-section-experiencia" id="conocenos">
        <div className="simet-container">
          <div className="simet-split-exp">
            <div className="simet-exp-content" data-reveal="left">
              <span className="simet-red-indicator" />
              <h2>{home.experience.heading}</h2>
            </div>
            <div className="simet-exp-content" data-reveal="right">
              {home.experience.body.map((paragraph, i) => (
                <p key={i}>
                  <RichText text={paragraph} />
                </p>
              ))}
              <Link href="/contacto" className="simet-btn-red">
                Conócenos <span className="simet-btn-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="simet-exp-img-wrap" data-reveal="unveil">
            <Image
              src={images.equipo}
              alt="Equipo de trabajo de SIMET S.A.S."
              fill
              sizes="(max-width: 1240px) 100vw, 1192px"
            />
          </div>
        </div>
      </section>

      {/* DIFERENCIALES */}
      <section className="simet-section-disposicion">
        <GearMark />
        <div className="simet-container">
          <h2 className="simet-disposicion-title" data-reveal>
            PONEMOS A TU DISPOSICIÓN
          </h2>
          <div className="simet-mesh-box" data-reveal="zoom">
            <div className="simet-mesh-grid">
              {home.differentiators.map((item, i) => (
                <div key={item.title} className="simet-mesh-item" data-reveal style={stagger(i + 2)}>
                  <Image src={item.icon} alt="" width={120} height={120} className="simet-mesh-icon" />
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}