import { useState } from "react";
import seatPrice from "../../../utils/seatPrice";

import { priceRange } from "./types";
import { color } from "./types";

export default function Seat({
  x,
  y,
  colorCode,
  section,
  type,
  selectedSeats,
  setSelectedSeats,
}) {
  const [isSelected, setIsSelected] = useState(false); // toggle for the seat

  function onSelectedSeat() {
    setIsSelected(!isSelected);
    setSelectedSeats([
      ...selectedSeats,
      {
        x,
        y,
        price: seatPrice(
          priceRange[colorCode].minPrice,
          priceRange[colorCode].maxPrice
        ),
        section,
        type,
      },
    ]);

    // remove the seat from the selected seats list
    if (isSelected) {
      setSelectedSeats(
        selectedSeats.filter((seat) => seat.x !== x || seat.y !== y)
      );
    }
  }

  return (
    <span
      style={{
        left: x,
        top: y,
        borderColor: isSelected ? "black" : color[colorCode],
      }}
      className={`seat absolute inline-block hover:cursor-pointer`}
      onClick={onSelectedSeat}
    />
  );
}
