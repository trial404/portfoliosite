import React, { useState } from "react";
import "../styles/main.css";
import styles from "../styles/web.module.css";
import { expandColor, resetGrid } from "../helpers/mainScripts";

function Web() {
  var bigBlue = `
          grid-template-columns: 1fr auto;
          grid-template-rows: 1fr auto;
          `;
  var bigYellow = `
          grid-template-columns: auto 1fr;
          grid-template-rows: 1fr auto;
          `;
  var bigGreen = `
          grid-template-columns: 1fr auto;
          grid-template-rows:  auto 1fr;
          `;
  var bigRed = `
          grid-template-columns: auto 1fr;
          grid-template-rows: auto 1fr ;
          `;

  return (
    <div className="hero">
      <div className="container">
        <div className="navbar">
          <h3 className={styles.home}>
            <a href="home.html">HOME</a>
          </h3>
          <h3 className={styles.about}>
            <a href="about.html">ABOUT</a>
          </h3>
          {/* <h3 className={styles.web} onclick={resetGrid()}> */}
          <h3 className={styles.web}>WEB</h3>
          <h3 className={styles.photos}>
            <a href="photos.html">PHOTOS</a>
          </h3>
        </div>
        <div className={styles.gridContainer} id="gridContainer">
          <div
            className={`${styles.block} ${styles.b1}`}
            // onClick={expandColor("b1")}
            id="b1"
          >
            <i className="fa-solid fa-circle fa-xlg"></i>
          </div>
          <div
            className={`${styles.block} ${b2}`}
            // onClick={expandColor("b2")}
            id="b2"
          >
            <i className="fa-sharp fa-solid fa-slash fa-xlg"></i>
          </div>
          <div
            className={`${styles.block} ${b3}`}
            // onClick={expandColor("b3")}
            id="b3"
          >
            <i className="fa-solid fa-code fa-xlg"></i>
          </div>
          <div
            className={`${styles.block} ${b4}`}
            // onClick={expandColor("b4")}
            id="b4"
          >
            <i className="fa-solid fa-square-full fa-xlg"></i>
          </div>
        </div>
        <div className="footer">
          <h3>socials</h3>
          <h3>shop</h3>
          <h3>email</h3>
        </div>
      </div>
    </div>
  );
}
export default Web;
