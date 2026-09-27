import type { Metadata } from "next";
import "./globals.css";
import "./motion.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "SIMET S.A.S. | Metalmecánica de Precisión, CNC y Corte Láser",
  description:
    "Soluciones en metalmecánica de precisión, mecanizado CNC, corte láser y diseño industrial en Mosquera, Cundinamarca.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <head>
        {/* Sin JavaScript no hay observer: el contenido se muestra sin animar */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important}`}</style>
        </noscript>
      </head>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
