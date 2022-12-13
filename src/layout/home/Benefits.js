import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEarthAmericas,
  faUserShield,
  faBatteryFull,
  faCloud,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import style from "./Benefits.module.css";
const Benefits = () => {
  return (
    <div className={style.benefits}>
      <h2 className="text-center">THE BENEFITS OF HAVING REUNITETAG ID</h2>
      <div className="d-md-flex justify-content-center">
        {/* first */}
        <div className="col-md-4 p-md-4 text-center">
          <div className={`pt-4 ${style.color4}`}>
            <div className="mb-3">
              <FontAwesomeIcon icon={faClock} size="2x" />
            </div>
            <h3>WORKS 24/7</h3>
          </div>
          <p>
            ReuniteTag ID offer a direct link to the nominated registered mobile
            phones. It is a fully automated service that allows for messages to
            be sent instantly to the owner when a lost item or pet is found or
            In Case of Emergency. They are great for holidays, business trips
            and daily commute and for people living alone
          </p>
        </div>
        {/* second */}
        <div className="col-md-4 p-md-4 text-center">
          <div className={`pt-4 ${style.color4}`}>
            <div className="mb-3">
              <FontAwesomeIcon icon={faEarthAmericas} size="2x" />
            </div>
            <h3>GLOBAL REACH</h3>
          </div>
          <p>
            130 LANGUAGES NOW SUPPORTED WORLDWIDE, 130 LANGUAGES NOW SUPPORTED
            WORLDWIDE
          </p>
        </div>
        {/* third */}
        <div className="col-md-4 p-md-4 text-center">
          <div className={`pt-4 ${style.color4}`}>
            <div className="mb-3">
              <FontAwesomeIcon icon={faUserShield} size="2x" />
            </div>
            <h3>OUR GUARANTEE</h3>
          </div>
          <p>
            NO PERSONAL DATA: ReuniteTag ID never asks for your Name or Address.
            We do not store any data that can be connected to the user. We are
            totally GDPR friendly throughout the world.
          </p>
          <p>
            We only ask you to provide nominated next of kin mobile phone
            numbers (to receive SMS texts on), your preferred language (to
            translate to) and the code from your ReuniteTag.
          </p>
        </div>
        {/* end of third */}
      </div>
      <div className="d-md-flex justify-content-center mt-md-n5">
        {/* first */}
        <div className="col-md-4 p-md-4 text-center">
          <div className={`pt-4 ${style.color4}`}>
            <div className="mb-3">
              <FontAwesomeIcon icon={faBatteryFull} size="2x" />
            </div>
            <h3>BATTERY FREE</h3>
          </div>
          <p>
            <strong>ReuniteTag ID</strong> are passive devices and contain no
            batteries. In the Airport Carry-on luggage not in the World tracer®
            system is protected by ReuniteTag ID. The tags and labels available
            through our ReuniteTagShop.com are bespoke hard wearing, resilient
            and attractive. They do not contain any Trackers or use GPS devices,
            complete anonymity.
          </p>
        </div>
        {/* second */}
        <div className="col-md-4 p-md-4 text-center">
          <div className={`pt-4 ${style.color4}`}>
            <div className="mb-3">
              <FontAwesomeIcon icon={faCloud} size="2x" />
            </div>
            <h3>CLOUD TECHNOLOGY</h3>
          </div>
          <p>
            ReuniteTag ID uses cloud technology to get a message to you
            instantly, in the event that a lost item belonging to you is found
            or In Case of Emergency. We put the technology in the cloud not on
            the device.
          </p>
        </div>
        {/* third */}
        <div className="col-md-4 p-md-4 text-center">
          <div className={`pt-4 ${style.color4}`}>
            <div className="mb-3">
              <FontAwesomeIcon icon={faSquareCheck} size="2x" />
            </div>
            <h3>LOW RUNNING COSTS</h3>
          </div>
          <p>
            ReuniteTag ID are inexpensive – attract a small annual charge – no
            monthly fees. There are no costs to the person finding a lost item
            or the first responder and no cost to you to receive a notification
            anywhere in the World. Remember you can top-up your texts here
            anytime at ReuniteTag.com
          </p>
        </div>
        {/* end of third */}
      </div>
    </div>
  );
};

export default Benefits;
