import React from "react";
import "../../styles/mobile/main.css";
import styles from "../../styles/mobile/About.module.css";
import colorIMG from "../../images/colorsGrouping.svg";
import aboutPhoto from "../../images/about.png";
import FooterColor from "../../components/mobile/FooterColor.jsx";

function MobileAbout() {
  return (
    <div className="main">
      <div className="containerM">
        <div className="headerContainer">
          <div className="header">
            <h1 className="headerText">ABOUT</h1>
          </div>
          <hr className="primaryHR" />
          <hr className="secondaryHR" />
          <hr className="primaryHR" />
          <div className="skew"></div>
        </div>
        <img src={colorIMG} className="backgroundImg" alt="" />
        <div className="content">
          <h1 className={styles.introHeader}>Hi,I'm David.👋</h1>
          <img src={aboutPhoto} alt="photo-of-me" />
          <h3 clawwssName={styles.introSubHeader}>Heres a bit about me..</h3>
          <div className={styles.introPara}>
            <p>
              I'm an aerospace manufacturing engineer turn developer. I love to
              learn and master new skills.{" "}
            </p>

            <p>
              Welcome to my portofolio site showcasing the things I've been
              working on. You can get in touch with me through any of the links
              below with my socials or email.
            </p>
          </div>
        </div>
        <div className="mobileFooter">
          <FooterColor />
        </div>
      </div>
    </div>
  );
}

export default MobileAbout;
