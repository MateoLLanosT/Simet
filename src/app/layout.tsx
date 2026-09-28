import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./motion.css";
import "./chatbot.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import ChatWidget from "@/components/chatbot/ChatWidget";

export const metadata: Metadata = {
  title: "SIMET S.A.S",
  description:
    "Soluciones en metalmecánica de precisión, mecanizado CNC, corte láser y diseño industrial en Mosquera, Cundinamarca.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#113453",
  // Con el teclado abierto, el contenido se reajusta y el campo del chat queda visible
  interactiveWidget: "resizes-content",
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
        <ChatWidget />
      </body>
    </html>
  );
}
