import React from "react";
import { NavLink, Route } from "react-router-dom";
import CastContent from "../CastContent/CastContent";
import styles from "./Cast.module.css";

const Cast = ({ id }) => {
  return (
    <>
      <p className={styles.castElem}>
        <NavLink
          to={`/movies/${id}/cast`}
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
        >
          Cast
        </NavLink>
      </p>
      <Route
        path={`/movies/${id}/cast`}
        component={(props) => <CastContent {...props} id={id} />}
      />
    </>
  );
};

export default Cast;
