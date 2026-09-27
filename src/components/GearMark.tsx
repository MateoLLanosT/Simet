import { COG_PATH } from "@/components/icons";

/** Par de engranajes girando en sentidos opuestos, como los piñones del logo. */
export default function GearMark() {
  return (
    <div className="simet-gears" aria-hidden="true">
      <svg className="simet-gears__a" viewBox="0 0 24 24">
        <path d={COG_PATH} />
      </svg>
      <svg className="simet-gears__b" viewBox="0 0 24 24">
        <path d={COG_PATH} />
      </svg>
    </div>
  );
}
