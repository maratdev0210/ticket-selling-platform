// Pick the seats and proceed to checkout
import React from "react";
import { useState, useEffect } from "react";
import BasicVenue from "../Venues/BasicVenue";
import SelectedSeatsList from "../selectedSeatsList";
import { useStore } from "zustand";
import useSelectedSeats from "../../state/useSelectedSeats";
import { useArtist } from "../../state/useArtist";

export default function PickSeats() {
  const [isLimitReached, setIsLimitReached] = useState(false);
  const artist = useStore(useArtist, (state) => state.artist);

  const selectedSeats = useStore(
    useSelectedSeats,
    (state) => state.selectedSeats
  );

  const reservedSeats = useStore(
    useSelectedSeats,
    (state) => state.reservedSeats
  );

  return (
    <div className="relative top-20">
      <div>
        <p className="text-gray-700 text-center font-medium text-2xl">
          Buy tickets for{" "}
          <span className="text-gray-900 font-bold">{artist}</span> concert
        </p>
      </div>
      <div className="flex flex-col justify-center h-[800px] items-center relative">
        <div className="flex shadow-2xl w-full 2xl:w-3/4  h-[600px]  mx-auto">
          <BasicVenue
            isLimitReached={isLimitReached}
            setIsLimitReached={setIsLimitReached}
          />

          <SelectedSeatsList selectedSeats={selectedSeats} />
        </div>
      </div>
    </div>
  );
}
