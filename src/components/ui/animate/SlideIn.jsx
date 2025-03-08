// animation for transitioning between the steps in a form

import { useSpring, animated } from "@react-spring/web";

export default function SlideIn({ children }) {
  const slideIn = useSpring({
    from: { transform: "translateX(0%) ", opacity: 0 },
    to: { transform: "translateX(0%) ", opacity: 1 },
    config: { duration: 750 },
  });

  return <animated.div style={slideIn}>{children}</animated.div>;
}
