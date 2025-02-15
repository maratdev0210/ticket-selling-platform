export const StadiumVenueProps = {
  color: 0x808080,
  roundedRect: [{ x: 10, y: 10, width: 200, height: 100, radius: 50 }],
};

export function drawVenue(g) {
  g.clear();
  
  // color of the venue
  g.beginFill(StadiumVenueProps.color);

  // draw the venue shape
  StadiumVenueProps.roundedRect.map((rect) => {
    g.drawRoundedRect(rect.x, rect.y, rect.width, rect.height, rect.radius);
  });

  g.endFill();
}
