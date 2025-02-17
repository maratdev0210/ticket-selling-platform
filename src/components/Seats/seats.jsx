import StandingSeat from "./StandingSeat/StandingSeat";
import LoungeSeat from "./LoungeSeat/LoungeSeat";
import VipSeat from "./VipSeat/VipSeat";

import { StandingSeatProps } from "./StandingSeat/StandingSeatProps";
import { VipSeatsProps } from "./VipSeat/VipSeatProps";
import { LoungeSeatProps } from "./LoungeSeat/LoungeSeatProps";

export const SEATS = [
  <StandingSeat key="seat_1" seatProps={StandingSeatProps} />,
  <LoungeSeat key="seat_2" seatProps={LoungeSeatProps} />,
  <VipSeat key="seat_3" seatProps={VipSeatsProps} />,
];
