import type { CSSProperties } from "react";

/** Posición dentro de un grupo animado; el CSS la usa para escalonar el retardo. */
export function stagger(index: number): CSSProperties {
  return { "--i": index } as CSSProperties;
}
