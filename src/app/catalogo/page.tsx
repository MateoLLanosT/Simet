import Link from "next/link";
import LazyViewer from "@/components/catalog/LazyViewer";
import { catalog } from "@/lib/catalog";
import { stagger } from "@/lib/motion";

export const metadata = {
  title: "Catálogo 3D de Piezas | SIMET S.A.S.",
  description: "Explora en 3D piezas mecanizadas por SIMET: ejes, piñones, roscas, punzones, mordazas y piezas en polímeros técnicos.",
};

export default function CatalogoPage() {
  return (
    <>
      <section className="simet-page-hero">
        <div className="simet-container simet-container--narrow">
          <span className="simet-red-indicator simet-red-indicator--center simet-enter" style={stagger(0)} />
          <span className="simet-subtag simet-enter" style={stagger(0)}>CATÁLOGO 3D</span>
          <h1 className="simet-enter" style={stagger(1)}>Piezas fabricadas por SIMET</h1>
          <p className="simet-enter" style={stagger(2)}>
            Gira, acerca y explora cada pieza en 3D. Fabricamos estas y otras piezas a la medida de su necesidad.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 0 80px" }}>
        <div className="simet-container simet-catalog-grid">
          {catalog.map((item, i) => (
            <article key={item.slug} className="simet-producto-card simet-catalog-card" data-reveal style={stagger(i)}>
              <LazyViewer url={item.model} finish={item.finish} compact />
              <div className="simet-card-body">
                <span className="simet-card__tag">{item.process}</span>
                <h3>{item.name}</h3>
                <p>{item.material} · {item.category}</p>
                <Link href={`/catalogo/${item.slug}`} className="simet-card-link">
                  VER EN 3D <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
