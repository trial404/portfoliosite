import React from "react";
import styles from "../../styles/mobile/FooterColor.module.css";

export default function FooterColor() {
  return (
    <div className={styles.line}>
      <div className={styles.color}></div>
      <div className={styles.color}></div>
      <div className={styles.color}></div>
      <div className={styles.color}></div>
    </div>
  );
}
