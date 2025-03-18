// id-> position in array; currentImageId -> which image is being currently displayed on the screen
// id = 0, currentImageId = 1, then hide the image; id = 1, currentImageId = 1 => display the image
// className is used for image transitions
export default function Image({ className, id, currentImageId, src }) {
  return (
    <img
      src={src}
      className={`${id != currentImageId ? "hidden" : " w-full h-70 sm:h-120 md:h-140 lg:h-150 xl:h-120 xl:w-3xl"} ${className}`}
    />
  );
}
