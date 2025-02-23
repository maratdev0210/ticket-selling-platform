// generates a random seat price 
export default function seatPrice(minPrice, maxPrice) {
  return Math.ceil(Math.random() * (maxPrice - minPrice) + minPrice);
}
