import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Reviews.module.css";

const Reviews = ({ id, location }) => {
  return (
    <>
      <p className={styles.reviewElem}>
        <NavLink
       to={{
        pathname: `/movies/${id}/review`,
        state: { from: location },
      }}
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
        >
          Reviews
        </NavLink>
      </p>
    </>
  );
};

export default Reviews;
