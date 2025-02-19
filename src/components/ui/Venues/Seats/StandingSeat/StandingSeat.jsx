import { useDraw } from "../../../../utils/useDraw";
import { drawSeats } from "../drawSeats";
import { Graphics } from "@pixi/react";

export default function StandingSeat({ seatProps }) {
  const draw = useDraw((g) => drawSeats(g, seatProps), seatProps);

  return <Graphics draw={draw} />;
}
