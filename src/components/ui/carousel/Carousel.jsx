// Image carousel
import { concertImages } from "./helpers/carousel";
import { useState, useEffect, useRef } from "react";
import Image from "./helpers/Image";

export default function Carousel() {
  const [imageId, setImageId] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);

      setTimeout(() => {
        setImageId(imageId == 2 ? 0 : imageId + 1);
        setIsAnimating(false);
      }, 3000);
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(handleNext, 3000);
    return () => clearInterval(intervalRef.current);
  });

  return (
    <div>
      <div className="mt-10 h-80 sm:w-xl mx-auto sm:mx-0 overflow-hidden">
        <div>
          <Image
            className={`${isAnimating ? "animate-fadeOutImage" : ""}`}
            src={concertImages[imageId]}
            id={imageId}
            currentImageId={imageId}
          />
        </div>
        <div className="relative bottom-80">
          <Image
            className={`${!isAnimating ? "animate-fadeInImage" : ""}`}
            src={concertImages[imageId == 2 ? 0 : imageId + 1]}
            id={imageId == 2 ? 0 : imageId + 1}
            currentImageId={imageId == 2 ? 0 : imageId + 1}
          />
        </div>
      </div>
    </div>
  );
}
