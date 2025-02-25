// Pick the seats and proceed to checkout
import React from "react";
import { useState } from "react";
import BasicVenue from "./ui/Venues/BasicVenue";
import SelectedSeatsList from "./ui/selectedSeatsList";

export default function PickSeats() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isLimitReached, setIsLimitReached] = useState(false);

  return (
    <div className="flex flex-col justify-center h-[800px] items-center relative">
      <div className="flex shadow-2xl w-full 2xl:w-3/4  h-[600px]  mx-auto">
        <BasicVenue
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
          isLimitReached={isLimitReached}
          setIsLimitReached={setIsLimitReached}
        />

        <SelectedSeatsList selectedSeats={selectedSeats} />
      </div>
    </div>
  );
}
