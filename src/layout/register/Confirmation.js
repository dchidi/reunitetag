import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import style from "./RegistrationForm.module.css";

const Confirmation = (props) => {
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState(props.state.error);
  // console.log(props);
  const termsHandler = (e) => {
    if (e.target.checked) {
      setTerms(true);
    } else {
      setTerms(false);
    }
  };

  const formAction = (action, pageNumber) => {
    if (terms) {
      // if (!props.state.error) {
      const formData = {
        terms_conditions: terms,
      };
      props.btnClicked(action, pageNumber, formData);
      setError((prev) => "");
      // } else {
      //   setError((prev) => props.state.error);
      // }
    } else {
      setError((prev) => "Please agree to our terms by ticking the box");
    }
  };

  return (
    <div>
      <p className={style.error}>{error}</p>
      <p>
        <strong>ID# :</strong>
        {`${props.state.code.toUpperCase()}-${props.state.digit1}-${
          props.state.digit2
        }`}
      </p>
      <p>
        <strong>Telephone Number 1 :</strong>
        {`${props.state.dialingCode1}${props.state.phone1}`}
      </p>
      <p>
        <strong>Telephone Number 2 :</strong>
        {`${props.state.dialingCode2}${props.state.phone2}`}
      </p>
      <p>
        <strong>Telephone Number 3 :</strong>
        {`${props.state.dialingCode3}${props.state.phone3}`}
      </p>
      <input type="checkbox" onChange={termsHandler} defaultValue={terms} /> I
      accept the <Link to="">Terms and Conditions</Link>
      <div className="col-9 pe-5 my-3 d-flex justify-content-end">
        <MDBBtn outline className="me-3" onClick={() => props.btnClicked(0, 3)}>
          BACK
        </MDBBtn>
        <MDBBtn onClick={() => formAction(1, 3)}>REGISTER</MDBBtn>
      </div>
      <p>
        NOTE: Once you register your ID tags against a mobile number this cannot
        be changed.
      </p>
      <p>A complete secure global retrieval process!</p>
    </div>
  );
};

export default Confirmation;
