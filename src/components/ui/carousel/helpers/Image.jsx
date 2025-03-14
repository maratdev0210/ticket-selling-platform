import { useSpring, animated } from "@react-spring/web";

// id-> position in array; currentImageId -> which image is being currently displayed on the screen
// id = 0, currentImageId = 1, then hide the image; id = 1, currentImageId = 1 => display the image
// className is used for image transitions
export default function Image({ className, id, currentImageId, src }) {
  return (
    <img
      src={src}
      className={`${id != currentImageId ? "hidden" : "sm:w-xl w-2xl h-80"} ${className}`}
    />
  );
}
