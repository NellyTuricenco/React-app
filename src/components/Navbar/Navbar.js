import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="nav__wrapper">
      <div className="nav__container">
        <Link to="/" className="nav__logo">
          ReactApp
        </Link>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
