import { mapSeats } from "../mapSeats";

export const StandingSeatProps = {
  color: 0x008000,
  circles: mapSeats(10, 10, 3, 5, 5, 20),
};

export function drawSeats(g) {
  g.beginFill(StandingSeatProps.color);

  StandingSeatProps.circles.map((circle) => {
    g.drawCircle(circle.x, circle.y, circle.radius);
  });
}
