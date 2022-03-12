import React from "react";
import logo from "../logo.svg";

function Header() {
  return (
    <nav className="nav">
      <div className="nav__logo-section">
        <img className="nav__logo" src={logo} />
        <label className="nav__title">ReactFacts</label>
      </div>
      <ul className="nav__menu">
        <li className="nav__items">Pricing</li>
        <li className="nav__items">About</li>
        <li className="nav__items">Contact</li>
      </ul>
    </nav>
  );
}

export default Header;
