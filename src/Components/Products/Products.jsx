import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import "./Products.scss";
import productsMock from "../../Mocks/Products.json";
import db from "../../Firebase/firebaseConfig";

export default function Products() {
  const [products, setProducts] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collection(db, "Products"));
      const dataArray = [];

      data.forEach((product) => {
        dataArray.push(product.data());
      });

      setProducts(dataArray);
    };

    getData();
  }, []);

  console.log(products);

  return (
    <section className="products">
      {products &&
        products?.map((product) => (
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
