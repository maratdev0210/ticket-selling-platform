import React, { useCallback, useState } from "react";
import { Graphics, Stage } from "@pixi/react";

// A rectangle venue
export default function BasicVenue({ venueProps }) {
  const [width, setWidth] = useState(window.innerWidth);
  const draw = useCallback(
    (g) => {
      g.clear();
      g.beginFill(venueProps.color);
      g.drawRect(
        venueProps.x,
        venueProps.y,
        venueProps.width,
        venueProps.height
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

/* TO-DO: place the scene in the center */
