import ServiceDetail from "@/components/ServiceDetail";
import { servicePages } from "@/lib/service-pages";

const page = servicePages["diseno-proyectos"];

export const metadata = page.metadata;

export default function DisenoProyectosPage() {
  return <ServiceDetail {...page.content} />;
}
