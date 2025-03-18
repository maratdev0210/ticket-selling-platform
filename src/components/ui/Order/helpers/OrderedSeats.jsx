export default function OrderedSeats({ selectedSeats, color }) {
  return (
    <>
      <div className="py-4">
        <span className="text-gray-800 font-bold text-lg">Seats</span>
      </div>
      <div className="py-2">
        {selectedSeats.map((seat, index) => {
          return (
            <div key={index} className="flex items-center gap-2">
              <div>
                <span
                  style={{ backgroundColor: color[seat.colorCode] }}
                  className="rounded-full size-4 inline-block"
                ></span>
              </div>
              <div className="flex flex-col">
                <span className="text-black dark:text-white font-medium text-lg">
                  {seat.type.toUpperCase()}
                </span>
                <span className="text-gray-700 font-medium text-lg">
                  Section {seat.section}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
