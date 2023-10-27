import React from "react";
import "./HomeHome.css";
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";
import { BiMap, BiLogoFacebook } from "react-icons/bi";
import Button from "../../../../components/button/Button";
import { homeHome } from "../../../../Data/home/homeHome";
import { contactInfo } from "../../../../Data/contactInfo";
import { bookingButton } from "../../../../Data/bookingButton";

function HomeHome() {
  return (
    <section id="home" className="page-padding">
      <div className="section-container">
        <div className="home-description-main-title">
          <div className="home-description">
            <div className="home-description-title">
              <h3>{homeHome.firstTitle}</h3>
              <span className="title-line"></span>
            </div>
            <p>{homeHome.secondTitle}</p>
          </div>
          <div className="home-main-title">
            <h1>
              {homeHome.mainTitle.map((span, index) => {
                return (
                  <span key={index} className="gradient-dark-text">
                    {span}
                  </span>
                );
              })}
            </h1>
            <div className="home-main-image">
              <img
                src={require(`../../../../images/Home/${homeHome.mainImage}`)}
                alt={homeHome.mainImageDescription}
              />
            </div>
          </div>
        </div>
        <div className="home-contacts">
          <div className="home-contacts-phone">
            <a href={contactInfo.phone}>
              <AiOutlinePhone />
            </a>
            <a href={contactInfo.phone}>{contactInfo.phoneDisplay}</a>
          </div>
          <div className="home-contacts-phone">
            <a href={contactInfo.whatsapp}>
              <AiOutlineWhatsApp />
            </a>
            <a href={contactInfo.whatsapp}>{contactInfo.whatsappDisplay}</a>
          </div>
          <div className="home-contacts-phone">
            <a href={contactInfo.facebook} target="_blank" rel="noreferrer">
              <BiLogoFacebook />
            </a>
            <a href={contactInfo.facebook} target="_blank" rel="noreferrer">
              {contactInfo.facebookDisplay}
            </a>
          </div>
          <div className="home-contacts-address">
            <a target="_blank" rel="noreferrer" href={contactInfo.address}>
              <BiMap />
            </a>
            <a target="_blank" rel="noreferrer" href={contactInfo.address}>
              {contactInfo.addressDisplay} <br />{" "}
              {contactInfo.addressDisplayPostcode}
            </a>
          </div>
        </div>
        <div className="home-contacts-button">
          <Button
            buttonStyle=""
            linkTo={bookingButton.link}
            toTarget="_blank"
            isVisible={true}
          >
            {homeHome.mainBookAppointmentButton}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HomeHome;
