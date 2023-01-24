import React from "react";

const ProductCard = (props) => {
  return (
    <div className="productCard">
      <img src="{props.imgSrc}" alt={props.name} />
      <p>{props.name}</p>
      <h4>${props.price}</h4>
      <button
        onClick={() => props.handler(props.name, props.price, props.imgSrc)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
