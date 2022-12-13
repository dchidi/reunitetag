import React, { useRef, useState } from "react";
import {
  CountryCode,
  DailingCode,
  CountryCodeObject,
} from "../../store/LanguageList";
import { MDBBtn } from "mdb-react-ui-kit";
import style from "./RegistrationForm.module.css";
const PageTwo = (props) => {
  const [error, setError] = useState("");
  const [counter, setCounter] = useState(160);

  const [getDialingCode1, setDialingCode1] = useState(
    props.state.dialingCode1 || ""
  );

  const countryCode1Ref = useRef("");
  const messageRef = useRef("");
  const dialingCode1Ref = useRef("");
  const phone1Ref = useRef("");

  const getDialingCode = (x) => {
    return DailingCode[x.toUpperCase()];
  };

  // This empty functin prevents warning thrown when value property is change in input field
  const inputOnchangeHandler = () => {};

  const setDialingCode1Handler = (e) => {
    setDialingCode1(getDialingCode(e.target.value));
  };

  const formAction = (action, pageNumber) => {
    const countryCode1 = countryCode1Ref.current?.value;
    const dialingCode1 = dialingCode1Ref.current?.value;
    const phone1 = phone1Ref.current?.value;
    const message = messageRef.current?.value;

    if (dialingCode1 && phone1) {
      const formData = {
        countryCode1,
        dialingCode1,
        phone1,
        message,
      };
      props.btnClicked(action, pageNumber, formData);
      setError("");
    } else {
      setError("You need to provide a valid contact details");
    }
  };

  const countTextAreaHandler = (e) => {
    const textLength = e.target.value.length;
    if (textLength > 160)
      setError(
        (prev) => "Max characters allowed for message is 160 characters"
      );
    else setCounter((prev) => 160 - textLength);
  };

  return (
    <div>
      <p className={style.error}>{error}</p>

      <div>
        <textarea
          rows="3"
          className={style.textarea}
          ref={messageRef}
          onKeyDown={countTextAreaHandler}
          maxLength="160"
          defaultValue={props.state.message || ""}
          placeholder="Enter message"
        ></textarea>
        <p className="mt-n4">{counter} characters left</p>
      </div>
      <div className="d-xl-flex align-items-center mb-2">
        <div className="col-xl-5">
          <select
            className={style.option2}
            ref={countryCode1Ref}
            onChange={setDialingCode1Handler}
          >
            {props.state.countryCode1 ? (
              <option value={props.state.countryCode1}>
                {CountryCodeObject[props.state.countryCode1]}
              </option>
            ) : (
              <option value="">Select Country</option>
            )}
            {CountryCode.map((x) => (
              <option value={x.countryCode} key={x.countryCode}>
                {x.countryName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="text"
            name=""
            id="dialingCode1"
            className={style.inputFieldThree}
            ref={dialingCode1Ref}
            onChange={inputOnchangeHandler}
            value={getDialingCode1}
          />
          <input
            type="text"
            name=""
            className={style.inputFieldFour}
            ref={phone1Ref}
            defaultValue={props.state.phone1}
          />
        </div>
      </div>

      <div className="col-9 pe-5 mt-3 d-flex justify-content-start">
        <MDBBtn outline className="me-2" onClick={() => formAction(0, 2)}>
          BACK
        </MDBBtn>
        <MDBBtn onClick={() => formAction(1, 2)}>NEXT</MDBBtn>
      </div>
    </div>
  );
};

export default PageTwo;
