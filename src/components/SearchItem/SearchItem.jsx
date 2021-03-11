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
          <div className={styles.searchItemWrapper}>
            <NavLink
              to={{
                pathname: `/movies/${item.id}`,
                state: {
                  from: `${this.props.from}`,
                },
              }}
              className={styles.NavLink}
              activeClassName={styles.NavLinkActive}             
            >
              {item.title}
              <p>Release Date:</p>
              <p> {item.release_date}</p>
              <p
                className={styles.filmScore}
                style={
                  Number(item.vote_average) > 5
                    ? { backgroundColor: "coral" }
                    : { backgroundColor: "#355681" }
                }
              >
                {item.vote_average}
              </p>
            </NavLink>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt=""
              className={styles.searchPreviewItem}
            ></img>
          </div>
        </li>
        <Route
          path={`/movies/${item.id}`}
          component={(props) => <FilmPage {...props} id={item.id} />}
        />
      </>
    );
  }
}
