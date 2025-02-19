// Draw the Basic Venue with Sections and the Seats
import { Stage } from "@pixi/react";
import { useWindowSize } from "../../utils/useWindowSize";
import { SCENES } from "./Scenes/scenes";
import { mapSeats } from "./Seats/mapSeats.jsx";
import { createSeatProps, color } from "./Seats/types.jsx";
import { MAPPED_SEATS } from "../../utils/basicVenueSeats.jsx";
import StandingSeat from "./Seats/StandingSeat/StandingSeat.jsx";
import LoungeSeat from "./Seats/LoungeSeat/LoungeSeat.jsx";
import VipSeat from "./Seats/VipSeat/VipSeat.jsx";

const basicScene = SCENES[0];

const SPACE_BETWEEN_SEATS = 10;
const RADIUS = 2;

export default function BasicVenue() {
  const width = useWindowSize();

  return (
    <>
      <Stage width={width} height={600} options={{ backgroundColor: 0xffffff }}>
        {basicScene}

        {MAPPED_SEATS.map((mapped_seat) => {
          const seatToMap = mapSeats(
            mapped_seat.x,
            mapped_seat.y,
            mapped_seat.rows,
            mapped_seat.columns,
            RADIUS,
            SPACE_BETWEEN_SEATS
          );
          // color codes: 0 for standing, 1 for lounge, 2 for vip
          const seatProps = createSeatProps(
            color[mapped_seat.colorCode],
            seatToMap
          );

          switch (mapped_seat.type) {
            case "standing":
              return <StandingSeat seatProps={seatProps} />;

            case "lounge":
              return <LoungeSeat seatProps={seatProps} />;

            default:
              return <VipSeat seatProps={seatProps} />;
          }
        })}
      </Stage>
    </>
  );
}
