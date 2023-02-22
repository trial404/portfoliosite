import React, { useState } from "react";
import "../styles/main.css";
import styles from "../styles/web.module.css";
import { GridContainer } from "../components/GridContainer";

function Web() {
  return (
    <div className="hero">
      <div className="container">
        <div className="navbar">
          <h3 className={styles.home}>
            <a href="">HOME</a>
          </h3>
          <h3 className={styles.about}>
            <a href="about.html">ABOUT</a>
          </h3>
          <h3 className={styles.web}>WEB</h3>
          {/* <h3 className={styles.web}>WEB</h3> */}
          <h3 className={styles.photos}>
            <a href="photos.html">PHOTOS</a>
          </h3>
        </div>
        <GridContainer />
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
