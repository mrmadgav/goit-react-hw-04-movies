import React, { Component } from "react";
import styles from "./CastModal.module.css";

export default class CastModal extends Component {
  state = {};
  render() {
    return (
      // <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <img className={styles.CastModalImg}
            src={`https://image.tmdb.org/t/p/w500${this.props.currentCastPerson.profile_path}`}
            alt=""
          />
        </div>
      // </div>
    );
  }
}
