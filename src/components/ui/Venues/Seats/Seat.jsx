import { useState, useEffect } from "react";
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
  isLimitReached,
  setIsLimitReached,
}) {
  const [isSelected, setIsSelected] = useState(false); // toggle for the seat

  // do not allow the user to select more than 5 seats
  useEffect(() => {
    if (!isSelected && selectedSeats.length == 5) {
      setIsLimitReached(true);
      return;
    }
    setIsLimitReached(selectedSeats.length > 5);
  }, [selectedSeats]);

  function onSelectedSeat() {
    // don't allow the user to select another seat if he has already selected 5 seats
    if (!isSelected && isLimitReached) {
      return;
    }

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
        colorCode,
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
    <div className="relative">
      <span
        style={{
          left: x,
          top: y,
          borderColor: isSelected ? "black" : color[colorCode],
        }}
        className={`seat absolute inline-block hover:cursor-pointer`}
        onClick={onSelectedSeat}
      />
    </div>
  );
}
