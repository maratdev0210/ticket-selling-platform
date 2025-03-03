import React from "react";
import PickSeats from "./components/PickSeats";
import ThemeSwitch from "./components/ui/Header/themeSwitch";

export default function App() {
  return (
    <React.Fragment>
      <ThemeSwitch />
      <PickSeats />
    </React.Fragment>
  );
}
