// toggle for switching between light and dark modes

import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import useLocalStorage from "use-local-storage";

export default function ThemeSwitch() {
  const [theme, setTheme] = useLocalStorage("theme");

  function onThemeSwitch() {
    setTheme(theme == "light" ? "dark" : "light");
  }

  return (
    <div
      className={`${theme == "dark" ? "dark" : null} text-[#ffbf71] dark:text-[#D9FBFF]`}
    >
      <Classic
        onToggle={onThemeSwitch}
        duration={750}
        reversed
        className="text-6xl"
      />
    </div>
  );
}
