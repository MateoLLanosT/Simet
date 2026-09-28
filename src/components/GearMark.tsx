import SimetIsotipo from "@/components/SimetIsotipo";

/** Isotipo decorativo de fondo: los piñones del logo girando lentamente. */
export default function GearMark() {
  return (
    <div className="simet-gears" aria-hidden="true">
      <SimetIsotipo tone="mono" size="100%" className="simet-isotipo--spin" />
    </div>
  );
}
