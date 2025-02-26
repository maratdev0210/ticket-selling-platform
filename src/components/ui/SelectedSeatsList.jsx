// display the selected seats as a list
import React from "react";
import { Link } from "react-router";
import { color } from "./Venues/Seats/types";
import { useEffect, useState } from "react";

// TO-DO: polish the UI
export default function SelectedSeatsList({ selectedSeats }) {
  const [isSeatChosen, setIsSeatChosen] = useState(false); // show the selected seats once they are chosen
  useEffect(() => {
    setIsSeatChosen(selectedSeats.length > 0);
  }, [selectedSeats]);

  return (
    <>
      {isSeatChosen && (
        <div className="w-full lg:w-1/2 flex flex-col gap-12 py-4">
          <div className="text-center">
            <span className="text-2xl">Your seats</span>
          </div>
          <div className="border-2 rounded-full border-black/50"></div>

          <div className="border-1 border-black/50 rounded-xl w-3/4 mx-auto border-solid grid grid-cols-1 lg:grid-cols-2">
            {selectedSeats.map(
              ({ x, y, section, type, colorCode, price }, index) => {
                // (x, y, section, seatType, colorCode, price)
                return (
                  <div key={index} className="w-3/4 mx-auto py-2">
                    <div>
                      <span
                        style={{ background: color[colorCode] }}
                        className="rounded-full w-3 h-3 inline-block "
                      ></span>
                      <span className="px-2">{type.toUpperCase()}</span>
                    </div>

                    <div className="flex flex-col">
                      <span className="font-bold px-4">Section {section}</span>
                      <span className="italic px-4">
                        {/* seat number generation (some random additions) */}
                        Seat {x + y}{" "}
                      </span>
                      <div>
                        <span className="inline-block relative italic px-4">
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
            <button className="group-hover:cursor-pointer rounded-sm border-2 border-black/50 px-2 py-2">
              <Link to="/checkout">Proceed to Checkout</Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
