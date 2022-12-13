import React, { useState } from "react";
import { CountryCode, DailingCode } from "../../store/LanguageList";

import style from "./PhoneField.module.css";

const PhoneField = (props) => {
  const [phoneExtention, setPhoneExtention] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const dialingCodeHandler = (e) => {
    setPhoneExtention((prev) => {
      const ext = DailingCode[e.target.value];
      props.payload({ phoneExtention: ext, phoneNumber });
      return ext;
    });
  };

  // This allows react to use value in input without throwing error everything the field changes
  const inputOnchangeHandler = () => {};

  const onPhoneFieldChangeHandler = (e) => {
    setPhoneNumber((prev) => {
      const _phoneNumber = e.target.value;
      props.payload({ phoneExtention, phoneNumber: _phoneNumber });
      return _phoneNumber;
    });
  };

  return (
    <div className="mb-2">
      {/* <div> */}
      <div>
        <select className={style.option2} onChange={dialingCodeHandler}>
          <option value="">Select Country</option>

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
          className={style.inputFieldThree}
          onChange={inputOnchangeHandler}
          value={phoneExtention}
          placeholder="+XXX"
        />
        <input
          type="text"
          className={style.inputFieldFour}
          onKeyUp={onPhoneFieldChangeHandler}
          placeholder="XXXXXXXXX"
        />
      </div>
      {/* </div> */}
    </div>
  );
};

export default PhoneField;
