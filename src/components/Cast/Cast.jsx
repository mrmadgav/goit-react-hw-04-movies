import React from "react";
import { Route } from "react-router-dom";
import CastContent from "../CastContent/CastContent";

const Cast = ({ id }) => {
  return (
    <>
      <Route
        path={`/movies/${id}/cast`}
        component={(props) => <CastContent {...props} id={id} />}
      />
    </>
  );
};

export default Cast;
