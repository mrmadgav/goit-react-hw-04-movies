import React from "react";
import styles from "./BackBtn.module.css";

export default function BackBtn({ handleGoBack }) {
  return <button className={styles.BackBtn} onClick={handleGoBack}></button>;
}
