import { useState } from "react";

export function toggleState(state) {
  let updateState = state;
  return !updateState;
}
