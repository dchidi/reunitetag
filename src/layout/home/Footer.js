import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="d-md-flex justify-content-around">
        <img
          src="https://reunitetag2.exsite.ie/wp-content/uploads/2022/08/6.png-neo-400x400.png"
          className={`col-md-5 p-3 my-3 ${style.footerImg}`}
        />
        {/* <h4 className={`col-md-4 p-3 ${style.about}`}>
          ReuniteTag ID
          <br /> Exceeding expectations
        </h4> */}
        <div className={`col-md-4 p-3 ${style.about}`}>
          <h3 className="mb-4">About ReuniteTag</h3>
          <p>
            we have created a simple, safe and cost effective passive tag for
            all of your precious items with complete anonymity and yet providing
            a simple method for the finder to let you know where you can recover
            your property.
          </p>
        </div>
        <div className="col-md-3 p-3">
          <h3 className="mb-4">Quick Links</h3>
          <ul>
            <li>
              <Link className={style.footerLink}>About</Link>
            </li>
            <li>
              <Link className={style.footerLink}>Stats</Link>
            </li>
            <li>
              <Link className={style.footerLink}>Found/Emergency</Link>
            </li>
            <li>
              <Link className={style.footerLink}>Renew Your Tag/iD</Link>
            </li>
            <li>
              <Link className={style.footerLink}>Register Your Tag/iD</Link>
            </li>
            <li>
              <Link className={style.footerLink}>Testimonials</Link>
            </li>
            <li>
              <Link className={style.footerLink}>Privacy Policy</Link>
            </li>
            <li>
              <Link className={style.footerLink}>Temrs & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* copy right */}
      <div className="text-center mt-5 pb-5">
        <p>&copy; Copyright 2012 - 2022 | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
