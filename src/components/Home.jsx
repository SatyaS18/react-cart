import React from "react";
import { toast } from "react-hot-toast";
import ProductCard from "./ProductCard.jsx";

const Home = () => {
  const productList = [
    { name: "mac book", price: 1200, imgSrc: "srcc", id: "asd" },
    { name: "mac shoes", price: 200, imgSrc: "srccd", id: "asdd" },
  ];

  const addToCartHandler = (options) => {
    console.log(options.price);
    toast.success("Added to cart");
  };
  return (
    <div className="home ">
      {productList.map((item) => (
        <ProductCard
          key={item.id}
          imgSrc={item.imgSrc}
          name={item.name}
          price={item.price}
          id={item.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

export default Home;
