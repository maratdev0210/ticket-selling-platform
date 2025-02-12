import "./App.css";
import { venues } from "./Venues/Venues";

export default function App() {
  return (
    <>
      <div className="_venus_list">
        {venues.map((venue, index) => {
          return (
            <div className="_venue" key={index}>
              {venue}
            </div>
          );
        })}
      </div>
    </>
  );
}
