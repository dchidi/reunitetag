import React from "react";
import { To2DP } from "../../helpers";
import BuyNow from "./BuyNow";
import style from "./Item.module.css";

const Item = (props) => {
  const data = props.details;

  return (
    <div className={`col-12 col-sm-6 col-md-4`}>
      <div className={style.item}>
        <h3 className={style.title}>{data.title}</h3>
        <div>
          <img
            src={`${data.image}`}
            alt="product image here"
            className={style.img}
          />
        </div>
        <p className={`pt-4 ${style.description}`}>{data.description}</p>
        <div className={`pt-3 ${style.amount}`}>
          <span className={style.currency}>&euro;</span>
          {To2DP(data.amount)}{" "}
          {data.discount && (
            <span className={style.off}>{data.discount}% off</span>
          )}
        </div>
        <div className="d-flex justify-content-center py-3">
          <BuyNow data={data} key={data.product_id} />
        </div>
      </div>
    </div>
  );
};

export default Item;
