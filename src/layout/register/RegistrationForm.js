import React, { useState } from "react";
import axios from "axios";
import CaptureID from "./CaptureID";
import LinkIdToPhone from "./LinkIdToPhone";
import Confirmation from "./Confirmation";
import SuccessPage from "./SuccessPage";
import { REGISTER_TAG_ENDPOINT } from "../../API_endpoints";

const RegistrationForm = () => {
  const [state, setState] = useState({ currentForm: 1 });

  const btnClicked = (action = 1, formPosition = 1, formData = {}) => {
    let pst = formPosition;
    // action 0 - back and 1 - next
    action === 1 ? (pst += 1) : (pst -= 1);
    setState((prev) => {
      return { ...prev, currentForm: pst, ...formData };
    });
    if (pst === 4) {
      const phones = [];
      // validate phone input
      if (state.phone1)
        phones.push({
          phone_number: `${state.dialingCode1}${state.phone1}`,
          countryCode: state.countryCode1,
        });
      if (state.phone2)
        phones.push({
          phone_number: `${state.dialingCode2}${state.phone2}`,
          countryCode: state.countryCode2,
        });
      if (state.phone3)
        phones.push({
          phone_number: `${state.dialingCode3}${state.phone3}`,
          countryCode: state.countryCode3,
        });

      // Call submit form API
      axios
        .post(REGISTER_TAG_ENDPOINT, {
          phones,
          tag: `${state.code}${state.digit1}${state.digit2}`,
          languageCode: state.languageCode,
          language: state.language,
        })
        .then((response) => {
          console.log(response);
          const responseData = response.data.data;
          if (responseData.status !== 201) {
            setState((prev) => {
              return { ...prev, currentForm: 3, error: responseData.msg };
            });
          } else {
            setState((prev) => {
              return { ...prev, currentForm: pst };
            });
          }
        });

      // CLEAR state on successful API call
      // setState({
      //   currentForm: 3,
      // });
    }
  };

  const formContainer = {
    1: <CaptureID btnClicked={btnClicked} state={state} />,
    2: <LinkIdToPhone btnClicked={btnClicked} state={state} />,
    3: <Confirmation btnClicked={btnClicked} state={state} />,
    4: <SuccessPage />,
  };
  return formContainer[state.currentForm];
};

export default RegistrationForm;
