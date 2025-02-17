import StandingSeat from "./StandingSeat/StandingSeat";
import LoungeSeat from "./LoungeSeat/LoungeSeat";
import VipSeat from "./VipSeat/VipSeat";

import { createSeatProps, color } from "./types";
import { mapSeats } from "./mapSeats";

const mappedSeats = mapSeats(10, 10, 5, 6, 10, 25);

const standingSeatProps = createSeatProps(color[0], mappedSeats);
const loungeSeatProps = createSeatProps(color[1], mappedSeats);
const vipSeatProps = createSeatProps(color[2], mappedSeats);

export const SEATS = [
  <StandingSeat key="seat_1" seatProps={standingSeatProps} />,
  <LoungeSeat key="seat_2" seatProps={loungeSeatProps} />,
  <VipSeat key="seat_3" seatProps={vipSeatProps} />,
];
