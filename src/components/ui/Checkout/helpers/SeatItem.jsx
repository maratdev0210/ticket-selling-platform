// renders and displays the seat in the list of seats options
import { color } from "../../Venues/Seats/types";
import { Star } from "lucide-react";

export default function SeatItem({
  renderedSeats,
  setRenderedSeats,
  selectedSeats,
  selectedSeat,
  index,
}) {
  const removeSeat = (index) => {
    setRenderedSeats(renderedSeats.filter((_, i) => index !== i));
    selectedSeats.splice(index, 1);
  };

  return (
    <div className="flex items-center justify-between gap-2 py-4">
      <div className="flex items-center">
        <div
          className="rounded-full w-4 h-4"
          style={{ backgroundColor: color[selectedSeat.colorCode] }}
        ></div>
        <div className="px-2">
          <div className="flex gap-1">
            <span>Section</span>
            <span className="text-md font-medium">{selectedSeat.section}</span>
            <span
              style={{ color: color[selectedSeat.colorCode], opacity: 0.8 }}
              className="text-md fond-bold px-3"
            >
              {selectedSeat.type}
            </span>
          </div>
          <div>
            <span className="text-md font-medium hover:text-gray-700/50">
              {"$" + selectedSeat.price}
            </span>
          </div>
        </div>
      </div>
      <div
        className="cursor-pointer"
        onClick={() => removeSeat(index)}
        title="remove from ticket"
      >
        <Star className="w-8 h-8 text-red-900" title="message" />
      </div>
    </div>
  );
}
