import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import style from "./RegistrationForm.module.css";

const Confirmation = (props) => {
  const [error, setError] = useState(props.state.error);

  const formAction = (action, pageNumber) => {
    const formData = {};
    props.btnClicked(action, pageNumber, formData);
    setError((prev) => "");
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
        <strong>Message :</strong>
        {`${props.state.message}`}
      </p>

      <div className="col-9 pe-5 mt-3 d-flex justify-content-start pb-4">
        <MDBBtn outline className="me-2" onClick={() => props.btnClicked(0, 3)}>
          BACK
        </MDBBtn>
        <MDBBtn onClick={() => formAction(1, 3)}>SEND</MDBBtn>
      </div>
      <p className="py-4">
        NOTE: Sending message is free of charges <br />A complete secure global
        retrieval process!
      </p>
    </div>
  );
};

export default Confirmation;
