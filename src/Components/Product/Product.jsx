import React from "react";
import { useLocation } from "react-router-dom";
import "./Product.scss";

export default function Product() {
  const location = useLocation();
  const { image, name, price } = location.state;
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
    </div>
  );
}
