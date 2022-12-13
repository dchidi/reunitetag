import React, { useState, useEffect } from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faXmark } from "@fortawesome/free-solid-svg-icons";
import style from "./Product.module.css";
import { store } from "../../store/store";

const Product = () => {
  const [data, setData] = useState([
    {
      title: "Emergency Decal",
      description:
        "Best suited for your movable items that are valuable to you",
      amount: "9.95",
      discount: "",
      product_id: "7839439",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8BnVj-j3KP7XIbM20QobAwSOoU9MbJtnpWhF4fbTq9M1DhYqKVApLJe7tZdVoIUK8udw&usqp=CAU",
      qty: 1,
      has_shipping: 1, // allows for possible shipping with extra fee
    },
    {
      title: "SMART I.D. TAGS",
      description: "Protect all your possession using 1 Pack of SMART ID TAG ",
      amount: "14.50",
      discount: "",
      product_id: "7839434",
      image: "",
      qty: 1,
      has_shipping: 1,
    },
    {
      title: "Kooliobandz",
      description: "1 Pack of kooliobandz can be used to protect your children",
      amount: "10.55",
      discount: "1",
      product_id: "7839435",
      image: "https://m.media-amazon.com/images/I/71FKADPXK2L._AC_SY741_.jpg",

      qty: 1,
      has_shipping: 1,
      size: [
        { age: "2-5", color: "Blue", amount: "9.99" },
        { age: "6-10", color: "Blue", amount: "9.99" },
        { age: "2-5", color: "Pink", amount: "9.99" },
        { age: "6-10", color: "Pink", amount: "9.99" },
      ],
    },
    {
      title: "Top-up sms credit",
      description: "Great value for all. Get 10SMS UNITS for ",
      amount: "9.99",
      discount: "",
      product_id: "7839436",
      image: "",
      qty: 1,
      has_shipping: 0,
    },
  ]);

  return (
    <>
      <div className={style.line}></div>
      <div className="container">
        <div className="p-4 row gy-4">
          {data.map((item) => (
            <Item details={item} key={item.product_id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
