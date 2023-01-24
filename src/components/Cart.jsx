import React from "react";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  return (
    <div className="cart">
      <main>
        <CartItem
          imgSrc="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80"
          name={"Mac Book"}
          price={232323}
          qty={1}
          id="asd"
        />
      </main>
      <aside>
        <h2>Subtotal: ${2000}</h2>
        <h2>Shipping: ${2000}</h2>
        <h2>Tax: ${20}</h2>
        <h2>Total: ${1200}</h2>
      </aside>
    </div>
  );
};
const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <div className="cartItem">
    <img src={imgSrc} alt="Item" />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>

    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>

    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;
