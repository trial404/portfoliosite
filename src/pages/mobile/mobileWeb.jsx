import React from "react";
import "../../styles/mobile/main.css";
// import styles from "../../styles/mobile/About.module.css";
import FooterColor from "../../components/mobile/FooterColor.jsx";
import colorIMG from "../../images/colorsGrouping.svg";

function MobileWeb() {
  return (
    <div className="main">
      <div className="containerM">
        <div className="headerContainer" style={{ backgroundColor: "#4ecb71" }}>
          <div className="header">
            <h1 className="headerText">Web</h1>
          </div>
          <div className="skew"></div>
        </div>
        <img src={colorIMG} className="backgroundImg" alt="" />
        <div className="content">
          <p>content goes here</p>
        </div>
        <div className="mobileFooter">
          <FooterColor />
        </div>
      </div>
    </div>
  );
}

export default MobileWeb;
