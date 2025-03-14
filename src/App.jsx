import React from "react";
import PickSeats from "./components/ui/PickSeats/PickSeats";
import Artists from "./components/ui/artists/Artists";
import Carousel from "./components/ui/carousel/Carousel";

export default function App() {
  return (
    <React.Fragment>
      <Carousel />
      <Artists />
      <PickSeats />
    </React.Fragment>
  );
}
