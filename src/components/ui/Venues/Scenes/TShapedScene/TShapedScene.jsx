import { useDraw } from "../../../../utils/useDraw";
import { drawScene } from "./TShapedSceneProps";
import { Graphics } from "@pixi/react";

// T-shaped scene design
export default function TShapedScene({ sceneProps }) {
  const draw = useDraw(drawScene, sceneProps);

  return <Graphics draw={draw} />;
}
