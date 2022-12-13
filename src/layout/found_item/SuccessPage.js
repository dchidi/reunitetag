import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <>
      <h4>Message sent to item owner</h4>
      <Link to="/home" className="btn btn-outline-dark">
        BACK TO HOME
      </Link>
    </>
  );
};

export default SuccessPage;
