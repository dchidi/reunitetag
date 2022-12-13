import React, { useState } from "react";
import style from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  MDBBtn,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { removeFromCart, updateCart } from "../../store/features/cart_slice";
import { To2DP } from "../../helpers";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(props.item.qty);

  const incr = () => {
    if (!props.item.no_update_action)
      setQty((prev) => {
        dispatch(
          updateCart({ product_id: props.item.product_id, qty: prev + 1 })
        );
        return prev + 1;
      });
  };

  const decr = () => {
    qty > 0 &&
      setQty((prev) => {
        dispatch(
          updateCart({ product_id: props.item.product_id, qty: prev - 1 })
        );
        return prev - 1;
      });
  };

  const del = () => {
    dispatch(removeFromCart(props.item.product_id));
  };

  const changeHandler = () => {};

  // show decrease or increase button based on condition
  const decr_del =
    qty > 1 ? (
      <MDBBtn className="py-1 px-2" outline color="dark" onClick={decr}>
        <FontAwesomeIcon icon={faMinus} />
      </MDBBtn>
    ) : (
      <MDBBtn className="py-1 px-2" outline color="danger" onClick={del}>
        <FontAwesomeIcon icon={faTrash} />
      </MDBBtn>
    );

  return (
    <div key={props.item.product_id} className="mb-4">
      <h4 className={`${style.title}`}>{props.item.title}</h4>
      <div className="d-sm-flex justify-content-between">
        <div className="d-sm-flex align-items-center">
          {props.item.image && (
            <div className={`${style.imgDiv} pe-sm-3`}>
              <img src={props.item.image} className={`${style.img}`} />
            </div>
          )}
          <p className={`${style.description}`}>{props.item.description}</p>
        </div>
        <div className="text-center">
          <h3 className="mb-3">
            <span className={style.currency}>&euro;</span>
            {To2DP(props.item.amount * qty)}
          </h3>
          <div className="d-flex align-items-center justify-content-center">
            {/* Decrease */}
            {decr_del} {/* Qty */}
            <input
              type="text"
              className={`mx-2 ${style.inputQty}`}
              value={qty}
              onChange={changeHandler}
            />{" "}
            {/* Increase */}
            <MDBBtn
              className="me-2 py-1 px-2"
              outline
              color="dark"
              onClick={incr}
            >
              <FontAwesomeIcon icon={faPlus} />
            </MDBBtn>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
