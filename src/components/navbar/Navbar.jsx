import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import Button from "../../components/button/Button";
import { BiMenuAltRight, BiCaretDown, BiCaretUp } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import "./Navbar.css";
import { navBar } from "../../Data/navBar";
import { bookingButton } from "../../Data/bookingButton";
import { services } from "../../Data/services";

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
        <HashLink to="/relax-massage-app#home" className="">
          {navBar.home}
        </HashLink>
      </li>
      <li className="item" onClick={handleClickCloseMenu}>
        <HashLink to="relax-massage-app/services#" className="">
          {navBar.servicesList}
        </HashLink>
      </li>
      {/* <li className="item">
        <HashLink className="item-services" onClick={handleServiceMenu}>
          <span>{navBar.servicesList}</span>
          <span>{toggleServiceMenu ? <BiCaretUp /> : <BiCaretDown />}</span>
        </HashLink>
        {toggleServiceMenu && (
          <ul className="item-services-menu scale-up-ver-top">
            <div>
              {services.items.map((service, index) => {
                return (
                  <HashLink
                    id={index}
                    className="service-item"
                    onClick={handleClickCloseServiceMenu}
                    to="relax-massage-app/services#"
                  >
                    {service.serviceTitle}
                  </HashLink>
                );
              })}
            </div>
          </ul>
        )}
      </li> */}
      <li className="item" onClick={handleClickCloseMenu}>
        <HashLink to="relax-massage-app/about-services#" className="">
          {navBar.aboutMyServices}
        </HashLink>
      </li>
      <li className="item" onClick={handleClickCloseMenu}>
        <HashLink to="relax-massage-app/about#about-me" className="">
          {navBar.aboutMe}
        </HashLink>
      </li>
      <li className="item last" onClick={handleClickCloseMenu}>
        <HashLink to="relax-massage-app/about#contact-me" className="">
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
          <HashLink
            className=""
            to="/relax-massage-app#home"
            onClick={handleClickCloseMenu}
          >
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
