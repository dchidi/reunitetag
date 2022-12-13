import React, { useRef, useState } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import style from "./Contact.module.css";
import { validatePhone, validateEmail, validateText } from "../../helpers";
import axios from "axios";

const Contact = (props) => {
  const [errorMsg, setErrorMsg] = useState({
    phone: "",
    email: "",
    lname: "",
    fname: "",
    msg: "",
  });
  const [submitMsg, setSubmitMsg] = useState(null);

  const fnameRef = useRef();
  const lnameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const msgRef = useRef();

  // scroll to contact form section. TODO:: Not working properly yet
  const el = document.getElementById("contact");
  // console.log(el, props.subpage);
  if (props.subpage !== undefined && el) {
    el.scrollIntoView();
  }

  const contactFormHandler = () => {
    // validate user input
    const fname = fnameRef.current?.value;
    const lname = lnameRef.current?.value;
    const phone = phoneRef.current?.value;
    const email = emailRef.current?.value;
    const msg = msgRef.current?.value;

    // validate fname
    const validateFname = () => {
      var status = false;
      if (fname) {
        setErrorMsg((prev) => {
          return {
            ...prev,
            fname: "",
          };
        });
        status = true;
      } else {
        // Fullname field is required
        setErrorMsg((prev) => {
          return {
            ...prev,
            fname: "Firstname field is required",
          };
        });
      }
      return status;
    };

    // validate lname
    const validateLname = () => {
      var status = false;
      if (lname) {
        setErrorMsg((prev) => {
          return {
            ...prev,
            lname: "",
          };
        });
        status = true;
      } else {
        // Fullname field is required
        setErrorMsg((prev) => {
          return {
            ...prev,
            lname: "Lastname field is required",
          };
        });
      }
      return status;
    };

    // validate msg
    const validateMsg = () => {
      var status = false;
      if (msg) {
        setErrorMsg((prev) => {
          return {
            ...prev,
            msg: "",
          };
        });
        status = true;
      } else {
        // Fullname field is required
        setErrorMsg((prev) => {
          return {
            ...prev,
            msg: "Message field is required",
          };
        });
      }
      return status;
    };

    // validate email
    const validateEmail = () => {
      var status = false;
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (email) {
        if (email.match(mailformat)) {
          setErrorMsg((prev) => {
            return {
              ...prev,
              email: "",
            };
          });
          status = true;
        } else {
          // Invalid email format
          setErrorMsg((prev) => {
            return {
              ...prev,
              email: "Invalid email format",
            };
          });
        }
      } else {
        // Email is required
        setErrorMsg((prev) => {
          return {
            ...prev,
            email: "Email is required",
          };
        });
      }
      return status;
    };

    // validate phone
    const validatePhone = () => {
      var status;
      if (phone) {
        if (phone.length >= 5 && phone.length <= 20) {
          setErrorMsg((prev) => {
            return {
              ...prev,
              phone: "",
            };
          });
          status = true;
        } else {
          // phone should be at least 4 characters long
          setErrorMsg((prev) => {
            return {
              ...prev,
              phone: "Invalid phone length. (min 9 & max 15)",
            };
          });
        }
      } else {
        // phone is required
        setErrorMsg((prev) => {
          return {
            ...prev,
            phone: "phone is required",
          };
        });
      }
      return status;
    };

    // Save form value into an object
    const data = {
      phone,
      email,
      name: `${fname} ${lname}`,
      message: msg,
    };

    // Call form validation methods
    const isEmailValid = validateEmail();
    const isFnameValid = validateFname();
    const isphoneValid = validatePhone();
    const isLnameValid = validateLname();
    const isMsgValid = validateMsg();

    // Check if all fields passed the validation parameters
    if (
      isEmailValid &&
      isFnameValid &&
      isphoneValid &&
      isLnameValid &&
      isMsgValid
    ) {
      // save data into DB
      axios.post("http://127.0.0.1:5000/send_mail", data).then((response) => {
        console.log(response);
        if (response.data.data.status === 200) {
          // clear form
          fnameRef.current.value = "";
          lnameRef.current.value = "";
          phoneRef.current.value = "";
          emailRef.current.value = "";
          msgRef.current.value = "";
        }
        // prompt error message
        setSubmitMsg(response.data.data.msg);
        alert(submitMsg);
      });
    }
  };

  return (
    <div className={`pt-5 d-flex justify-content-center ${style.contact}`}>
      <div className="col-md-5 text-center" id="contact">
        <h2 className={style.contactHeading}>Get In Touch</h2>
        <p className="mb-5">Please contact us here</p>
        {/* <form> */}
        <MDBRow className="mb-4">
          <div className="col-12 col-md-6 mb-4">
            <input
              type="text"
              className={`col-12 me-5 ${style.contactField}`}
              placeholder="First name"
              ref={fnameRef}
            />
            {errorMsg.fname && (
              <div className={style.error}>{errorMsg.fname}</div>
            )}
          </div>
          <div className="col-12 col-md-6">
            <input
              type="text"
              className={`col-12 ${style.contactField}`}
              placeholder="Last name"
              ref={lnameRef}
            />
            {errorMsg.lname && (
              <div className={style.error}>{errorMsg.lname}</div>
            )}
          </div>
        </MDBRow>
        <MDBRow className="mb-4">
          <div className="col-12 col-md-6 mb-4">
            <input
              type="text"
              className={`col-12 me-5 ${style.contactField}`}
              placeholder="Phone"
              ref={phoneRef}
            />
            {errorMsg.phone && (
              <div className={style.error}>{errorMsg.phone}</div>
            )}
          </div>
          <div className="col-12 col-md-6">
            <input
              type="text"
              className={`col-12 me-5 ${style.contactField}`}
              placeholder="Email"
              ref={emailRef}
            />
            {errorMsg.email && (
              <div className={style.error}>{errorMsg.email}</div>
            )}
          </div>
        </MDBRow>

        <MDBRow className="mb-4">
          <MDBCol>
            <textarea
              rows="4"
              className={`col-12 ${style.contactTextArea}`}
              placeholder="Message"
              ref={msgRef}
            ></textarea>
            {errorMsg.msg && <div className={style.error}>{errorMsg.msg}</div>}
          </MDBCol>
        </MDBRow>

        <MDBBtn
          type="submit"
          block
          className={style.contactBtn}
          onClick={contactFormHandler}
        >
          SUBMIT
        </MDBBtn>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Contact;
