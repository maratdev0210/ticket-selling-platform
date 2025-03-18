// Draw the Basic Venue with Sections and the Seats
import { Stage } from "@pixi/react";
import { SCENES } from "./Scenes/scenes";
import { MAPPED_SEATS } from "../../utils/basicVenueProps.jsx";
import drawSeats from "../../utils/drawSeats.jsx";
import { useWindowSize } from "../../utils/useWindowSize.jsx";

export default function BasicVenue({ isLimitReached, setIsLimitReached }) {
  const width = useWindowSize();
  const drawnSeats = drawSeats(MAPPED_SEATS, isLimitReached, setIsLimitReached);

  return (
    <div className="relative flex items-center md:scale-75 lg:scale-100 lg:w-3/4">
      <div
        style={{ width: width }}
        className="h-[300px] sm:h-[500px] lg:h-[700px]"
      >
        <div>
          <Stage
            className="absolute"
            width={width}
            height={600}
            options={{ backgroundColor: 0xffffff }}
          >
            {SCENES[0]}
          </Stage>
        </div>

        <div className="relative">
          {drawnSeats.map((seatDiv) => {
            return seatDiv;
          })}
        </div>
      </div>
    </div>
  );
}
