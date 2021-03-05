import React from "react";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import { Route, NavLink, Switch } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView";
import SearchMoviesForm from "./views/SearchMoviesForm/SearchMoviesForm";
import FilmPage from "./views/FilmPage/FimlPage.jsx";
import styles from "./App.module.css";
import Section from "./components/Section/Section";

const App = () => {
  return (
    <>
      <ul className={styles.header}>
        <li className={styles.navLink}>
          <NavLink
            exact
            to="/"
            className={styles.NavLink}
            activeClassName={styles.NavLinkActive}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navLink}>
          <NavLink
            exact
            to="/movies"
            className={styles.NavLink}
            activeClassName={styles.NavLinkActive}
          >
            Movies
          </NavLink>
        </li>
      </ul>
      <Section>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/movies/:filmId" component={FilmPage} />
          <Route
            path="/movies/"
            strict={false}
            exact={false}
            component={SearchMoviesForm}
          />
          <Route component={HomeView} />
        </Switch>
      </Section>
    </>
  );
};
export default App;
