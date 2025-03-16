import { faker } from "@faker-js/faker";
import { format, compareAsc } from "date-fns";

function createConcertDate(n) {
  return Array(n)
    .fill(null)
    .map(() => faker.date.between({ from: "2025-04-16", to: "2025-09-16" }));
}

function createConcertLocation(n) {
  return Array(n)
    .fill(null)
    .map(() => faker.location.city().substring(0, 20)); // avoid generating a city with large name
}

// generate some random concert data
export default function createConcertData() {
  let concertDates = createConcertDate(20)
    .sort(compareAsc)
    .map((date) => format(date, "MMMM d, yyyy"));

  let concertLocations = createConcertLocation(20);
  let concertData = [];
  for (let i = 0; i < 20; i++) {
    concertData.push({ date: concertDates[i], location: concertLocations[i] });
  }

  return concertData;
}
