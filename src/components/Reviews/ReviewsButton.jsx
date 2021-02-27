import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Reviews.module.css";

const Reviews = ({ id }) => {
  return (
    <>
      <p className={styles.reviewElem}>
        <NavLink
          to={`/movies/${id}/review`}
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
