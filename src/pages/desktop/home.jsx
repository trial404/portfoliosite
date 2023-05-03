import React from "react";
import "../../styles/desktop/main.css";
import styles from "../../styles/desktop/Home.module.css";

function Home() {
  return (
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
        <div className={styles.homeContent}>
          <div className={styles.upperSection}>
            <h1 className={styles.centerbox}>create</h1>
          </div>
          <div className={styles.lowerSection}>
            <div className={styles.colHeader}>
              <h1>DAVID ROSE</h1>
            </div>
            <div class={styles.colDesc}>
              <p>
                This defines the ability for a flex item to grow if necessary.
                It accepts a unitless value that serves as a proportion. It
                dictates what amount of the available space inside the flex
                container the item should take up.
              </p>

              <p>
                If all items have flex-grow set to 1, the remaining space in the
                container will be distributed equally to all children. If one of
                the children ha
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
