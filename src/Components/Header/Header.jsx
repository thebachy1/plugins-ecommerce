import react, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/logo.svg";
import search from "../../assets/search-icon.svg";
import cart from "../../assets/cart.svg";

export default function Header() {
  return (
    <>
      <div className="header__nav">
        <div className="header__nav__top">
          <img className="header__search" src={search} alt="Search icon" />
          <img className="header__logo" src={logo} alt="Logo" />
          <img className="header__cart" src={cart} alt="cart icon" />
        </div>
        <div className="break"></div>
        <a className="header__pages">
          <p>Home</p>
        </a>
        <a className="header__pages">
          <p>Contact</p>
        </a>
      </div>
    </>
  );
}
