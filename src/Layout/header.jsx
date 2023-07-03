import React, { useState } from "react";
import "../styles/nav.css";
import left from "../assets/left-arrow.svg";
import Logo from "../assets/GsLogo.svg";
import { FiMenu, FiX } from "react-icons/fi";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <>
      <header className="header">
        <img src={Logo} alt="logo"></img>
        <div onClick={handleClick} className="hamburger-menu">
          {open ? (
            <FiX className="close-icon"></FiX>
          ) : (
            <FiMenu className="menu-icon"></FiMenu>
          )}
        </div>
        <nav onClick={closeMenu} className={!open ? "nav-active" : "nav"}>
          <div className="links">
            <a href="/#">Product</a>
            <a href="/#">Pricing</a>
            <a href="/#">Customers</a>
            <a href="/#"> Resources</a>
            <a href="/#"> Company</a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
