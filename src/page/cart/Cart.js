import React from "react";
import style from "./Cart.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { MDBBtn } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./CartItem";
import { To2DP, SETTINGS } from "../../helpers";
import Footer from "../../layout/home/Footer";
import { CHECKOUT_ENDPOINT } from "../../API_endpoints";

const Cart = () => {
  const data = useSelector((store) => store.cart.details);
  const totalItems = data.length;

  // sum up items amount in cart state
  const total = () => {
    return To2DP(
      data.reduce((sum, item) => {
        return sum + parseInt(item.qty) * parseFloat(item.amount);
      }, 0)
    );
  };

  const _totalAmount = total();

  const calVAT = (amt) => To2DP(SETTINGS.VAT * amt);

  const checkout = () => {
    axios
      .post(CHECKOUT_ENDPOINT, { details: data })
      .then((response) => {
        const responseData = response.data.data;
        if (responseData.status === 303) {
          window.location.assign(responseData.url);
        } else {
          console.log(responseData);
        }
      })
      .catch((error) => {
        console.log("Counld not reach endpoint");
      });
  };

  return (
    <>
      <div className={style.line}></div>
      <h4 className="ps-3 ps-sm-5 pt-4 mb-5">Shopping Cart</h4>
      <div className="d-sm-flex my-3 mx-5">
        <div className="col-12 col-sm-4 col-md-3 container order-sm-2 text-center">
          <div className="card p-4">
            <div className="p-2">
              <div className={`mb-n2 ${style.totalLabel}`}>
                Subtotal (
                {totalItems > 1 ? ` ${totalItems} items` : `${totalItems} item`}
                )
              </div>
              <h1>
                <span className={style.currency}>&euro;</span>
                {_totalAmount}
              </h1>
            </div>
            <div className="p-2">
              <MDBBtn
                onClick={checkout}
                color="primary"
                className="w-100 btn-lg"
              >
                <FontAwesomeIcon icon={faShoppingCart} />{" "}
                <span className="ps-3">CHECKOUT</span>
              </MDBBtn>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-8 col-md-9">
          <div className="p-5">
            {data.map((item) => {
              return <CartItem key={item.product_id} item={item} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
