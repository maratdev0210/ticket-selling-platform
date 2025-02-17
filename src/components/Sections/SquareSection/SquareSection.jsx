import { Stage } from "@pixi/react";
import { squareSectionProps as props } from "../sectionType";

// size => [small | medium | large]; children draws the seats graphics
export default function SquareSection({ size, children }) {
  return (
    <>
      <Stage
        width={props[size].width}
        height={props[size].height}
        options={{ backgroundColor: 808080 }}
      >
        {children}
      </Stage>
    </>
  );
}
