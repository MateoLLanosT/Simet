// Genera el PDF interactivo del brochure imprimiendo /brochure con Chrome sin
// interfaz. Chrome conserva los enlaces (WhatsApp, correo, sitio, índice).
//
// Uso: con el sitio corriendo (npm run dev o npm start), ejecutar
//   npm run brochure:pdf
// Variables opcionales: BROCHURE_URL (por defecto http://localhost:3000/brochure)
// y CHROME_PATH si Chrome o Edge no están en la ruta habitual.

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import sharp from "sharp";

const url = process.env.BROCHURE_URL ?? "http://localhost:3000/brochure";
const output = resolve("public/brochure/SIMET-Brochure.pdf");

// 1. Copias comprimidas de las fotos (lista en src/lib/brochure-images.json).
//    JPEG porque Chrome lo incrusta tal cual; WebP o PNG los guarda sin pérdida
//    y el PDF se vuelve pesado. Solo el logo queda en PNG por la transparencia.
const imagesDir = resolve("public/brochure/img");
mkdirSync(imagesDir, { recursive: true });
const manifest = JSON.parse(readFileSync("src/lib/brochure-images.json", "utf8"));
for (const [name, { source, width, format = "jpg" }] of Object.entries(manifest)) {
  const image = sharp(source).resize({ width, withoutEnlargement: true });
  const file = `${imagesDir}/${name}.${format}`;
  if (format === "png") await image.png({ palette: true, quality: 90, compressionLevel: 9 }).toFile(file);
  else await image.flatten({ background: "#ffffff" }).jpeg({ quality: 80, mozjpeg: true }).toFile(file);
  console.log(`Imagen lista: ${name}.${format} (${(statSync(file).size / 1024).toFixed(0)} KB)`);
}

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

const chrome = candidates.find((path) => existsSync(path));
if (!chrome) {
  console.error("No se encontró Chrome ni Edge. Define CHROME_PATH con la ruta del navegador.");
  process.exit(1);
}

const res = await fetch(url).catch(() => null);
if (!res?.ok) {
  console.error(`No se pudo abrir ${url}. ¿Está corriendo el sitio (npm run dev)?`);
  process.exit(1);
}

mkdirSync(dirname(output), { recursive: true });
execFileSync(
  chrome,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--hide-scrollbars",
    // Tiempo para que carguen fuentes e imágenes antes de imprimir
    "--virtual-time-budget=15000",
    `--print-to-pdf=${output}`,
    url,
  ],
  { stdio: "inherit" }
);

const mb = statSync(output).size / 1024 / 1024;
console.log(`PDF generado: ${output} (${mb.toFixed(2)} MB)`);
