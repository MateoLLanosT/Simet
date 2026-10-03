import ServiceDetail from "@/components/ServiceDetail";
import { servicePages } from "@/lib/service-pages";

const page = servicePages["modelado-3d"];

export const metadata = page.metadata;

export default function Modelado3DPage() {
  return <ServiceDetail {...page.content} />;
}
