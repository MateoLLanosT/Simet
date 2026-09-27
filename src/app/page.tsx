import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import GearMark from "@/components/GearMark";
import { images } from "@/lib/images";
import { stagger } from "@/lib/motion";

const services = [
  {
    image: images.cnc,
    title: "Centro de Fabricación y Diseño CNC",
    description: "Mecanizado de precisión, fabricación de piezas especiales, diseño industrial, torno, fresa y reparación de maquinaria.",
    link: "/servicios/mecanizado-cnc",
  },
  {
    image: images.laser,
    title: "Corte Láser de Alta Precisión",
    description: "Corte de alta precisión para proyectos industriales, arquitectónicos, publicitarios y decorativos.",
    link: "/servicios/corte-laser",
  },
  {
    image: images.modelado3d,
    title: "Diseño y modelado 3D",
    description: "Modelado paramétrico y desarrollo visual para la fabricación de piezas y nuevos proyectos industriales.",
    link: "/servicios/modelado-3d",
  },
  {
    image: images.proyectos,
    title: "Diseño de proyectos",
    description: "Ingeniería, planificación y desarrollo de soluciones industriales adaptadas a cada requerimiento.",
    link: "/servicios/diseno-proyectos",
  },
  {
    image: images.asesoria,
    title: "Asesoría para fabricación",
    description: "Acompañamiento técnico en procesos de manufactura, desde el diseño hasta la entrega final.",
    link: "/servicios/asesoria-dfm",
  },
];

const industries = [
  {
    image: images.alimentos,
    title: "Alimentos y bebidas",
    description: "Equipos sanitarios y de proceso para la industria de alimentos y bebidas.",
    link: "/servicios/diseno-proyectos",
  },
  {
    image: images.plasticos,
    title: "Plásticos y empaques",
    description: "Moldes, herramentales y piezas de precisión para la industria del plástico y empaque.",
    link: "/servicios/modelado-3d",
  },
  {
    image: images.automotriz,
    title: "Industria automotriz",
    description: "Desarrollo y mecanizado de componentes metalmecánicos para equipos y procesos del sector automotriz.",
    link: "/servicios/asesoria-dfm",
  },
];

const products = [
  {
    image: images.llaveros,
    icon: "◇",
    title: "LLAVEROS PERSONALIZADOS",
    description: "Diseños únicos en metal, ideales para empresas, eventos y regalos especiales.",
  },
  {
    image: images.decorativas,
    icon: "♫",
    title: "PIEZAS DECORATIVAS EN METAL",
    description: "Elementos decorativos con cortes de alta precisión para dar vida a tus espacios.",
  },
  {
    image: images.figuras,
    icon: "▱",
    title: "FIGURAS DIMENSIONALES",
    description: "Modelos y figuras en metal cortadas con tecnología de precisión.",
  },
  {
    image: images.paneles,
    icon: "△",
    title: "PANELES DECORATIVOS",
    description: "Diseños icónicos y personalizados para proyectos arquitectónicos y de interiorismo.",
  },
];

const badges = [
  "Fabricación a la medida",
  "Alta precisión en cada detalle",
  "Soluciones para diversas industrias",
];

const differentiators = [
  {
    icon: images.iconoExperiencia,
    title: "+25 años de experiencia",
    desc: "Precisión y calidad comprobada en cada proyecto.",
  },
  {
    icon: images.iconoIndustrias,
    title: "Soluciones para múltiples industrias",
    desc: "Alimentos, bebidas, plásticos, construcción, publicidad y más.",
  },
  {
    icon: images.iconoAcompanamiento,
    title: "Acompañamiento personalizado",
    desc: "Asesoría técnica desde el diseño hasta la entrega final.",
  },
  {
    icon: images.iconoTecnologia,
    title: "Tecnología de última generación",
    desc: "Equipos CNC y láser para trabajos de alta precisión.",
  },
];

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
              METALMECÁNICA DE PRECISIÓN
            </span>
            <h1 className="simet-home-hero__title simet-enter" style={stagger(1)}>
              Confía tus proyectos a expertos en metalmecánica
            </h1>
            <p className="simet-home-hero__lead simet-enter" style={stagger(2)}>
              Obtén piezas únicas y a la medida de tus necesidades.
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
            {["PRECISIÓN", "INGENIERÍA", "SOLUCIONES REALES"].map((word, i) => (
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
            {services.map((s, i) => (
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
            {industries.map((ind, i) => (
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
            <p>
              En SIMET fabricamos productos metálicos a la medida, combinando tecnología, precisión y
              diseño para hacer realidad tus ideas.
            </p>
          </div>

          <div className="simet-productos-grid">
            {products.map((p, i) => (
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
            {badges.map((badge, i) => (
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
              <h2>Con más de 25 años de experiencia...</h2>
            </div>
            <div className="simet-exp-content" data-reveal="right">
              <p>
                Somos una empresa especializada en{" "}
                <strong>
                  ingeniería mecánica, mantenimiento industrial, mecanizado CNC, torno, fresa,
                  diseño y fabricación de piezas especiales, y corte por láser
                </strong>
                .
              </p>
              <p>
                En SIMET trabajamos con altos estándares de calidad y seguridad, garantizando
                precisión en cada proceso y soluciones adaptadas a las necesidades de nuestros
                clientes.
              </p>
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
              {differentiators.map((item, i) => (
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
