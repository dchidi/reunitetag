import React, { useContext, useEffect } from "react";
import Slider from "../../components/carousel/Slider.js";
import { useSelector, useDispatch } from "react-redux";
import AppContext from "../../context/AppContext.js";
import axios from "axios";
import Benefits from "../../layout/home/Benefits.js";
import Contact from "../../layout/contact/Contact.js";
import Features from "../../layout/home/Features.js";
import Footer from "../../layout/home/Footer.js";
import Intro from "../../layout/home/Intro.js";
import Packs from "../../layout/home/Pack.js";
import { clearCart } from "../../store/features/cart_slice.js";

const ContactPage = (props) => {
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
