import Link from "next/link";
import { notFound } from "next/navigation";
import LazyViewer from "@/components/catalog/LazyViewer";
import { catalog, getItem } from "@/lib/catalog";
import { stagger } from "@/lib/motion";

export function generateStaticParams() {
  return catalog.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const item = getItem((await params).slug);
  return item ? { title: `${item.name} en 3D | SIMET S.A.S.`, description: item.description } : {};
}

export default async function CatalogItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const item = getItem((await params).slug);
  if (!item) notFound();

  return (
    <section className="simet-catalog-detail">
      <div className="simet-container">
        <Link href="/catalogo" className="simet-card-link simet-enter">← VOLVER AL CATÁLOGO</Link>
        <div className="simet-catalog-detail__grid">
          <div className="simet-enter" style={stagger(1)}>
            <LazyViewer url={item.model} finish={item.finish} />
          </div>
          <div className="simet-catalog-detail__info simet-enter-right" style={stagger(2)}>
            <span className="simet-red-indicator" />
            <span className="simet-subtag">{item.category}</span>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <dl className="simet-catalog-specs">
              <div><dt>Proceso</dt><dd>{item.process}</dd></div>
              <div><dt>Material</dt><dd>{item.material}</dd></div>
              {item.specs.map((s) => (
                <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>
              ))}
            </dl>
            <Link href="/contacto" className="simet-btn-red">
              COTIZAR ESTA PIEZA <span className="simet-btn-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
