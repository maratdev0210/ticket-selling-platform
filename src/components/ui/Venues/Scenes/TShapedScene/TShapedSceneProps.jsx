export const TShapedSceneProps = {
  color: 0x808080,
  rect: [
    { x: 110, y: 210, width: 75, height: 200 },
    { x: 185, y: 280, width: 350, height: 60 },
  ],
};

export function drawScene(g) {
  // color of the venue
  g.beginFill(TShapedSceneProps.color);

  // draw the venue shape
  TShapedSceneProps.rect.map((currentRect) => {
    g.drawRect(
      currentRect.x,
      currentRect.y,
      currentRect.width,
      currentRect.height
    );
  });
}
