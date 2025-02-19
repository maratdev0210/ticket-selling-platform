export const BasicSceneProps = {
  color: 0x808080,
  rect: [{ x: 10, y: 200, width: 25, height: 300 }],
};

export function drawScene(g) {
  g.clear();
  // color of the venue
  g.beginFill(BasicSceneProps.color);
  // shape of the venue
  BasicSceneProps.rect.map((rect) => {
    g.drawRect(rect.x, rect.y, rect.width, rect.height);
  });
}
