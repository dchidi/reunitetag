import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import style from "./Slider.module.css";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <Carousel controls={false} fade={true} indicators={false}>
      <Carousel.Item>
        <img
          className={`d-block w-100 ${style.imgSizing}`}
          src="https://reunitetag2.exsite.ie/wp-content/uploads/2022/08/5.png"
          alt="First slide"
        />
        <Carousel.Caption bsPrefix={style.caption}>
          <h2>No Tracking</h2>
          <h1>
            NO PERSONAL DATA <br />
            DISPLAYED OR COLLECTED
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`d-block w-100 ${style.imgSizing}`}
          src="https://reunitetag2.exsite.ie/wp-content/uploads/2022/08/SL3.png"
          alt="Second slide"
        />

        <Carousel.Caption bsPrefix={style.caption}>
          <h2>Lost can now be found. </h2>
          <h1>SMART I.D. TAGS & LABELS</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`d-block w-100 ${style.imgSizing}`}
          src="	https://reunitetag2.exsite.ie/wp-content/uploads/2022/08/vacations-2478283_1920.jpg-arctic.jpg"
          alt="Third slide"
        />

        <Carousel.Caption bsPrefix={style.caption}>
          <h2>Reunite Tag ID is created by an eSmartCode (TM) </h2>
          <h1 style={{ fontSize: "23px", color: "#c6c0fb" }}>
            SIMPLE, SAFE, COST-EFFECTIVE & PASSIVE PERSONAL ID
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
