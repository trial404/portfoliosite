import React from "react";
import styles from "../../styles/desktop/About.module.css";

// import PageContainer from "../../components/PageContainer";
import "../../styles/desktop/main.css";
import aboutPhoto from "../../images/about.png";
import { Footer } from "../../components/footer";
import FooterColor from "../../components/mobile/FooterColor";

function About() {
  return (
    <div className="hero">
      <div className="container">
        <div className={styles.containerWeb}>
          <div className={styles.aboutContainer}>
            <div className={`${styles.navbar} navbar`}>
              <h3 className={`${styles.home}`}>
                <a href="">HOME</a>
              </h3>
              <h3 className={`${styles.about}`}>
                <a href="">ABOUT</a>
              </h3>
              <h3 className={`${styles.web}`}>
                <a href="">WEB</a>
              </h3>
              <h3 className={`${styles.photos}`}>
                <a href="">PHOTOS</a>
              </h3>
              ''
            </div>
            <div className={styles.aboutParent}>
              <div className={styles.aboutcol1}>
                <img src={aboutPhoto} alt="colors" />
                <div className={styles.aboutText}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Bibendum arcu vitae elementum curabitur vitae nunc
                    sed velit dignissim.
                  </p>
                  <p>
                    vitae nunc sed velit dignissim, consectetur adipiscing elit,
                    sed do eiusmod tempor etur adipiscing el incididunt ut
                    labore et dolore magna aliqua. Bibendum arcusmod tempor
                    incididunt vitae nunc sed velit dignissim.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Bibendum arcu.
                  </p>
                </div>
              </div>
              {/* <div className={styles.aboutcol2}></div> */}
            </div>
            <Footer />
          </div>
          {/* <div className={styles.borderCol}>
            <div className={styles.blue}></div>
            <div className={styles.yellow}></div>
            <div className={styles.green}></div>
            <div className={styles.red}></div>
          </div> */}
        </div>
        <div className="footerLine">
          <FooterColor />
        </div>
      </div>
    </div>
  );
}
export default About;
