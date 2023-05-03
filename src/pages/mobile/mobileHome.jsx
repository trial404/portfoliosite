import React, { useState } from "react";
import { toggleState } from "../../hooks/toggleState";
import "../../styles/mobile/main.css";
import styles from "../../styles/mobile/Home.module.css";
import vectorLine from "../../images/vectorline.png";

function MobileHome() {
  const [colorState, setRed] = useState("red");

  function handleClick() {
    prompt("you clicked");
    let newColor = "blue";
    setRed(newColor);
  }

  return (
    <div className="main">
      <div className="containerM">
        <h1 className={styles.heading}> DAVID ROSE</h1>
        <div className={styles.welcome}>
          <h3>WELCOME</h3>
        </div>
        <div className={styles.navlinks}>
          <a href="home" className={styles.linkHome}>
            HOME
          </a>
          <a href="home" className={styles.linkAbout}>
            ABOUT
          </a>
          <a href="home" className={styles.linkWeb}>
            WEB
          </a>
          <a href="home" className={styles.linkPhoto}>
            PHOTO
          </a>
        </div>
        <img src={vectorLine} className={styles.vector} alt="" />
        <div className={styles.squares}>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
        </div>
      </div>
    </div>
  );
}

export default MobileHome;
