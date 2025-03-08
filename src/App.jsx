import React from "react";
import PickSeats from "./components/ui/PickSeats/PickSeats";
import ThemeSwitch from "./components/ui/Header/themeSwitch";

export default function App() {
  return (
    <React.Fragment>
      <PickSeats />
      <ThemeSwitch />
    </React.Fragment>
  );
}
