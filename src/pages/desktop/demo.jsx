import React from "react";
import "../../styles/desktop/main.css";
import styles from "../../styles/desktop/Home.module.css";

function Demo() {
  return (
    <div className="App">
      <div className="hero">
        <div className={`container ${styles.home}`}>
          <div className={`navbar ${styles.home}`}>
            <h3 className={styles.navHome}>
              <a href="home.html">HOME</a>
            </h3>

            <div className={styles.menu}>
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
      </div>
    </div>
  );
}

export default Demo;
