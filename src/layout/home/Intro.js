import React from "react";
import style from "./Intro.module.css";

const Intro = () => {
  return (
    <>
      <div className={`pt-5 px-5 ${style.intro}`}>
        <p className="">
          <strong>ReuniteTag iD - Protecting </strong> All Of Your Precious
          Items, With Complete Anonymity.
        </p>
        <p className="">
          <strong>ReuniteTag iD - Provides </strong> A Simple Method For The
          Finder To Let You Know Where You Can Recover Them <br />
          <strong>Or In An Emergency </strong>Provide A Fast Link To Your Next
          Of Kin
        </p>
      </div>
      {/* Images */}
      <div className={`${style.scroll}`}>
        <div className={style.introImg}>
          <img src="https://reunitetag2.exsite.ie/wp-content/uploads/2022/08/keychain-200x200.png" />
          <img src="https://reunitetag2.exsite.ie/wp-content/uploads/2022/08/travel-luggage-200x200.png" />
          <img src="https://reunitetag2.exsite.ie/wp-content/uploads/2022/08/passport-200x200.png" />
          <img src="https://reunitetag2.exsite.ie/wp-content/uploads/2022/08/pet-200x200.png" />
          <img src="https://reunitetag2.exsite.ie/wp-content/uploads/2022/08/laptop-200x200.png" />
          <img src="https://reunitetag2.exsite.ie/wp-content/uploads/2022/08/golf-bag-200x200.png" />
          <img src="https://reunitetag2.exsite.ie/wp-content/uploads/2022/08/bicycle-1-200x200.png" />
        </div>
      </div>
    </>
  );
};

export default Intro;
