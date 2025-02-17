export function drawSeats(g, seatProps) {
  g.beginFill(seatProps.color);

  seatProps.circles.map((circle) => {
    g.drawCircle(circle.x, circle.y, circle.radius);
  });
}
