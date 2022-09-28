import React from "react";
import { useLocation } from "react-router-dom";
import { Products } from "../Products/Products";
import PaypalCheckoutButton from "../PaypalCheckoutButton/PaypalCheckoutButton";
import "./Product.scss";

export default function Product() {
  const location = useLocation();
  const { image, name, price, about } = location.state as Products;
  return (
    <div className="product__container">
      <div className="product__imageContainer">
        <img src={image} alt="Product display image" />
      </div>
      <h2>{name}</h2>
      <h3>${price}</h3>
      <div className="product__paypalButton">
        <PaypalCheckoutButton name={name} price={price} />
      </div>
      <div className="product__aboutContainer">
        <h2>About this product</h2>
        <p>{about}</p>
      </div>
    </div>
  );
}
