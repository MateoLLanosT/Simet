import Link from "next/link";
import Image from "next/image";
import { stagger } from "@/lib/motion";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  linkText?: string;
  /** Posición en la grilla, para escalonar la aparición */
  index?: number;
  sizes?: string;
}

export default function ServiceCard({
  image,
  title,
  description,
  link,
  linkText = "SABER MÁS",
  index = 0,
  sizes = "(max-width: 600px) 100vw, (max-width: 900px) 50vw, (max-width: 1200px) 33vw, 20vw",
}: ServiceCardProps) {
  return (
    <article className="simet-service-card" data-reveal style={stagger(index)}>
      <div className="simet-card-thumb">
        <Image src={image} alt={title} fill sizes={sizes} />
      </div>
      <div className="simet-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={link} className="simet-card-link">
          {linkText} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
