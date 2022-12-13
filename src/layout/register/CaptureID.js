import React, { useRef, useState } from "react";
import { LANGUAGES, LanguageObject } from "../../store/LanguageList";
import { MDBBtn } from "mdb-react-ui-kit";
import style from "./RegistrationForm.module.css";
const CaptureID = (props) => {
  const [error, setError] = useState("");
  const code1Ref = useRef("");
  const code2Ref = useRef("");
  const code3Ref = useRef("");
  const languageRef = useRef("");
  const reCode1Ref = useRef("");
  const reCode2Ref = useRef("");
  const reCode3Ref = useRef("");

  const formAction = () => {
    const code = code1Ref.current?.value;
    const digit1 = code2Ref.current?.value;
    const digit2 = code3Ref.current?.value;
    const languageCode = languageRef.current?.value;
    const rcode = reCode1Ref.current?.value;
    const rdigit1 = reCode2Ref.current?.value;
    const rdigit2 = reCode3Ref.current?.value;

    if (languageCode && code && digit1 && digit2) {
      if (code === rcode && digit1 === rdigit1 && digit2 === rdigit2) {
        const formData = {
          code,
          digit1,
          digit2,
          languageCode,
          language: LanguageObject[languageCode],
        };
        // TODO:: call API to verify reg_number submitted before triggering btnClicked
        props.btnClicked(1, 1, formData);
        setError("");
      } else {
        setError("CODE did not match");
        // console.log("CODE did not match");
      }
    } else {
      setError("All fields are requried");
    }
  };

  return (
    <div>
      <p className={style.error}>{error}</p>
      <select className={style.option} ref={languageRef}>
        {props.state.languageCode ? (
          <option value={props.state.languageCode}>
            {props.state.language}
          </option>
        ) : (
          <option value="">Select Language</option>
        )}
        {LANGUAGES.map((x) => (
          <option value={x.code} key={x.code}>
            {x.lang}
          </option>
        ))}
      </select>
      <div className="d-lg-flex align-items-center">
        <label className={`col-12 col-lg-3 col-xl-2 ${style.label}`}>
          Enter ID#
        </label>
        <div className="col-12 col-lg-9 col-xl-10">
          <input
            type="text"
            name=""
            className={style.inputFieldOne}
            maxLength="2"
            ref={code1Ref}
            defaultValue={props.state.code}
          />
          <input
            type="text"
            name=""
            className={style.inputFieldTwo}
            maxLength="4"
            ref={code2Ref}
            defaultValue={props.state.digit1}
          />
          <input
            type="text"
            name=""
            className={style.inputFieldTwo}
            maxLength="4"
            ref={code3Ref}
            defaultValue={props.state.digit2}
          />
        </div>
      </div>
      <div className="d-lg-flex align-items-center">
        <label className={`col-12 col-lg-3 col-xl-2 ${style.label}`}>
          Confirm ID#
        </label>
        <div className="col-12 col-lg-9 ps-xl-3 col-xl-10">
          <input
            type="text"
            name=""
            className={style.inputFieldOne}
            maxLength="2"
            ref={reCode1Ref}
            defaultValue={props.state.code}
          />
          <input
            type="text"
            name=""
            className={style.inputFieldTwo}
            maxLength="4"
            ref={reCode2Ref}
            defaultValue={props.state.digit1}
          />
          <input
            type="text"
            name=""
            className={style.inputFieldTwo}
            maxLength="4"
            ref={reCode3Ref}
            defaultValue={props.state.digit2}
          />
        </div>
      </div>
      <div className="col-12 col-sm-9 pe-5 mt-3 pb-5">
        <MDBBtn className="" onClick={formAction}>
          NEXT
        </MDBBtn>
      </div>
    </div>
  );
};

export default CaptureID;
