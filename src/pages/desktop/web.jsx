import React, { useState } from "react";
import "../../styles/desktop/main.css";
import styles from "../../styles/desktop/Web.module.css";
import { GridContainer } from "../../components/GridContainer";
import ProjectsArchive from "../../components/ProjectsArchive";
import { toggleState } from "../../hooks/toggleState";
import { Footer } from "../../components/footer";
import FooterColor from "../../components/mobile/FooterColor";

function Web() {
  const [activePage, setPage] = useState(true);

  function handleClick() {
    let updateState = toggleState(activePage);
    setPage(updateState);
  }

  return (
    <>
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
            <h3 className={styles.photos}>
              <a href="photos.html">PHOTOS</a>
            </h3>
          </div>

          <div className="contentContainer">
            {activePage ? (
              <div className={styles.content} id="main">
                <GridContainer />

                <div className={styles.pageTab} style={{ marginTop: "2rem" }}>
                  <p style={{ borderBottom: "1px solid black" }}>
                    <strong>main</strong>
                  </p>
                  <span>
                    <i class="fa-solid fa-arrow-down"></i>
                  </span>
                  <p onClick={handleClick} style={{ cursor: "pointer" }}>
                    archive
                  </p>
                </div>
              </div>
            ) : (
              <div className={styles.content} id="archive">
                <div className={styles.projectArchiveContainer}>
                  <ProjectsArchive />
                </div>

                <div className={styles.pageTab} style={{ marginTop: "2rem" }}>
                  <p onClick={handleClick} style={{ cursor: "pointer" }}>
                    main
                  </p>
                  <span>
                    <i class="fa-solid fa-arrow-up"></i>
                  </span>
                  <p style={{ borderBottom: "1px solid black" }}>
                    <strong>archive</strong>
                  </p>
                </div>
              </div>
            )}
          </div>
          <Footer />
          <div className="footerLine">
            <FooterColor />
          </div>
        </div>
      </div>
    </>
  );
}
export default Web;
