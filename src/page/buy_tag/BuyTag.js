import React, { useContext, useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCreditCard,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import style from "./BuyTag.module.css";
import AppContext from "../../context/AppContext";
import {
  addToCart,
  removeFromCart,
  clearCart,
} from "../../store/features/cart_slice";
import PhoneField from "../../components/phone_field/PhoneField";

const BuyTag = (props) => {
  const navigate = useNavigate();
  const app_ctx = useContext(AppContext);
  const dispatch = useDispatch();
  // const phoneRef = useRef(null);
  const [error, setError] = useState(null);
  const [phone, setPhone] = useState("");
  const data = {
    title: "Buy ReuniteTag ID",
    description: "Protect all your possession using SMART ID TAG ",
    amount: "9.95",
    discount: "",
    product_id: "200001",
    qty: 1,
    has_shipping: 0,
    no_update_action: true,
  };

  const buyNowHandler = () => {
    // const phone = phoneRef.current?.value;
    if (phone.length >= 5 && phone.length <= 20) {
      data.phone = phone;
      dispatch(addToCart(data));
      navigate("/cart");
      setError("");
    } else setError("Invalid phone number");
  };

  const toggleShow = () => {
    // Rendering modal will prevent the data passed to the component with props to be correct. To overcome this,
    // use state or context to hold the data that will be passed to a function that will render after modal display
    app_ctx.updateContext({
      cartModalState: !app_ctx.cartModalState,
      cartTempDetails: data,
    });
  };

  const cancel = () => {
    app_ctx.updateContext({
      cartModalState: !app_ctx.cartModalState,
    });
  };

  const phoneInput = (data) => {
    setPhone((prev) => `${data.phoneExtention}${data.phoneNumber}`);
  };

  return (
    <>
      <div className={style.line}></div>
      <div className={`me-5 m-sm-5 mt-3 p-xs-3 p-sm-5 pt-4 pb-5`}>
        <div className="d-sm-flex">
          <div className="d-none d-sm-block col-12 col-sm-4 col-md-3 mt-3 pt-5">
            <img
              src="https://reunitetag2.exsite.ie/wp-content/uploads/2022/08/Luggage-1-400x400.png"
              width="100%"
              className={style.buyTagImg}
            />
          </div>
          <div className="ps-5">
            <h3>Buy ReuniteTag</h3>
            <p>
              ReuniteTag helps with protecting your valuable items by giving you
              a chance to find them if missing
            </p>
            <hr />
            <h3 className="text-center">
              <span className={style.currency}>&euro;</span> {data.amount}
            </h3>
            <hr />
            <h4>Features</h4>
            <ul className={`${style.tagFeatures}`}>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} />
                <span className={style.featureItem}>15 free SMS</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} />
                <span className={style.featureItem}>
                  Free personalization on Items from store
                </span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} />
                <span className={style.featureItem}>Battery free</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} />
                <span className={style.featureItem}>Global outreach</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} />
                <span className={style.featureItem}>Available 24/7</span>
              </li>
            </ul>
            <div>
              <MDBBtn
                outline
                color="dark"
                className={style.buynow}
                onClick={toggleShow}
              >
                <FontAwesomeIcon icon={faCartShopping} className={style.cart} />{" "}
                Buy Now
              </MDBBtn>
              <MDBModal show={app_ctx.cartModalState} tabIndex="-1">
                <MDBModalDialog>
                  <MDBModalContent>
                    <MDBModalHeader>
                      <MDBBtn
                        className="btn-close"
                        color="none"
                        onClick={toggleShow}
                      ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody className="py-3">
                      <div className="mb-3">
                        <p className={style.error}>{error}</p>
                        <PhoneField payload={phoneInput} />
                      </div>
                      <MDBBtn
                        outline
                        color="dark"
                        className="btn-lg me-3"
                        onClick={cancel}
                      >
                        <FontAwesomeIcon icon={faCartShopping} /> CANCEL
                      </MDBBtn>
                      <MDBBtn
                        color="dark"
                        className="btn-lg"
                        onClick={buyNowHandler}
                      >
                        <FontAwesomeIcon icon={faCreditCard} /> &nbsp;PROCEED
                      </MDBBtn>
                    </MDBModalBody>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyTag;
