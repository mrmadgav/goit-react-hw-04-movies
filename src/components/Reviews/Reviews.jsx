import React from "react";
import { NavLink, Route } from "react-router-dom";
import ReviewContent from "../ReviewContent/ReviewContent";
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
      <Route
        path={`/movies/${id}/review`}
        component={(props) => <ReviewContent {...props} id={id} />}
      />
    </>
  );
};

export default Reviews;
