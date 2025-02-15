import { Graphics, Stage } from "@pixi/react";
import { useState, useCallback } from "react";

// A stadium-like venue
export default function StadiumVenue({ venueProps }) {
  const [width, setWidth] = useState(window.innerWidth);
  const draw = useCallback(
    (g) => {
      g.clear();
      g.beginFill(venueProps.color);
      g.drawRoundedRect(
        venueProps.x,
        venueProps.y,
        venueProps.width,
        venueProps.height,
        venueProps.radius
      );
      g.endFill();
    },
    [venueProps]
  );

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return (
    <>
      <Stage width={width} height={250} options={{ backgroundColor: 0xffffff }}>
        <Graphics draw={draw} />
      </Stage>
    </>
  );
}
