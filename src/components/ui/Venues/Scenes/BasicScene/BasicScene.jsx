import { useDraw } from "../../../../utils/useDraw";
import { drawScene } from "./BasicSceneProps";
import { Graphics } from "@pixi/react";

// A rectangle venue
export default function BasicScene({ sceneProps }) {
  const draw = useDraw(drawScene, sceneProps);

  return <Graphics draw={draw} />;
}
