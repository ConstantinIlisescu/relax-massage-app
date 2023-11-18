import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import Button from "../../components/button/Button";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import "./Navbar.css";
import { navBar } from "../../Data/navBar";
import { bookingButton } from "../../Data/bookingButton";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const TRUE = true;

  function handleClickCloseMenu() {
    setToggleMenu(false);
  }

  function handleClickOpenMenu() {
    setToggleMenu(true);
    setIsActive(true);
  }

  const Menu = () => (
    <>
      <li className="item" onClick={handleClickCloseMenu}>
        <HashLink to="/#home" className="">
          {navBar.home}
        </HashLink>
      </li>
      <li className="item" onClick={handleClickCloseMenu}>
        <HashLink to="/services#" className="">
          {navBar.servicesList}
        </HashLink>
      </li>
      <li className="item" onClick={handleClickCloseMenu}>
        <HashLink to="/about-services#" className="">
          {navBar.aboutMyServices}
        </HashLink>
      </li>
      <li className="item" onClick={handleClickCloseMenu}>
        <HashLink to="/about#about-me" className="">
          {navBar.aboutMe}
        </HashLink>
      </li>
      <li className="item last" onClick={handleClickCloseMenu}>
        <HashLink to="/about#contact-me" className="">
          {navBar.contactMe}
        </HashLink>
      </li>
      <div className="main-page-button">
        <Button
          buttonStyle=""
          linkTo={bookingButton.link}
          toTarget="_blank"
          onClick={handleClickCloseMenu}
          isVisible={TRUE}
        >
          {navBar.buttonText}
        </Button>
      </div>
    </>
  );

  return (
    <>
      <nav className="navbar slide-bottom z-index-2">
        <div className="navbar-links container">
          <HashLink className="" to="/#home" onClick={handleClickCloseMenu}>
            <img
              className="navbar-links-logo"
              src={require(`../../images/${navBar.logo}`)}
              alt="logo"
              srcset=""
            />
          </HashLink>
          <ul className="navbar-links-container">
            <Menu />
          </ul>
          <div className="navbar-links-menu">
            {toggleMenu ? (
              <IoMdClose
                className="nav-button"
                onClick={handleClickCloseMenu}
              />
            ) : (
              <BiMenuAltRight
                className="nav-button"
                onClick={handleClickOpenMenu}
              />
            )}
            {isActive ? (
              <ul
                className={
                  toggleMenu
                    ? "navbar-links-menu-container slide-left"
                    : "navbar-links-menu-container slide-right"
                }
              >
                <Menu />
              </ul>
            ) : (
              <ul className="navbar-links-menu-container">
                <Menu />
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
