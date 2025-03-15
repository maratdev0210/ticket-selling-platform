import React from "react";
import PickSeats from "./components/ui/PickSeats/PickSeats";
import Artists from "./components/ui/artists/Artists";


export default function App() {
  return (
    <React.Fragment>
      <Artists />
      <PickSeats />
    </React.Fragment>
  );
}
