import { mapSeats } from "../mapSeats";

export const LoungeSeatProps = {
  color: 0xff0000,
  circles: mapSeats(10, 10, 3, 5, 5, 20),
};

export function drawSeats(g) {
  g.beginFill(LoungeSeatProps.color);

  LoungeSeatProps.circles.map((circle) => {
    g.drawCircle(circle.x, circle.y, circle.radius);
  });
}
