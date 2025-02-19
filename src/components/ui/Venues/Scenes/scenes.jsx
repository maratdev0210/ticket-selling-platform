import BasicScene from "./BasicScene/BasicScene";
import StadiumScene from "./StadiumScene/StadiumScene";
import TShapedScene from "./TShapedScene/TShapedScene";

import { BasicSceneProps } from "./BasicScene/BasicSceneProps";
import { StadiumSceneProps } from "./StadiumScene/StadiumSceneProps";
import { TShapedSceneProps } from "./TShapedScene/TShapedSceneProps";

export const SCENES = [
  <BasicScene key="scene_1" sceneProps={BasicSceneProps} />,
  <StadiumScene key="scene_2" sceneProps={StadiumSceneProps} />,
  <TShapedScene key="scene_3" sceneProps={TShapedSceneProps} />,
];
