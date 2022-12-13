import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import style from "./Menu.module.css";

const Menu = () => {
  const [navState, setNavState] = useState(false);
  const updateMenuState = () => {
    setNavState(!navState);
  };

  const cartHolder = (
    <Link to="/cart" className={style.link}>
      <FontAwesomeIcon icon={faCartShopping} />{" "}
      <span className={style.items_in_cart}>
        {useSelector((store) => store.cart.total)}
      </span>
    </Link>
  );

  return (
    <div className="p-3">
      <MDBNavbar expand="lg" style={{ border: "0", boxShadow: "none" }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href="#" style={{ marginRight: "150px" }}>
            <img
              src="https://reunitetag2.exsite.ie/wp-content/uploads/2022/08/Reunite-Logo-3.png"
              className={`${style.logo}`}
            />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={updateMenuState}
          >
            {navState ? (
              <FontAwesomeIcon
                icon={faXmark}
                size="xl"
                className={style.xmark}
              />
            ) : (
              <FontAwesomeIcon icon={faBars} size="xl" />
            )}
          </MDBNavbarToggler>
          <span className="d-sm-none">{cartHolder}</span>
          <MDBCollapse navbar show={navState}>
            <MDBNavbarNav className={`mb-2 mb-lg-0 ${style.menu}`}>
              <Link
                to="/index"
                className={style.menuItem}
                onClick={updateMenuState}
              >
                Home
              </Link>
              <Link
                to="/register"
                className={style.menuItem}
                onClick={updateMenuState}
              >
                Register Your Tag/iD
              </Link>
              <Link
                to="/buy_tag"
                className={style.menuItem}
                onClick={updateMenuState}
              >
                Buy a Tag/iD
              </Link>
              <Link
                to="/found"
                className={style.menuItem}
                onClick={updateMenuState}
              >
                Found/Emergency
              </Link>
              <Link
                to="/top_up_units"
                className={style.menuItem}
                onClick={updateMenuState}
              >
                Top-Up SMS Units
              </Link>
              <Link
                to="/product"
                className={style.menuItem}
                onClick={updateMenuState}
              >
                Shop
              </Link>
              <Link
                to="/contact"
                className={style.contact}
                onClick={updateMenuState}
              >
                Contact Us
              </Link>
            </MDBNavbarNav>
            <span className="d-none d-sm-block pe-lg-5">{cartHolder}</span>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default Menu;
