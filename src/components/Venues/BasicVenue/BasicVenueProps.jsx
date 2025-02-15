export const BasicVenueProps = {
  color: 0x808080,
  rect: [{ x: 10, y: 10, width: 100, height: 200 }],
};

export function drawVenue(g) {
  g.clear();
  // color of the venue
  g.beginFill(BasicVenueProps.color);
  // shape of the venue
  BasicVenueProps.rect.map((rect) => {
    g.drawRect(rect.x, rect.y, rect.width, rect.height);
  });

  g.endFill();
}
