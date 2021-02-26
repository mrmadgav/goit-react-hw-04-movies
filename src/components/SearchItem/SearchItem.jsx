import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import FilmPage from "../../views/FilmPage/FimlPage";
import styles from "./SearchItem.module.css";

export default class SearchItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <>
        <li id={item.id} className={styles.SearchItem}>
          <NavLink
            to={`/movies/${item.id}`}
            className={styles.NavLink}
            activeClassName={styles.NavLinkActive}
          >
            {item.title}
          </NavLink>
        </li>
        <Route
          path={`/movies/${item.id}`}
          component={(props) => <FilmPage {...props} id={item.id} />}
        />
      </>
    );
  }
}
