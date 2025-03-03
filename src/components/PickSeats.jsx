// Pick the seats and proceed to checkout
import React from "react";
import { useState } from "react";
import BasicVenue from "./ui/Venues/BasicVenue";
import SelectedSeatsList from "./ui/selectedSeatsList";
import { useStore } from "zustand";
import useSelectedSeats from "./state/useSelectedSeats";

export default function PickSeats() {
  const [isLimitReached, setIsLimitReached] = useState(false);
  const selectedSeats = useStore(
    useSelectedSeats,
    (state) => state.selectedSeats
  );

  const reservedSeats = useStore(
    useSelectedSeats,
    (state) => state.reservedSeats
  );

  return (
    <div className="flex flex-col justify-center h-[800px] items-center relative">
      <div className="flex shadow-2xl w-full 2xl:w-3/4  h-[600px]  mx-auto">
        <BasicVenue
          isLimitReached={isLimitReached}
          setIsLimitReached={setIsLimitReached}
        />

        <SelectedSeatsList selectedSeats={selectedSeats} />
      </div>
    </div>
  );
}
