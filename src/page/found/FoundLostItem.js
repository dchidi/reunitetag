import React from "react";
import FoundItemForm from "../../layout/found_item/FoundItemForm";

const FoundLostItem = (props) => {
  return (
    <>
      <div className="d-md-flex">
        <div className="col-md-6">
          <img
            src="https://www.esmartcode.com/wp-content/uploads/2014/05/tags-1-1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6 px-5">
          <h3 className="mt-4 mb-5">Capture tag on item found</h3>
          <FoundItemForm />
        </div>
      </div>
    </>
  );
};
export default FoundLostItem;
