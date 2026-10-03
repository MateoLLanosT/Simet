import ServiceDetail from "@/components/ServiceDetail";
import { servicePages } from "@/lib/service-pages";

const page = servicePages["corte-laser"];

export const metadata = page.metadata;

export default function CorteLaserPage() {
  return <ServiceDetail {...page.content} />;
}
