import "./App.css";
import { SEATS } from "./components/Seats/seats";

export default function App() {
  return (
    <>
      {SEATS.map((seat) => {
        return seat;
      })}
    </>
  );
}
