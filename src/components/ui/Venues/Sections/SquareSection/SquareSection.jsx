import { Graphics } from "@pixi/react";
import { drawSection } from "./squareSectionProps";
import { useDraw } from "../../../../utils/useDraw";

// size => [small | medium | large]; children draws the seats graphics
export default function SquareSection({ props, children }) {
  const draw = useDraw((g) => drawSection(g, props), props);
  return (
    <>
      <Graphics draw={draw}>{children}</Graphics>
    </>
  );
}
