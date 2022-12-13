import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MDBCard, MDBCardBody, MDBCardText } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import AppContext from "../context/AppContext.js";
import axios from "axios";
import Footer from "../layout/home/Footer.js";
import { clearCart } from "../store/features/cart_slice.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import style from "./Success.module.css";

const SuccessPage = (props) => {
  const dispatch = useDispatch();
  const phone = useSelector((store) => store.cart.phone);
  const app_ctx = useContext(AppContext);

  const [data, setData] = useState({});
  const [hasPhone, setHasPhone] = useState("");

  useEffect(() => {
    if (props.payment && props.payment === "ok") {
      axios
        .post("http://127.0.0.1:5000/assign_tag", { phone: phone.phone })
        .then((response) => {
          setData((prev) => response.data.data.msg);
        })
        .catch((error) => {
          console.log(error);
        });
      // clear store and context api stored data
      dispatch(clearCart());
      app_ctx.updateContext({});
    }
    if (phone.phone) setHasPhone((prev) => phone.phone);
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center">
        <MDBCard className="col-sm-6 my-4">
          <MDBCardBody>
            <h3>Payment was successful</h3>
            {hasPhone ? (
              <div className="mt-4">
                <MDBCardText>
                  Your ReuniteTag ID has been sent to your phone number{" "}
                  {hasPhone}
                </MDBCardText>
                <p>
                  Once you have received the code, click on the register button{" "}
                </p>
                <Link to="/register" className="btn btn-primary btn-lg">
                  CLICK TO REGISTER TAG
                </Link>
              </div>
            ) : (
              <Link to="/home" className="btn btn-primary btn-lg mt-4">
                RETURN TO HOME PAGE
              </Link>
            )}
          </MDBCardBody>
        </MDBCard>
      </div>
      <Footer />
    </>
  );
};

export default SuccessPage;
