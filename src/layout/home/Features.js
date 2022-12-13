import React from "react";
import { Link } from "react-router-dom";
import { MDBBtn, MDBCol } from "mdb-react-ui-kit";
import style from "./Features.module.css";

const Features = () => {
  return (
    <>
      {/* what it does */}
      <div className={`pt-4  ${style.featureWbg}`}>
        <div className={`${style.card}`}>
          <h2 className={`${style.color1}`}>
            ReuniteTag allows your items to find you if they get lost.
          </h2>
          <h2 className={`pt-3 ${style.color1}`}>
            + to contact next of kin, In Case Of Emergency
          </h2>
          <h2 className={`pt-4 ${style.color2}`}>
            ReuniteTag iD is created from a unique eSmartCode. It is your unique
            & personal ‘Registration Plate’!
          </h2>
          <p className={`mt-5`}>
            ReuniteTag – have created a simple, safe, cost-effective, passive,
            personal iD to give you reassurance wherever you are, that your
            items can find you if they get lost.
          </p>
          <p>
            How? Using an eSmartCode – which is a random generated and unique
            code stored in the ‘Cloud’
          </p>
          <div>
            <Link className={`${style.fbtn}`} to="/buy_tag">
              Get a code
            </Link>
            <Link className={`${style.fbtn}`} to="/top_up_units">
              Top-Up SMS Units
            </Link>
            <Link className={`${style.fbtn}`} to="/register">
              Register Your Code
            </Link>
          </div>
        </div>
      </div>
      {/* steps to activate */}
      <div className={`d-md-flex ${style.feature}`}>
        <img
          src="https://reunitetag2.exsite.ie/wp-content/uploads/2022/08/suit-cases-818934-1200x1333.jpg"
          className={`col-md-4 ${style.featureImg}`}
        />
        <div className={`col-md-8 p-5 ${style.featureContent}`}>
          <h4>ReuniteTag Technology Operates In The Cloud.</h4>
          <h2>3 Easy Steps To Getting & Activating Your Unique iD</h2>
          <ol>
            <li>Purchase a ReuniteTag iD here, on the website</li>
            <li>
              Nominate one, two or three mobile numbers of next of kin who agree
              to be contacted in case of an emergency. The ReuniteTag iD Code is
              then linked to those numbers in your chosen language.
            </li>
            <li>
              Your ReuniteTag iD code is now active. (you’ll get a text message
              to confirm)
            </li>
          </ol>
          <p>
            NOW YOU CAN ADD YOUR ID TO ALL OF YOUR PERSONAL ITEMS – PASSPORTS,
            PHONES, LUGGAGE, LAPTOPS, BAGS, CHILDREN AND PETS!
          </p>
          <div>
            <Link className={`${style.fbtn2}`} to="/buy_tag">
              Get a code
            </Link>
            <Link className={`${style.fbtn2}`} to="/top_up_units">
              Top-Up SMS Units
            </Link>
            <Link className={`${style.fbtn2}`} to="/register">
              Register Your Code
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
