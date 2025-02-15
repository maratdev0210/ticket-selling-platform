// reusable custom hook for drawing the currently bound geometry
// fn stores the drawings in geometry
import { useCallback } from "react";

export function useDraw(fn, dependencies) {
  return useCallback(fn, [dependencies]);
}
