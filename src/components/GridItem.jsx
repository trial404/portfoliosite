import { useState } from "react";
import styles from "../styles/webTest.module.css";
import { Project } from "./project";

export function GridItem({ id, c, h, w, js, as, toggleGridState, isActive }) {
  const stateStylesSmall = {
    backgroundColor: c,
    height: h,
    width: w,
    justifySelf: js,
    alignSelf: as,
  };

  const stateStylesBig = {
    border: `4px solid ${c}`,
    backgroundColor: "white",
    height: "auto",
    width: "auto",
    placeSelf: "stretch",
  };
  //   const [active, toggleActive] = useState(true);

  function clickHandler() {
    toggleGridState(id);
  }

  return (
    <>
      {isActive ? (
        <div
          className={styles.id}
          style={stateStylesBig}
          onClick={clickHandler}
        >
          <Project color={c} />
        </div>
      ) : (
        <div style={stateStylesSmall} onClick={clickHandler}></div>
      )}
    </>
  );
}
