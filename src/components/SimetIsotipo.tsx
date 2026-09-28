// Isotipo SIMET: los dos piñones del logo, dibujados en vector.
// El piñón A (10 dientes) y el B (8 dientes) engranan a 45°; al girar,
// B va 10/8 más rápido y en sentido contrario, como un tren de engranajes real.
const GEAR_A =
  "M58.83 48.12L56.73 51.52L60.64 57.06L57.06 60.64L51.52 56.73L48.12 58.83L44.42 60.35L44.33 67.12L39.34 67.91L37.15 61.5L33.17 61.2L29.28 60.25L25.23 65.68L20.72 63.38L22.72 56.91L19.68 54.32L17.09 51.28L10.62 53.28L8.32 48.77L13.75 44.72L12.8 40.83L12.5 36.85L6.09 34.66L6.88 29.67L13.65 29.58L15.17 25.88L17.27 22.48L13.36 16.94L16.94 13.36L22.48 17.27L25.88 15.17L29.58 13.65L29.67 6.88L34.66 6.09L36.85 12.5L40.83 12.8L44.72 13.75L48.77 8.32L53.28 10.62L51.28 17.09L54.32 19.68L56.91 22.72L63.38 20.72L65.68 25.23L60.25 29.28L61.2 33.17L61.5 37.15L67.91 39.34L67.12 44.33L60.35 44.42ZM46 37a9 9 0 1 0 -18 0a9 9 0 1 0 18 0Z";
const GEAR_B =
  "M58.63 58.63L61.39 56.37L60.08 50.76L64.41 48.96L67.45 53.86L71 53.5L74.55 53.86L77.59 48.96L81.92 50.76L80.61 56.37L83.37 58.63L85.63 61.39L91.24 60.08L93.04 64.41L88.14 67.45L88.5 71L88.14 74.55L93.04 77.59L91.24 81.92L85.63 80.61L83.37 83.37L80.61 85.63L81.92 91.24L77.59 93.04L74.55 88.14L71 88.5L67.45 88.14L64.41 93.04L60.08 91.24L61.39 85.63L58.63 83.37L56.37 80.61L50.76 81.92L48.96 77.59L53.86 74.55L53.5 71L53.86 67.45L48.96 64.41L50.76 60.08L56.37 61.39ZM77.5 71a6.5 6.5 0 1 0 -13 0a6.5 6.5 0 1 0 13 0Z";

type Tone = "brand" | "light" | "mono";

interface SimetIsotipoProps {
  /** brand: azul + rojo (fondo claro) · light: plata + rojo (fondo azul) · mono: currentColor */
  tone?: Tone;
  size?: number | string;
  className?: string;
}

export default function SimetIsotipo({ tone = "brand", size = 40, className = "" }: SimetIsotipoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`simet-isotipo simet-isotipo--${tone} ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <path className="simet-isotipo__a" fillRule="evenodd" d={GEAR_A} />
      <path className="simet-isotipo__b" fillRule="evenodd" d={GEAR_B} />
    </svg>
  );
}
