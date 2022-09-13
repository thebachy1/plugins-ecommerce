import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Products.scss";
import productsMock from "../../Mocks/Products.json";

export default function Products() {
  const [products, setProducts] = useState(productsMock);

  return (
    <section className="products">
      {products &&
        products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} />
            </div>
            <div className="product-info">
              <h5>{product.name}</h5>
              <h6>${product.price}</h6>
              <Link
                to={`/products/${product.id}`}
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
