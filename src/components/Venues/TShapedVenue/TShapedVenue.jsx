import { Graphics, Stage } from "@pixi/react";
import { useState, useCallback } from "react";

// T-shaped venue design
export default function TShapedVenue({ venueProps }) {
  const [width, setWidth] = useState(window.innerWidth);
  const draw = useCallback(
    (g) => {
      g.clear();
      g.beginFill(venueProps.color);
      g.drawRect(
        venueProps.horizontalX,
        venueProps.horizontalY,
        venueProps.horizontalWidth,
        venueProps.horizontalHeight
      );
      g.drawRect(
        venueProps.verticalX,
        venueProps.verticalY,
        venueProps.verticalWidth,
        venueProps.verticalHeight
      );
      g.endFill();
    },
    [venueProps]
  );

  document.addEventListener("resize", () => {
    setWidth(document.innerWidth);
  });

  return (
    <>
      <Stage width={width} height={250} options={{ backgroundColor: 0xffffff }}>
        <Graphics draw={draw} />
      </Stage>
    </>
  );
}
