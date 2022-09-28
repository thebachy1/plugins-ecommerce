import react, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import bannerImage from "../../assets/LPF.jpg";

export default function Home() {
  return (
    <div className="home__container">
      <div className="home__content">
        <div className="home__banner">
          <div className="home__imageContainer">
            <img src={bannerImage} alt="banner image" />
          </div>
          <div className="home__bannerInfo">
            <h1>LOW PASS FILTERS</h1>
            <p>
              We create software, hardware and applications for the music
              industry.
            </p>
            <Link to="/products">
              <button className="home__productsButton">Shop plugins</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
