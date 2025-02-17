import { mapSeats } from "../mapSeats";

export const VipSeatsProps = {
  color: 0xffff00,
  circles: mapSeats(10, 10, 4, 6, 5, 20),
};

export function drawSeats(g) {
  g.beginFill(VipSeatsProps.color);        

  VipSeatsProps.circles.map((circle) => {
    g.drawCircle(circle.x, circle.y, circle.radius);
  });
}
