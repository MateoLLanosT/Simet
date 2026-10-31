import { PLAN_FORMATS } from "@/lib/quote-validation";

/**
 * Datos de contacto de SIMET. Los usan el formulario de contacto, el chat y
 * la IA: al cambiar un dato aquí se actualiza en todos a la vez.
 */
export const SIMET = {
  telefonos: ["(317) 331 5892", "(317) 331 5890"],
  whatsapp: "573173315892",
  email: "atencionalcliente@simet.com.co",
  direccion: "Carrera 3 # 16-58, Mosquera, Cundinamarca",
  mapa: "https://www.google.com/maps/search/?api=1&query=Carrera+3+%2316-58+Mosquera+Cundinamarca",
  horario: "Lunes a viernes, 8:00 a.m. – 5:00 p.m.",
  respuesta: "menos de 24 horas hábiles",
  formatos: PLAN_FORMATS,
  /** WhatsApp de ventas (cotizaciones del brochure) */
  whatsappVentas: { numero: "573172567897", visible: "317 256 7897" },
  /** Dominio definitivo: los enlaces del PDF necesitan la dirección completa */
  sitio: { url: "https://www.simet.com.co", visible: "www.simet.com.co" },
  facebook: { url: "https://www.facebook.com/share/1MQqpSHH1A/", visible: "SIMET S.A.S." },
  instagram: { url: "https://www.instagram.com/simet_s.a.s", visible: "@simet_s.a.s" },
};

/** Enlace a WhatsApp con el mensaje ya escrito. */
export const whatsappUrl = (numero: string, mensaje: string) =>
  `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
