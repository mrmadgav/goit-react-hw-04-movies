import React from "react";
import { Route } from "react-router-dom";
import ReviewContent from "../ReviewContent/ReviewContent";

const Reviews = ({ id }) => {
  return (
    <>
      <Route
        path={`/movies/${id}/review`}
        component={(props) => <ReviewContent {...props} id={id} />}
      />
    </>
  );
};

export default Reviews;
