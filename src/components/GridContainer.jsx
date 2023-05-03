import styles from "../styles/desktop/Web.module.css";

import { useState } from "react";
import { GridItem } from "./GridItem";
import { colorIds, StateStylesAll } from "../helpers/allstyles.js";
import { allAreFalsy } from "../helpers/allAreFalsy.js";

export function GridContainer() {
  const [colorIdState, setColorIds] = useState(colorIds);
  const [gridStyle, changeGridStyle] = useState(StateStylesAll.init);

  function toggleActiveSquare(id) {
    let updatedColorIds = colorIdState.map((item) => {
      if (item.id === id) {
        // console.log(`before change: ${item.isActive}`);
        item.isActive = !item.isActive;

        // console.log(`after change: ${item.isActive}`);
      } else {
        item.isActive = false;
      }

      return item;
    });

    setColorIds(updatedColorIds);
  }

  function toggleGridState(id) {
    toggleActiveSquare(id);
    // let activityArr = colorIdState.map((e) => e.isActive);

    let activeStates = colorIdState.map((e) => e.isActive);

    let val = allAreFalsy(activeStates);

    if (val) {
      changeGridStyle(StateStylesAll.init);
    } else {
      switch (id) {
        case "b1":
          changeGridStyle(StateStylesAll.bigBlue);
          // resetColorStyles(i);
          break;
        case "b2":
          changeGridStyle(StateStylesAll.bigYellow);
          // resetColorStyles(i);
          break;
        case "b3":
          changeGridStyle(StateStylesAll.bigGreen);
          // resetColorStyles(i);
          break;
        case "b4":
          changeGridStyle(StateStylesAll.bigRed);
          // resetColorStyles(i);
          break;
        default:
          console.log(`Error`);
      }
    }
  }

  let gridItems = colorIdState.map((square) => {
    let { color, height, width, justifySelf, alignSelf } = square.initStyles;
    return (
      <GridItem
        key={square.id}
        id={square.id}
        isActive={square.isActive}
        c={color}
        h={height}
        w={width}
        js={justifySelf}
        as={alignSelf}
        toggleGridState={toggleGridState}
      />
    );
  });

  return (
    <div style={gridStyle} className={styles.gridContainer}>
      {gridItems}
    </div>
  );
}
