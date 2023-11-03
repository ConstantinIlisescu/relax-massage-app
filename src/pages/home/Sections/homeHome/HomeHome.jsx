import React from "react";
import "./HomeHome.css";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BiMap, BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
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
            <div className="home-description-logo">
              <img
                src={require(`../../../../images/Home/${homeHome.logoImage}`)}
                alt={homeHome.logoImageDescription}
              />
            </div>
            <p>{homeHome.firstParagraph}</p>
          </div>
          <div className="home-main-title">
            <div className="home-main-title-text">
              <h1>
                {homeHome.mainTitle.map((span, index) => {
                  return (
                    <span key={index} className="gradient-dark-text">
                      {span}
                    </span>
                  );
                })}
              </h1>
              <div className="home-description-title">
                <h3>{homeHome.mainSubtitleParagraph}</h3>
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
            <div className="home-main-image">
              <img
                src={require(`../../../../images/Home/${homeHome.mainImage}`)}
                alt={homeHome.mainImageDescription}
              />
            </div>
          </div>
        </div>
        <div className="home-quote">
          <p>{homeHome.mainQuote}</p>
        </div>
      </div>
    </section>
  );
}

export default HomeHome;
