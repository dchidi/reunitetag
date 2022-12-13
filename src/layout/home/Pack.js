import React from "react";
import { Link } from "react-router-dom";
import { MDBBtn, MDBCol } from "mdb-react-ui-kit";
import style from "./Packs.module.css";

const Packs = () => {
  return (
    <>
      <div className={style.packBg}>
        <div className={`d-md-flex `}>
          <h2 className={`col-md-4 text-center ${style.packHeading}`}>
            AVAILABLE IN-
            <br />
            STORE NOW!
          </h2>
          <div className={`col-md-8 pt-4 ${style.packContent}`}>
            <p>
              There is no need to purchase any labels or stickers for your code,
              you can simply apply your iD to your items yourself.
            </p>
            <p>
              However, we have created a range of iD Tag’s & Labels which are
              available to purchase, personalised with your unique iD, from our
              shop{" "}
              <a href="" className={style.packRef}>
                www.reunitetagShop.com
              </a>{" "}
              or just click on the ReuniteTag Shop Icon.
            </p>
          </div>
        </div>
        <div
          className={`d-flex justify-content-around flex-wrap pt-5 ${style.packImg}`}
        >
          <a href="" className="mb-4">
            <img src="https://reunitetag2.exsite.ie/wp-content/uploads/2022/08/stickers-400x400.png" />
          </a>
          <a href="" className="mb-4">
            <img src="https://reunitetag2.exsite.ie/wp-content/uploads/2022/08/Passports-Mobile-Phones-laptops-400x400.png" />
          </a>
          <a href="">
            <img src="https://reunitetag2.exsite.ie/wp-content/uploads/2022/08/Luggage-1-400x400.png" />
          </a>
        </div>

        <div className={`pt-5 d-flex justify-content-center`}>
          <Link className={style.packShopNow} to="/product">
            Shop Now
          </Link>
        </div>
      </div>
      <div className="d-md-flex">
        <div className={`col-md-8 p-5 ${style.packText}`}>
          <h4 className="mb-5">
            What To Do When You Find Something or In Case of Emergency
          </h4>
          <ul>
            <li>
              First go to www.ReuniteTag.com and click On “Found / Emergency”
            </li>
            <li>Enter your preferred language</li>
            <li>Enter the ID Code from the found item</li>
            <li>Type a message</li>
            <li>Send</li>
          </ul>
          <MDBBtn className={style.fbtn}>
            Stats & Advantages of Reunite Tag
          </MDBBtn>
        </div>
        <div className={`col-md-4 ${style.packImgSingle}`}>
          <img
            src="https://reunitetag2.exsite.ie/wp-content/uploads/2022/08/info11-600x868.jpg"
            className={style.packImg}
          />
        </div>
      </div>
    </>
  );
};

export default Packs;
