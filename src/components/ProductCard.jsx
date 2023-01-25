import React from "react";

const ProductCard = ({ name, id, price, handler, imgSrc }) => {
  return (
    <div className="productCard">
      <img src={imgSrc} alt={name} />
      <p>{name}</p>
      <h4>${price}</h4>
      <button onClick={() => handler({ name, price, imgSrc, id, quantity: 1 })}>
        Add to Cart
      </button>
    </div>
  );
};

// const ProductCard = (props) => {
//   return (
//     <div className="productCard">
//       <img src={props.imgSrc} alt={props.name} />
//       <p>{props.name}</p>
//       <h4>${props.price}</h4>
//       <button
//         onClick={() =>
//           props.handler(props.name, props.price, props.imgSrc, props.id, {
//             quantity: 1,
//           })
//         }
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

export default ProductCard;
