// Pick the seats and proceed to checkout
import React from "react";
import { useState, useEffect } from "react";
import BasicVenue from "../Venues/BasicVenue";
import SelectedSeatsList from "../selectedSeatsList";
import { useStore } from "zustand";
import useSelectedSeats from "../../state/useSelectedSeats";
import { useArtist } from "../../state/useArtist";
import { useConcert } from "../../state/useConcert";
import Concerts from "../Concerts/Concerts";

export default function PickSeats() {
  const [isLimitReached, setIsLimitReached] = useState(false);
  const artist = useStore(useArtist, (state) => state.artist);
  const concert = useStore(useConcert, (state) => state.concert);

  const selectedSeats = useStore(
    useSelectedSeats,
    (state) => state.selectedSeats
  );

  const reservedSeats = useStore(
    useSelectedSeats,
    (state) => state.reservedSeats
  );

  console.log(concert);

  return (
    <div id="tickets" className={`relative top-20`}>
      <div>
        <div>
          <p className="text-gray-700 dark:text-pink-500 text-center font-medium text-2xl">
            Buy tickets for{" "}
            <span className="text-gray-900 dark:text-white font-bold">
              {artist.name}
            </span>{" "}
            concert
          </p>
        </div>
        <div
          className={`${artist.name.length == 0 ? "hidden" : "flex h-[800px]  items-center relative"}`}
        >
          <div
            className={`${concert.city.length > 0 ? "hidden" : "block w-full sm:w-3/4 sm:mx-auto lg:w-1/2 lg:mx-1"}`}
          >
            <Concerts />
          </div>

          <div
            className={`${concert.city.length == 0 ? "hidden" : "flex flex-col sm:flex-row overflow-auto container shadow-2xl w-full 2xl:w-3/4  h-[600px]  mx-auto"}`}
          >
            <BasicVenue
              isLimitReached={isLimitReached}
              setIsLimitReached={setIsLimitReached}
            />

            <SelectedSeatsList selectedSeats={selectedSeats} />
          </div>
        </div>
      </div>
    </div>
  );
}
