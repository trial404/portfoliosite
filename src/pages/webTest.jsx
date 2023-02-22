import React, { useState } from "react";
import { GridItem } from "../components/GridItem";
import { GridContainer } from "../components/GridContainer";

import "../styles/main.css";
import styles from "../styles/webTest.module.css";

function WebTest() {
  return (
    <div className="hero">
      <div className={`${styles.container} container`}>
        <div className={styles.testSpace}>
          <h1>test</h1>
          <GridContainer />
        </div>
      </div>
    </div>
  );
}

export default WebTest;
