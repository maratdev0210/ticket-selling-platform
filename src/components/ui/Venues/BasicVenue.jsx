// Draw the Basic Venue with Sections and the Seats
import { Stage } from "@pixi/react";
import { SCENES } from "./Scenes/scenes";
import { MAPPED_SEATS } from "../../utils/basicVenueProps.jsx";
import drawSeats from "../../utils/drawSeats.jsx";
import { useState } from "react";

export default function BasicVenue() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const drawnSeats = drawSeats(MAPPED_SEATS, selectedSeats, setSelectedSeats);

  return (
    <div>
      <div>
        <Stage
          className="absolute shadow-2xl"
          width={600}
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
  );
}
