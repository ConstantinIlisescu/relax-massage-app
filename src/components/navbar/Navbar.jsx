import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import logo from "../../images/logo.jpg";
import { BiMenuAltRight, BiCaretDown, BiCaretUp } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import "./Navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [toggleServiceMenu, setToggleServiceMenu] = useState(false);
  const TRUE = true;

  function handleClickCloseMenu() {
    setToggleMenu(false);
    setToggleServiceMenu(false);
  }

  function handleClickOpenMenu() {
    setToggleMenu(true);
    setIsActive(true);
  }

  function handleServiceMenu() {
    setToggleServiceMenu((prev) => !prev);
  }

  function handleClickCloseServiceMenu() {
    setToggleServiceMenu(false);
    setToggleMenu(false);
  }

  const Menu = () => (
    <>
      <li className="item" onClick={handleClickCloseMenu}>
        <Link to="/relax-massage-app" className="">
          Home
        </Link>
      </li>
      <li className="item">
        <Link className="item-services" onClick={handleServiceMenu}>
          <span>Services List</span>
          <span>{toggleServiceMenu ? <BiCaretUp /> : <BiCaretDown />}</span>
        </Link>
        {toggleServiceMenu && (
          <ul className="item-services-menu scale-up-ver-top">
            <div>
              <Link
                className="service-item"
                onClick={handleClickCloseServiceMenu}
                to="relax-massage-app/services"
              >
                WARM RATTAN MASSAGE
              </Link>
              <Link
                className="service-item"
                onClick={handleClickCloseServiceMenu}
                to="relax-massage-app/services"
              >
                EXFOLIATION
              </Link>
              <Link
                className="service-item"
                onClick={handleClickCloseServiceMenu}
                to="relax-massage-app/services"
              >
                REIKI HEALING
              </Link>
              <Link
                className="service-item"
                onClick={handleClickCloseServiceMenu}
                to="relax-massage-app/services"
              >
                FOOT REFLEXOLOGY
              </Link>
              <Link
                className="service-item"
                onClick={handleClickCloseServiceMenu}
                to="relax-massage-app/services"
              >
                HOT STONE MASSAGE
              </Link>
              <Link
                className="service-item"
                onClick={handleClickCloseServiceMenu}
                to="relax-massage-app/services"
              >
                GLIDING CUPPING TREATMENTS
              </Link>
              <Link
                className="service-item"
                onClick={handleClickCloseServiceMenu}
                to="relax-massage-app/services"
              >
                FIRE CUPPING
              </Link>
            </div>
          </ul>
        )}
      </li>
      <li className="item" onClick={handleClickCloseMenu}>
        <Link to="relax-massage-app/about-services" className="">
          About my Services
        </Link>
      </li>
      <li className="item" onClick={handleClickCloseMenu}>
        <Link to="relax-massage-app/about" className="">
          About Me
        </Link>
      </li>
      <li className="item last" onClick={handleClickCloseMenu}>
        <Link to="relax-massage-app/about#contact-me" className="">
          Contact Me
        </Link>
      </li>
      {/* <Button
        buttonStyle=""
        linkTo="https://relaxmassagestudiocannock.setmore.com/"
        toTarget="_blank"
        onClick={handleClickCloseMenu}
        isVisible={TRUE}
      >
        Make an Appointment
      </Button> */}
    </>
  );

  return (
    <>
      <nav className="navbar slide-bottom z-index-2">
        <div className="navbar-links container">
          <Link
            className=""
            to="/relax-massage-app"
            onClick={handleClickCloseMenu}
          >
            <img
              className="navbar-links-logo"
              src={logo}
              alt="logo"
              srcset=""
            />
          </Link>
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
