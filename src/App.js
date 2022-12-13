import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./page/PageNotFound";
import PageController from "./page/PageController";

import "./App.module.css";

// This component manages all routes
function App() {
  // All routes apart from PageNotFound goes through PageController with a props called page to indicate
  // which page to display.
  return (
    <Routes>
      {/* home page */}
      <Route path="/" element={<PageController page="index" />} exact />
      <Route path="/home" element={<PageController page="index" />} />
      <Route path="/index" element={<PageController page="index" />} />
      <Route
        path="/contact"
        element={<PageController page="contact" subpage="contact" />}
      />
      {/* Registration page */}
      <Route path="/register" element={<PageController page="register" />} />
      {/* Found item page */}
      <Route path="/found" element={<PageController page="found" />} />
      {/* Products */}
      <Route path="/product" element={<PageController page="product" />} />
      {/* Buy Tag */}
      <Route path="/buy_tag" element={<PageController page="buy_tag" />} />
      {/* Top Up Units */}
      <Route
        path="/top_up_units"
        element={<PageController page="top_up_units" />}
      />
      {/* Cart */}
      <Route path="/cart" element={<PageController page="cart" />} />
      {/* Payment canceled */}
      <Route
        path="/cancel_payment"
        element={<PageController page="cancel_payment" />}
      />
      {/* Payment Successful */}
      <Route
        path="/payment_successful/:status"
        element={<PageController page="payment_successful" />}
      />
      {/* Page not found */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
