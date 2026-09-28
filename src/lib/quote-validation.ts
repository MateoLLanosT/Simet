export const PLAN_ACCEPT = ".pdf,.dwg,.dxf,.step,.stp,.stl";
export const PLAN_FORMATS = "PDF, DWG, DXF, STEP, STP o STL (máx. 20 MB)";
export const PLAN_MAX_BYTES = 20 * 1024 * 1024;

export function validatePlan(file: { name: string; size: number }): string | null {
  const extension = `.${file.name.split(".").pop()?.toLowerCase()}`;
  if (!PLAN_ACCEPT.split(",").includes(extension)) {
    return "Formato no permitido. Adjunta un plano en PDF, DWG, DXF, STEP, STP o STL.";
  }
  if (file.size === 0) return "El archivo está vacío. Selecciona otro plano.";
  if (file.size > PLAN_MAX_BYTES) return "El archivo supera el límite de 20 MB.";
  return null;
}

export function validateContact(data: {
  nombre: string; empresa: string; email: string; telefono: string;
}): string | null {
  if (![data.nombre, data.empresa, data.email, data.telefono].every((value) => value.trim())) {
    return "Completa nombre, razón social, correo corporativo y teléfono.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    return "Introduce un correo corporativo válido, por ejemplo nombre@empresa.com.";
  }
  const phone = data.telefono.trim();
  const digits = phone.replace(/\D/g, "");
  if (!/^\+?[\d\s().-]+$/.test(phone) || digits.length < 7 || digits.length > 15) {
    return "Introduce un teléfono válido de 7 a 15 dígitos, con indicativo si corresponde.";
  }
  return null;
}
