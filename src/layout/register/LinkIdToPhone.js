import React, { useRef, useState } from "react";
import {
  CountryCode,
  DailingCode,
  CountryCodeObject,
} from "../../store/LanguageList";
import { MDBBtn } from "mdb-react-ui-kit";
import style from "./RegistrationForm.module.css";
const LinkIdToPhone = (props) => {
  const [error, setError] = useState("");

  const [getDialingCode1, setDialingCode1] = useState(
    props.state.dialingCode1 || ""
  );
  const [getDialingCode2, setDialingCode2] = useState(
    props.state.dialingCode2 || ""
  );
  const [getDialingCode3, setDialingCode3] = useState(
    props.state.dialingCode3 || ""
  );

  const countryCode1Ref = useRef("");
  const countryCode2Ref = useRef("");
  const countryCode3Ref = useRef("");
  const dialingCode1Ref = useRef("");
  const dialingCode2Ref = useRef("");
  const dialingCode3Ref = useRef("");
  const phone1Ref = useRef("");
  const phone2Ref = useRef("");
  const phone3Ref = useRef("");

  const getDialingCode = (x) => {
    return DailingCode[x.toUpperCase()];
  };

  // This empty functin prevents warning thrown when value property is change in input field
  const inputOnchangeHandler = () => {};

  const setDialingCode1Handler = (e) => {
    setDialingCode1(getDialingCode(e.target.value));
  };

  const setDialingCode2Handler = (e) => {
    setDialingCode2(getDialingCode(e.target.value));
  };

  const setDialingCode3Handler = (e) => {
    setDialingCode3(getDialingCode(e.target.value));
  };

  const formAction = (action, pageNumber) => {
    const countryCode1 = countryCode1Ref.current?.value;
    const countryCode2 = countryCode2Ref.current?.value;
    const countryCode3 = countryCode3Ref.current?.value;
    const dialingCode1 = dialingCode1Ref.current?.value;
    const dialingCode2 = dialingCode2Ref.current?.value;
    const dialingCode3 = dialingCode3Ref.current?.value;
    const phone1 = phone1Ref.current?.value;
    const phone2 = phone2Ref.current?.value;
    const phone3 = phone3Ref.current?.value;

    if (
      (dialingCode1 && phone1) ||
      (dialingCode2 && phone2) ||
      (dialingCode3 && phone3)
    ) {
      const formData = {
        countryCode1,
        countryCode2,
        countryCode3,
        dialingCode1,
        dialingCode2,
        dialingCode3,
        phone1,
        phone2,
        phone3,
      };
      props.btnClicked(action, pageNumber, formData);
      setError("");
    } else {
      setError("You need to provide a valid contact details");
    }
  };
  return (
    <div>
      <p className={style.error}>{error}</p>
      <div>MOBILE 1</div>
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
      <div>MOBILE 2</div>
      <div className="d-xl-flex align-items-center mb-2">
        <div className="col-xl-5">
          <select
            className={style.option2}
            ref={countryCode2Ref}
            onChange={setDialingCode2Handler}
          >
            {props.state.countryCode2 ? (
              <option value={props.state.countryCode2}>
                {CountryCodeObject[props.state.countryCode2]}
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
            className={style.inputFieldThree}
            ref={dialingCode2Ref}
            onChange={inputOnchangeHandler}
            value={getDialingCode2}
          />
          <input
            type="text"
            name=""
            className={style.inputFieldFour}
            ref={phone2Ref}
            defaultValue={props.state.phone2}
          />
        </div>
      </div>
      <div>MOBILE 3</div>
      <div className="d-xl-flex align-items-center mb-2">
        <div className="col-xl-5">
          <select
            className={style.option2}
            ref={countryCode3Ref}
            onChange={setDialingCode3Handler}
          >
            {props.state.countryCode3 ? (
              <option value={props.state.countryCode3}>
                {CountryCodeObject[props.state.countryCode3]}
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
            className={style.inputFieldThree}
            ref={dialingCode3Ref}
            onChange={inputOnchangeHandler}
            value={getDialingCode3}
          />
          <input
            type="text"
            name=""
            className={style.inputFieldFour}
            ref={phone3Ref}
            defaultValue={props.state.phone3}
          />
        </div>
      </div>
      <div className="col-9 pe-5 my-4 d-flex justify-content-start">
        <MDBBtn outline className="me-3" onClick={() => formAction(0, 2)}>
          BACK
        </MDBBtn>
        <MDBBtn onClick={() => formAction(1, 2)}>NEXT</MDBBtn>
      </div>
    </div>
  );
};

export default LinkIdToPhone;
