import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Product.scss";
import file from "../../assets/test.txt";

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
      <Link class="button-19" to={file} target="_blank" download>
        {/* <button class="button-19" role="button">
          Buy now
        </button> */}
        Buy Now
      </Link>
      <div className="product__aboutContainer">
        <h2>About this product</h2>
        <p>{about}</p>
      </div>
    </div>
  );
}
