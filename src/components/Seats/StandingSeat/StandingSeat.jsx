import { useWindowSize } from "../../utils/useWindowSize";
import { useDraw } from "../../utils/useDraw";
import { drawSeats } from "./StandingSeatProps";
import { Graphics, Stage } from "@pixi/react";

export default function StandingSeat(seatProps) {
  const width = useWindowSize();
  const draw = useDraw(drawSeats, seatProps);

  return (
    <>
      <Stage width={width} height={400} options={{ backgroundColor: 0xffffff }}>
        <Graphics draw={draw} />
      </Stage>
    </>
  );
}
