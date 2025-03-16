// list of upcoming concerts by artist
import createConcertData from "./helpers/createConcertData";
import Concert from "./helpers/Concert";

export default function Concerts() {
  const concertData = createConcertData();

  return (
    <div className="px-8">
      <div className="border-1 w-80 h-150 overflow-auto container border-gray-300 rounded-lg p-4">
        {concertData.map(({ date, location }, index) => {
          return (
            <Concert date={date} city={location} venue={"Venue"} key={index} />
          );
        })}
      </div>
    </div>
  );
}
