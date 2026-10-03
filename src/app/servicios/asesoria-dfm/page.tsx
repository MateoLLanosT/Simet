import ServiceDetail from "@/components/ServiceDetail";
import { servicePages } from "@/lib/service-pages";

const page = servicePages["asesoria-dfm"];

export const metadata = page.metadata;

export default function AsesoriaDfmPage() {
  return <ServiceDetail {...page.content} />;
}
