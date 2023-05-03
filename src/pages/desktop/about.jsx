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
            <div className="contentContainer">
              <h1 className={styles.introHeader}>Hi,I'm David.👋</h1>
              <img src={aboutPhoto} alt="photo-of-me" />
              <h3 clawwssName={styles.introSubHeader}>
                Heres a bit about me..
              </h3>
              <div className={styles.aboutText}>
                <p>
                  I'm an aerospace manufacturing engineer turn developer. I love
                  to learn and master new skills.
                </p>
                <p>
                  Welcome to my portofolio site showcasing the things I've been
                  working on. You can get in touch with me through any of the
                  links below with my socials or email.
                </p>
              </div>
            </div>
            <Footer />
          </div>
        </div>
        <div className="footerLine">
          <FooterColor />
        </div>
      </div>
    </div>
  );
}
export default About;
