import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <>
      <h4>Congratulations your tag are now activated </h4>
      <Link to="/home" className="btn btn-outline-dark">
        BACK TO HOME
      </Link>
    </>
  );
};

export default SuccessPage;
