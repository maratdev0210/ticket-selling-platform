import { useWindowSize } from "../../utils/useWindowSize";
import { useDraw } from "../../utils/useDraw";
import { drawSeats } from "../drawSeats";
import { Graphics, Stage } from "@pixi/react";

export default function VipSeat({ seatProps }) {
  const width = useWindowSize();
  const draw = useDraw((g) => drawSeats(g, seatProps), seatProps);

  return (
    <>
      <Stage width={width} height={400} options={{ backgroundColor: 0xffffff }}>
        <Graphics draw={draw} />
      </Stage>
    </>
  );
}
