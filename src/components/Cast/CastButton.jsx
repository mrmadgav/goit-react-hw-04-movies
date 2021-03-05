import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Cast.module.css";

const CastButton = ({ id, location }) => { 
  return (
    <>
      <p className={styles.castElem}>
        <NavLink
          to={{
            pathname: `/movies/${id}/cast`,
            state: { from: location },
          }}
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
