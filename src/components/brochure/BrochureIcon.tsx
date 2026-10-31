import type { BrochureIconName } from "@/lib/brochure";

/** Íconos de línea del brochure: trazo uniforme, en el estilo del tríptico. */
const PATHS: Record<BrochureIconName, React.ReactNode> = {
  // Husillo CNC con fresa sobre la mesa
  cnc: (
    <>
      <path d="M8 2h8v5H8z" />
      <path d="M10 7h4v4l-1 2h-2l-1-2z" />
      <path d="M12 13v3" />
      <path d="M4 19h16M6 22h12M7 16h10v3H7z" />
    </>
  ),
  // Cabezal láser y haz sobre la lámina
  laser: (
    <>
      <path d="M9 2h6v6l-2 3h-2L9 8z" />
      <path d="M12 11v6" strokeDasharray="1.5 1.5" />
      <path d="M3 19h18M8 17l-2-2M16 17l2-2" />
    </>
  ),
  cube: (
    <>
      <path d="M12 2 21 7v10l-9 5-9-5V7z" />
      <path d="m3 7 9 5 9-5M12 12v10" />
    </>
  ),
  // Piñón sobre banda transportadora
  project: (
    <>
      <circle cx="12" cy="8" r="2.5" />
      <path d="M12 2v2M12 12v2M6 8h2M16 8h2M7.8 3.8l1.4 1.4M14.8 10.8l1.4 1.4M7.8 12.2l1.4-1.4M14.8 5.2l1.4-1.4" />
      <rect x="2" y="17" width="20" height="4" rx="2" />
      <circle cx="6" cy="19" r=".6" />
      <circle cx="18" cy="19" r=".6" />
    </>
  ),
  // Documento con verificación
  advice: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M8 13h5M8 17h3" />
      <path d="m13.5 17.5 1.8 1.8 3.2-3.6" />
    </>
  ),
  // Calibrador
  precision: (
    <>
      <path d="M4 2h4v20H4zM8 6h12v4H8" />
      <path d="M11 6v2M14 6v2M17 6v2M8 14h6v4H8" />
    </>
  ),
  quality: (
    <>
      <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5z" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  // Ajuste a la medida: llave
  custom: (
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8V21h3.2l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.4-.6-.6-2.4z" />
  ),
  // Medalla
  commitment: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="m9.5 9 1.8 1.8 3.2-3.6" />
      <path d="M8.5 14 7 22l5-2.5 5 2.5-1.5-8" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.1 3.1z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 1a5 5 0 0 1-2.9-2.9l1-1-1-2z" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="m3 6.5 9 6.5 9-6.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M2.5 12h19M12 2.5c2.6 2.6 3.8 6 3.8 9.5S14.6 18.9 12 21.5C9.4 18.9 8.2 15.5 8.2 12S9.4 5.1 12 2.5z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 22s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  facebook: <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H7v3h2v9h3v-9h2.5l.5-3h-3V7a1 1 0 0 1 1-1h2z" />,
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".6" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
};

export default function BrochureIcon({ name, className = "" }: { name: BrochureIconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`bro-icon ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
