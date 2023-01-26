import React, { useState } from "react";

const button1 = ({ productProps }) => {
  const [display, setDisplay] = useState("flex");
  const deleteRow = () => {
    setDisplay("none");
    if (productProps.counterCart > 0) {
      productProps.setCounterCart(productProps.counterCart - 1);
    }
  };
  return (
    <div style={{ display: display }} className="button__row">
      <span style={{ backgroundColor: productProps.bgColor }}>
        {productProps.counterNum}
      </span>
      <button onClick={productProps.addProduct} className="button__row--plus">
        <i className="bx bx-plus-circle "></i>
      </button>
      <button
        onClick={productProps.deleteProduct}
        className="button__row--minus"
      >
        <i className="bx bx-minus-circle"></i>
      </button>
      <button onClick={deleteRow} className="button__row--trash">
        <i className="bx bx-trash "></i>
      </button>
    </div>
  );
};

export default button1;
