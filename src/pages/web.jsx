import React, { useState } from "react";
import "../styles/main.css";
import styles from "../styles/web.module.css";
import { GridContainer } from "../components/GridContainer";
import ProjectsArchive from "../components/ProjectsArchive";
import { toggleState } from "../hooks/toggleState";

function Web() {
  const [activePage, setPage] = useState(true);

  function handleClick() {
    let updateState = toggleState(activePage);
    setPage(updateState);
  }

  return (
    <>
      {activePage ? (
        <div className="hero" id="main">
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
            <div className={styles.pageTab}>
              <p>
                <strong>main</strong>
              </p>
              <span style={{ width: "20px" }}></span>
              <p onClick={handleClick} style={{ cursor: "pointer" }}>
                archive
              </p>
            </div>
            <div className="footer">
              <h3>socials</h3>
              <h3>shop</h3>
              <h3>email</h3>
            </div>
          </div>
        </div>
      ) : (
        <div className="hero" id="archive">
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
            <div className={styles.projectArchiveContainer}>
              <ProjectsArchive />
            </div>
            <div className={styles.pageTab}>
              <p onClick={handleClick} style={{ cursor: "pointer" }}>
                main
              </p>
              <span style={{ width: "20px" }}></span>
              <p>
                <strong>archive</strong>
              </p>
            </div>
            <div className="footer">
              <h3>socials</h3>
              <h3>shop</h3>
              <h3>email</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Web;
