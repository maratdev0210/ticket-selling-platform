import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useArtist } from "../../../state/useArtist";
import { useStore } from "zustand";

// picture; The Weeknd; Pop Music, Worldwide recognized Candadian artist
export default function Artist({ avatar, name, genre, description }) {
  const [isCollapsed, setIsCollapsed] = useState(false); // is the description being shown or not
  const [springs, api] = useSpring(() => ({}));
  const changeArtist = useStore(useArtist, (state) => state.changeArtist);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    api.start({
      from: {
        height: isCollapsed ? "70px" : "0px",
        opacity: 0,
      },
      to: {
        height: isCollapsed ? "0px" : "70px",
        opacity: 1,
      },
      config: { duration: 400 },
    });
  };
  return (
    <div className={`px-4 last:mb-8`}>
      <img
        src={avatar}
        alt={name}
        width="36"
        height="36"
        className="rounded-full relative top-16"
      />

      <div className={`mx-11 relative top-4 w-60`}>
        <div>
          <p className="font-medium text-gray-500">{name}</p>
          <div className="flex gap-2">
            <p className="text-gray-400 font-medium">{genre}</p>
            <p
              onClick={handleCollapse}
              className="text-gray-200 cursor-pointer"
            >
              {isCollapsed ? "Hide" : "Learn more"}
            </p>
          </div>
          <animated.div style={{ ...springs }}>
            {isCollapsed && (
              <div>
                <p className="text-gray-300">
                  {description}
                  <span
                    onClick={() => changeArtist(name)}
                    className="mx-2 text-blue-400 font-medium cursor-pointer hover:text-blue-400/75"
                  >
                    Buy tickets
                  </span>
                </p>
              </div>
            )}
          </animated.div>
        </div>
      </div>
    </div>
  );
}
