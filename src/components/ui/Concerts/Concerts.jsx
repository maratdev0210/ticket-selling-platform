// list of upcoming concerts by artist
import createConcertData from "./helpers/createConcertData";
import Concert from "./helpers/Concert";
import DateFilter from "./helpers/DateFilter";
import LocationFilter from "./helpers/LocationFilter";
import Skeleton from "../artists/helpers/Skeleton";
import { useState, useEffect } from "react";

export default function Concerts() {
  const [concertData, setConcertData] = useState(createConcertData()); // an original ConcertData, remains unchanged
  const [filteredData, setFilteredData] = useState(concertData); // filtered concert data, does not change the original concertData
  const [date, setDate] = useState("default"); // all dates are shown by default
  const [location, setLocation] = useState("");
  const concertDates = concertData.map((data) => data.date);
  const [isLoading, setIsLoading] = useState(true);

  // animate the search
  useEffect(() => {
    setIsLoading(true);
    const simulateLoad = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } finally {
        setIsLoading(false);
      }
    };

    simulateLoad();
  }, [location]);

  useEffect(() => {
    setFilteredData(
      concertData.filter(
        (data) =>
          data.location.toLowerCase().includes(location) &&
          (date == "default" || data.date == date) // either show or dates by default, or filter by a specific date
      )
    );
  }, [location, date]);

  return (
    <div className="px-2 lg:px-8">
      <div className="border-1 w-full lg:w-160 h-150 overflow-auto container border-gray-300 rounded-lg">
        <div className="sm:sticky top-0 z-99 dark:bg-gray-900 bg-white py-2 px-2 sm:px-0">
          <div className="flex flex-col sm:flex-row gap-2 justify-center mb-4 sm:mb-12">
            <DateFilter dates={concertDates} setDate={setDate} />
            <LocationFilter onSearch={setLocation} />
          </div>
        </div>

        {isLoading ? (
          <div className="px-2">
            <Skeleton />
          </div>
        ) : (
          filteredData.map(({ date, location }, index) => {
            return (
              <Concert
                date={date}
                city={location}
                venue={"Venue"}
                key={index}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
