import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Cast.module.css";

const CastButton = ({ id }) => {
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
    </>
  );
};

export default CastButton;