import React, { useContext, useState, useEffect } from "react";
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
} from "@fortawesome/free-solid-svg-icons";
import style from "./BuyNow.module.css";
import AppContext from "../../context/AppContext";
import {
  addToCart,
  removeFromCart,
  clearCart,
} from "../../store/features/cart_slice";

const BuyNow = (props) => {
  const app_ctx = useContext(AppContext);
  const navigate = useNavigate();
  const toggleShow = () => {
    // Rendering modal will prevent the data passed to the component with props to be correct. To overcome this,
    // use state or context to hold the data that will be passed to a function that will render after modal display
    app_ctx.updateContext({
      cartModalState: !app_ctx.cartModalState,
      cartTempDetails: props.data,
    });
  };

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    app_ctx.updateContext({ cartModalState: false });
    dispatch(addToCart(app_ctx.cartTempDetails));
  };

  const buyNowHandler = () => {
    addToCartHandler();
    navigate("/cart");
  };

  return (
    <>
      <MDBBtn
        outline
        color="dark"
        className={style.buynow}
        onClick={toggleShow}
      >
        <FontAwesomeIcon icon={faCartShopping} className={style.cart} /> Buy Now
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
            <MDBModalBody className="py-5">
              <MDBBtn
                outline
                color="dark"
                className="btn-lg me-3"
                onClick={addToCartHandler}
              >
                <FontAwesomeIcon icon={faCartShopping} /> ADD TO CART
              </MDBBtn>
              <MDBBtn color="dark" className="btn-lg" onClick={buyNowHandler}>
                <FontAwesomeIcon icon={faCreditCard} /> &nbsp;BUY NOW
              </MDBBtn>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default BuyNow;
