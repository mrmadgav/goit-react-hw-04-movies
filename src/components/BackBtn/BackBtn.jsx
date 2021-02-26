import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./BackBtn.module.css";

export default class BackBtn extends Component {
  //   static contextTypes = {
  //     router: () => true,
  //   };
  componentDidMount() {
    console.log(this.props.props.history.location.pathname); // врёт
  }
  render() {
    return (
      <>
        <button
          className={styles.BackBtn}
          // onClick={this.props.history.push("/")}
        >
          <Link to={`/`}>Назад, блядь</Link>
        </button>
        {/* <Route path={`${this.props.history.location.pathname}`} /> */}
        {/* Какой компонент рендерить? */}
      </>
    );
  }
}
