// (x, y) represents the top-left position of a seat
// returns the coordinates of a seat, i.e. where to place each seat
export function mapSeats(x, y, rows, columns, radius, space_between_seats) {
  const seats = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      seats.push({
        x: col * space_between_seats + x,
        y: row * space_between_seats + y,
        radius,
      });
    }
  }
  return seats;
}
