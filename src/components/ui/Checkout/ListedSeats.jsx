// seats payment
import React from "react";
import { useStore } from "zustand";
import useSelectedSeats from "../../state/useSelectedSeats";
import { Link } from "react-router";
import { useState } from "react";
import { useTransition, useSpring, animated } from "@react-spring/web";
import SeatItem from "./helpers/SeatItem";

export default function ListedSeats({ onNext }) {
  const selectedSeats = useStore(
    useSelectedSeats,
    (state) => state.selectedSeats
  );
  const [isMore, setIsMore] = useState(false);
  const [renderedSeats, setRenderedSeats] = useState(selectedSeats);
  const [springs, api] = useSpring(() => ({}));

  const setReservedSeats = useStore(
    useSelectedSeats,
    (state) => state.setReservedSeats
  );

  const handleCollapse = () => {
    setIsMore(!isMore);
    api.start({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
      config: { duration: 1000 },
    });
  };

  const transitionsOnRemoval = useTransition(renderedSeats, {
    from: { opacity: 1, transform: "translateY(0)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0 },
    config: { duration: 500 },
  });

  // fade-out animation after deleting a seat
  const seatsList = transitionsOnRemoval((style, selectedSeat, _, index) => (
    <animated.div style={style}>
      <SeatItem
        key={index}
        renderedSeats={renderedSeats}
        setRenderedSeats={setRenderedSeats}
        selectedSeats={selectedSeats}
        selectedSeat={selectedSeat}
        index={index}
      />
    </animated.div>
  ));

  return (
    <>
      <div className="relative">
        <div>
          <p className="p-2 text-header text-center">Checkout</p>
          <div>
            {selectedSeats.length > 0 && (
              <p className="px-2 py-4 text-main">Your seats</p>
            )}
            <animated.div style={{ ...springs }}>
              <div
                className={`${isMore ? "transition-all duration-500" : "h-18 transition-all duration-500 overflow-hidden"} p-2`}
              >
                {seatsList}
              </div>
            </animated.div>

            {selectedSeats.length > 0 && (
              <p onClick={handleCollapse} className="text p-2 cursor-pointer">
                Show {isMore ? "less" : "more"}
              </p>
            )}

            {selectedSeats.length == 0 && (
              <div className="flex flex-col items-center">
                <p className="text-main text-center">
                  Looks like you have removed all of your seats..
                </p>
                <Link to="/" className="pt-4 text">
                  Go back and pick your seats again
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <button
            className="rounded-full bg-blue-700/80 border-solid p-2 text-gray-100 text-lg hover:bg-blue-800/80"
            onClick={onNext}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
