import React from "react";
import PickSeats from "./components/ui/PickSeats/PickSeats";
import ThemeSwitch from "./components/ui/Header/themeSwitch";
import useLocalStorage from "use-local-storage";
import { useStore } from "zustand";
import useTheme from "./components/state/useTheme";

export default function App() {
  return (
    <React.Fragment>
      <PickSeats />
      <ThemeSwitch />
    </React.Fragment>
  );
}
