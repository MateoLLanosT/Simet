import ServiceDetail from "@/components/ServiceDetail";
import { servicePages } from "@/lib/service-pages";

const page = servicePages["mecanizado-cnc"];

export const metadata = page.metadata;

export default function MecanizadoCncPage() {
  return <ServiceDetail {...page.content} />;
}
