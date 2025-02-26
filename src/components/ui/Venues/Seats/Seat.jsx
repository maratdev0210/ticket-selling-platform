import { useState, useEffect } from "react";
import { useStore } from "zustand";
import seatPrice from "../../../utils/seatPrice";
import { priceRange, color } from "./types";
import useSelectedSeats from "../../../state/useSelectedSeats";

export default function Seat({
  x,
  y,
  colorCode,
  section,
  type,
  isLimitReached,
  setIsLimitReached,
}) {
  const [isSelected, setIsSelected] = useState(false); // toggle for the seat
  const selectedSeats = useStore(
    useSelectedSeats,
    (state) => state.selectedSeats
  );
  const setSelectedSeats = useStore(
    useSelectedSeats,
    (state) => state.setSelectedSeats
  );
  const resetSelectedSeats = useStore(
    useSelectedSeats,
    (state) => state.resetSelectedSeats
  );
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

    setSelectedSeats({
      x,
      y,
      price: seatPrice(
        priceRange[colorCode].minPrice,
        priceRange[colorCode].maxPrice
      ),
      section,
      type,
      colorCode,
    });

    // remove the seat from the selected seats list
    if (isSelected) {
      // if the seat is already selected, and the user clicks on it then remove this seat from list of selected ones
      const newArr = selectedSeats.filter(
        (seat) => seat.x !== x || seat.y !== y
      );
      // reset the state to repopulate it with selected seats excluding the remove one
      resetSelectedSeats();

      newArr.map((seat) => {
        setSelectedSeats(seat);
      });
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
