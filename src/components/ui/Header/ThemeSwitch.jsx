// toggle for switching between light and dark modes

import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import useLocalStorage from "use-local-storage";
import useTheme from "../../state/useTheme";
import { useStore } from "zustand";

export default function ThemeSwitch() {
  const [localStorageTheme, setLocalStorageTheme] = useLocalStorage("theme");
  const theme = useStore(useTheme, (state) => state.theme);
  const changeTheme = useStore(useTheme, (state) => state.changeTheme);

  function onThemeSwitch() {
    setLocalStorageTheme(localStorageTheme == "light" ? "dark" : "light");
    changeTheme();
  }

  return (
    <div
      className={`${theme == "dark" ? "dark" : null} text-[#ffbf71] dark:text-[#D9FBFF]`}
    >
      <Classic
        onClick={onThemeSwitch}
        duration={750}
        reversed
        className={`${theme == "dark" ? "theme-toggle--toggled" : null} text-6xl`}
      />
    </div>
  );
}

// theme-toggle--toggled (for showing the moon)
