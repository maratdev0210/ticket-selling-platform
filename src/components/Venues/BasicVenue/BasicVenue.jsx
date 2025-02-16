import React, { useCallback, useState } from "react";
import { Graphics, Stage } from "@pixi/react";
import { useWindowSize } from "../../utils/useWindowSize";
import { useDraw } from "../../utils/useDraw";
import { drawVenue } from "./BasicVenueProps";

// A rectangle venue
export default function BasicVenue({ venueProps }) {
  const width = useWindowSize();
  const draw = useDraw(drawVenue, venueProps);

  return (
    <>
      <Stage width={width} height={400} options={{ backgroundColor: 0xffffff }}>
        <Graphics draw={draw} />
      </Stage>
    </>
  );
}
