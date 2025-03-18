// display the selected seats as a list
import React from "react";
import { Link } from "react-router";
import { color } from "./Venues/Seats/types";
import { useEffect, useState } from "react";
import { useStore } from "zustand";
import { useConcert } from "../state/useConcert";
import { useArtist } from "../state/useArtist";

// TO-DO: polish the UI
export default function SelectedSeatsList({ selectedSeats }) {
  const [isSeatChosen, setIsSeatChosen] = useState(false); // show the selected seats once they are chosen
  const concert = useStore(useConcert, (state) => state.concert);
  const artist = useStore(useArtist, (state) => state.artist);
  useEffect(() => {
    setIsSeatChosen(selectedSeats.length > 0);
  }, [selectedSeats]);

  return (
    <>
      <div className="w-full relative top-90 sm:top-0  lg:w-1/2 flex flex-col gap-12 py-4">
        <div className="text-center hidden sm:block">
          <div>
            <span className="text-center text-xl font-bold text-gray-700 dark:text-gray-200">
              {artist.name}
            </span>
            <div className="flex justify-center gap-2 *:text-lg mt-2">
              <span className="text-gray-600 dark:text-gray-300 font-bold">
                {concert.city},
              </span>
              <span className="text-gray-500 dark:text-gray-200 font-medium">
                {concert.date}
              </span>
            </div>
          </div>
        </div>
        {isSeatChosen && (
          <>
            <div className="border-2 rounded-full dark:border-pink-300 border-black/50"></div>

            <div className="border-1 dark:border-gray-700 border-gray-300 rounded-xl w-3/4 mx-auto border-solid grid grid-cols-1 lg:grid-cols-2">
              {selectedSeats.map(
                ({ x, y, section, type, colorCode, price }, index) => {
                  // (x, y, section, seatType, colorCode, price)
                  return (
                    <div key={index} className="w-3/4 mx-auto py-2">
                      <div>
                        <span
                          style={{ background: color[colorCode] }}
                          className="rounded-full w-3 h-3 inline-block dark:opacity-75"
                        ></span>
                        <span className="dark:text-gray-200 font-medium px-2">
                          {type.toUpperCase()}
                        </span>
                      </div>

                      <div className="flex flex-col">
                        <span className="px-4 dark:text-gray-100 font-light">
                          Section {section}
                        </span>
                        <span className="italic px-4 dark:text-blue-200">
                          {/* seat number generation (some random additions) */}
                          Seat {x + y}{" "}
                        </span>
                        <div>
                          <span className="inline-block relative italic px-4 dark:text-white">
                            ${price}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>

            <div className="flex justify-center group">
              <button className="group-hover:cursor-pointer group-hover:opacity-80 group-hover:scale-x-105 group-hover:duration-500 rounded-lg  bg-blue-300 text-white font-medium  px-2 py-2">
                <Link to="/checkout">Proceed to Checkout</Link>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
