import Seat from "../ui/Venues/Seats/Seat";

// draws the seats section
export default function drawSection(
  seatsCoords, // (x, y) position of each seat
  colorCode,
  isLimitReached,
  setIsLimitReached,
  section,
  type // Standing || Lounge || VIP
) {
  return seatsCoords.map(({ x, y }, index) => {
    return (
      <Seat
        x={x}
        y={y}
        colorCode={colorCode}
        section={section}
        type={type}
        key={index}
        isLimitReached={isLimitReached}
        setIsLimitReached={setIsLimitReached}
      />
    );
  });
}
