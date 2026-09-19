import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SIMET S.A.S. | Metalmecánica de Precisión, CNC y Corte Láser",
  description:
    "Soluciones en metalmecánica de precisión, mecanizado CNC, corte láser y diseño industrial en Mosquera, Cundinamarca.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
