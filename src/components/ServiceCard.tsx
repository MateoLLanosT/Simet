import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  linkText?: string;
}

export default function ServiceCard({
  image,
  title,
  description,
  link,
  linkText = "SABER MÁS →",
}: ServiceCardProps) {
  return (
    <article
      style={{
        background: "var(--white)",
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        boxShadow: "var(--shadow-sm)",
        border: "1px solid #eef2f6",
        display: "flex",
        flexDirection: "column",
        transition: "var(--transition)",
      }}
    >
      <div
        style={{
          height: 155,
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
        />
      </div>
      <div
        style={{
          padding: "22px 18px 24px",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <h3
          style={{
            fontSize: "1.05rem",
            fontWeight: 700,
            color: "#0f2b42",
            lineHeight: 1.35,
            marginBottom: 12,
            minHeight: 44,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "0.88rem",
            color: "var(--text-muted)",
            lineHeight: 1.55,
            marginBottom: 18,
            flexGrow: 1,
          }}
        >
          {description}
        </p>
        <Link
          href={link}
          style={{
            fontSize: "0.84rem",
            fontWeight: 700,
            color: "var(--primary-red)",
            letterSpacing: "0.5px",
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          {linkText}
        </Link>
      </div>
    </article>
  );
}
