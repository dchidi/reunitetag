import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import IndexPage from "./home/IndexPage";
import Registration from "./register/Registration";
import FoundLostItem from "./found/FoundLostItem";
import Header from "../layout/Header";
import Product from "./product/Product";
import Cart from "./cart/Cart";
import BuyTag from "./buy_tag/BuyTag";
import SuccessPage from "./Success";
import ContactPage from "./contact/IndexPage";
import TopUpUnits from "./top_up_sms_units/TopUpUnits";

const PageController = (props) => {
  const { status } = useParams();
  const _page = {
    index: <IndexPage />,
    contact: <ContactPage />,
    register: <Registration />,
    found: <FoundLostItem />,
    product: <Product />,
    cart: <Cart />,
    cancel_payment: <Cart />,
    buy_tag: <BuyTag />,
    top_up_units: <TopUpUnits />,
    payment_successful: <SuccessPage payment={status} />,
  };

  // console.log(props);

  return (
    <>
      <Header current_page={props.page} />
      <div>
        {/* Render page */}
        <div className="flex-fill">{_page[props.page]}</div>
      </div>
    </>
  );
};
export default PageController;
