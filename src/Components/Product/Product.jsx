import React from "react";
import { useLocation } from "react-router-dom";
import "./Product.scss";

export default function Product() {
  const location = useLocation();
  const { image, name, price, about } = location.state;
  console.log();
  return (
    <div className="product__container">
      <div className="product__imageContainer">
        <img src={image} alt="Product display image" />
      </div>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button class="button-19" role="button">
        Buy now
      </button>
      <div className="product__aboutContainer">
        <h2>About this product</h2>
        <p>{about}</p>
      </div>
    </div>
  );
}
