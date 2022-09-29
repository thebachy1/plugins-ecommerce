import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import "./Products.scss";
import productsMock from "../../Mocks/Products.json";
import db from "../../Firebase/firebaseConfig";

export interface Products {
  _id?: number;
  image: string;
  name: string;
  price: number;
  about: string;
}

export default function Products() {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);

  return (
    <section className="products">
      {products &&
        products?.map((product) => (
          <div className="product-card" key={product._id}>
            <div className="product-image">
              <img src={product.image} />
            </div>
            <div className="product-info">
              <h5>{product.name}</h5>
              <h6>${product.price}</h6>
              <Link
                to={`/products/${product._id}`}
                state={{
                  image: product.image,
                  name: product.name,
                  price: product.price,
                  about: product.about,
                }}
              >
                <button className="button-74">Go to product</button>
              </Link>
            </div>
          </div>
        ))}
    </section>
  );
}
