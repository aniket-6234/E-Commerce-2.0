import React from "react";
import Tshirt from "../images/thisrt.png";
import Rating from "./Rating";

const Product = (props) => {
  return (
    <div className="product-card">
      <div className="product-img">
        <img className="object-fill w-[70%] h-52" src={Tshirt} alt="product" />
      </div>
      <div className="px-6 mt-2">
        <h3 className="text-sm">Wrogn Mens T-Shirt</h3>
        <Rating value={3.5} text={`4 reviews`} />
        <h1 className="text-md mt-1">Price: $ 34.55</h1>
      </div>
    </div>
  );
};

export default Product;
