export const squareSectionProps = {
  color: 0x808080,
  x: 100,
  y: 200,
  width: 200,
  height: 300,
};

export function drawSection(g, props) {
  g.beginFill(props.color);
  g.drawRect(props.x, props.y, props.width, props.height);
}
