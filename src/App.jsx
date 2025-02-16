import "./App.css";
import { VENUES } from "./components/Venues/venues";

export default function App() {
  return (
    <>
      {VENUES.map((venue) => {
        return venue;
      })}
    </>
  );
}
