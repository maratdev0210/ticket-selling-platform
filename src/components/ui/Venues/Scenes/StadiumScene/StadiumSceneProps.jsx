export const StadiumSceneProps = {
  color: 0x808080,
  roundedRect: [{ x: 10, y: 10, width: 200, height: 100, radius: 50 }],
};

export function drawScene(g) {
  // color of the venue
  g.beginFill(StadiumSceneProps.color);

  // draw the venue shape
  StadiumSceneProps.roundedRect.map((rect) => {
    g.drawRoundedRect(rect.x, rect.y, rect.width, rect.height, rect.radius);
  });
}
