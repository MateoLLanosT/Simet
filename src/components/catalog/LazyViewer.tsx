"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import SimetIsotipo from "@/components/SimetIsotipo";
import type { Finish } from "@/lib/catalog";

const ModelViewer = dynamic(() => import("./ModelViewer"), {
  ssr: false,
  loading: () => <ViewerPlaceholder />,
});

function ViewerPlaceholder() {
  return (
    <div className="simet-viewer simet-viewer--loading" role="status">
      <SimetIsotipo size={46} className="simet-isotipo--spin" />
      <span>Cargando modelo 3D…</span>
    </div>
  );
}

/** Monta el visor (y descarga three.js) solo cuando entra en pantalla. */
export default function LazyViewer(props: { url: string; finish: Finish; compact?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        io.disconnect();
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <div ref={ref}>{visible ? <ModelViewer {...props} /> : <ViewerPlaceholder />}</div>;
}
