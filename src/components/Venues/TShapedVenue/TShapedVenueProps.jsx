export const TShapedVenueProps = {
  color: 0x808080,
  rect: [
    { x: 10, y: 10, width: 75, height: 200 },
    { x: 85, y: 80, width: 250, height: 60 },
  ],
};

export function drawVenue(g) {
  g.clear();
  // color of the venue
  g.beginFill(TShapedVenueProps.color);

  // draw the venue shape
  TShapedVenueProps.rect.map((currentRect) => {
    g.drawRect(
      currentRect.x,
      currentRect.y,
      currentRect.width,
      currentRect.height
    );
  });

  g.endFill();
}
