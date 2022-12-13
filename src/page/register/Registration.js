import React from "react";
import RegistrationForm from "../../layout/register/RegistrationForm";

const Registration = (props) => {
  return (
    <>
      <div className="d-md-flex">
        <div className="col-12 col-md-6">
          <img
            src="https://www.esmartcode.com/wp-content/uploads/2014/05/tags-1-1.jpg"
            width="100%"
          />
        </div>
        <div className="col-12 col-md-6 px-5">
          <h3 className="mt-4 mb-5">Register your code</h3>
          <RegistrationForm />
        </div>
      </div>
    </>
  );
};
export default Registration;
