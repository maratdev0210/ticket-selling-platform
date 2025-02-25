// update the width parameter that is being passed down to canvas's width property on window resize
import { useLayoutEffect, useState } from "react";

export function useWindowSize() {
  const [size, setSize] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth <= 1280) {
        setSize(Math.min(window.innerWidth, 480)); // for mobile screens
      } else {
        setSize(600);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
