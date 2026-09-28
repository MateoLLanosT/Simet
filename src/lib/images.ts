/**
 * Fotografías reales de SIMET (tomadas del sitio original, docs/original-home.html).
 * Cada servicio usa siempre la misma imagen en el home, en /servicios y en su
 * página de detalle, para que la identidad visual sea consistente.
 */
const LEGACY = "/legacy";

export const images = {
  hero: `${LEGACY}/SIMMET.jpg`,

  cnc: `${LEGACY}/rotate-1136053_1280.jpg`,
  laser: `${LEGACY}/laser.jpg`,
  modelado3d: `${LEGACY}/IMG_3907-scaled.jpg`,
  proyectos: `${LEGACY}/SIMMET.jpg`,
  asesoria: `${LEGACY}/Imagen-de-Codex-18-sept-2026-00_03_45.png`,

  alimentos: `${LEGACY}/Imagen-de-Codex-18-sept-2026-01_13_13.png`,
  plasticos: `${LEGACY}/Imagen-de-Codex-18-sept-2026-01_13_21.png`,
  automotriz: `${LEGACY}/Imagen-de-Codex-18-sept-2026-01_13_26.png`,

  llaveros: `${LEGACY}/IMG_4208.jpg`,
  decorativas: `${LEGACY}/IMG_4188.jpg`,
  figuras: `${LEGACY}/IMG_3907-scaled.jpg`,
  paneles: `${LEGACY}/IMG_4200-e1769008428747.jpg`,

  equipo: `${LEGACY}/WhatsApp-Image-2025-11-19-at-9.29.12-PM.jpeg`,

  iconoExperiencia: `${LEGACY}/Experiencia-removebg-preview.png`,
  iconoIndustrias: `${LEGACY}/idustrias-removebg-preview.png`,
  iconoAcompanamiento: `${LEGACY}/acompanamiento-removebg-preview.png`,
  iconoTecnologia: `${LEGACY}/cnc-removebg-preview.png`,
} as const;
