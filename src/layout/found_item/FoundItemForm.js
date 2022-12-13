import React, { useState } from "react";
import axios from "axios";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import Confirmation from "./Confirmation";
import SuccessPage from "./SuccessPage";
import { FOUND_ITEM_ENDPOINT } from "../../API_endpoints";

const FoundItemForm = () => {
  const [state, setState] = useState({ currentForm: 1 });

  const btnClicked = (action = 1, formPosition = 1, formData = {}) => {
    let pst = formPosition;
    // action 0 - back and 1 - next
    action === 1 ? (pst += 1) : (pst -= 1);
    setState((prev) => {
      return { ...prev, currentForm: pst, ...formData };
    });
    if (pst === 4) {
      // Call submit form API
      axios
        .post(FOUND_ITEM_ENDPOINT, {
          phone_number: `${state.dialingCode1}${state.phone1}`,
          tag_id: `${state.code}${state.digit1}${state.digit2}`,
          languageCode: state.languageCode,
          language: state.language,
          message: state.message,
        })
        .then((response) => {
          console.log(response);
          const responseData = response.data.data;
          if (responseData.status !== 200) {
            setState((prev) => {
              return { ...prev, currentForm: 3, error: responseData.msg };
            });
          } else {
            setState((prev) => {
              return { ...prev, currentForm: pst };
            });
          }
        });
    }
  };

  const formContainer = {
    1: <PageOne btnClicked={btnClicked} state={state} />,
    2: <PageTwo btnClicked={btnClicked} state={state} />,
    3: <Confirmation btnClicked={btnClicked} state={state} />,
    4: <SuccessPage />,
  };
  return formContainer[state.currentForm];
};

export default FoundItemForm;
