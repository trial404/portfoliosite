import React from "react";
import "../../styles/desktop/main.css";
import styles from "../../styles/desktop/Photos.module.css";
function Photos() {
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
          <h3 className={styles.web}>
            <a href="web.html">WEB</a>
          </h3>
          <h3 className={styles.photos}>
            <a href="photos.html">PHOTOS</a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Photos;
