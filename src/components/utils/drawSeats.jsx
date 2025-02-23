import { mapSeats } from "../ui/Venues/Seats/mapSeats";
import drawSection from "./drawSection";

const SPACE_BETWEEN_SEATS = 10;
const SEAT_RADIUS = 2;

// display the seats on the screen
export default function drawSeats(mapped_seats, selectedSeats, setSelectedSeats) {
    return mapped_seats.map(
      ({ x, y, rows, columns, colorCode, section, type }) => {
        const seatsCoords = mapSeats(
          x,
          y,
          rows,
          columns,
          SEAT_RADIUS,
          SPACE_BETWEEN_SEATS
        );
  
        return drawSection(
          seatsCoords,
          colorCode,
          selectedSeats,
          setSelectedSeats,
          section,
          type
        );
      }
    );
  }