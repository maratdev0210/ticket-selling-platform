import { useDraw } from "../../../../utils/useDraw";
import { drawScene } from "./StadiumSceneProps";
import { Graphics } from "@pixi/react";

// A stadium-like venue
export default function StadiumScene({ sceneProps }) {
  const draw = useDraw(drawScene, sceneProps);

  return <Graphics draw={draw} />;
}
