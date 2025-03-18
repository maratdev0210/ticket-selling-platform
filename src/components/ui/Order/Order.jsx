import { useArtist } from "../../state/useArtist"; // name, avatar
import { useConcert } from "../../state/useConcert"; // location, date, venue
import { useStore } from "zustand";
import useSelectedSeats from "../../state/useSelectedSeats";
import MainInfo from "./helpers/MainInfo";
import OrderedSeats from "./helpers/OrderedSeats";
import { color } from "../Venues/Seats/types";
import { Link } from "react-router";
import { useState } from "react";

export default function Order() {
  const artist = useStore(useArtist, (state) => state.artist);
  const concert = useStore(useConcert, (state) => state.concert);
  const selectedSeats = useStore(
    useSelectedSeats,
    (state) => state.selectedSeats
  );

  return (
    <div className="flex justify-around">
      <div>
        <img src={artist.avatar} />
      </div>
      <div className="flex justify-end px-12 rounded-sm">
        <div className="flex flex-col justify-between w-120 border-1 border-solid border-gray-300 ">
          <div>
            <div className="text-center">
              <span className="text-2xl text-blue-500">Your Order</span>
            </div>
            <div className="px-4 py-8 ">
              <MainInfo artist={artist} concert={concert} />
              <OrderedSeats selectedSeats={selectedSeats} color={color} />
            </div>
          </div>

          <div className="py-8 flex justify-center">
            <button className="cursor-pointer bg-blue-500 text-white p-4 text-2xl rounded-md">
              Download Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
