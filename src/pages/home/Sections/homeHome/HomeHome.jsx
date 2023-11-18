import React from "react";
import "./HomeHome.css";
import Button from "../../../../components/button/Button";
import { homeHome } from "../../../../Data/home/homeHome";
import { HashLink } from "react-router-hash-link";

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
                <p>{homeHome.mainSubtitleParagraph}</p>
              </div>
              <div className="home-contacts-button">
                <Button buttonStyle="" linkTo="/services#" isVisible={true}>
                  <HashLink to="/services#" className="">
                    {homeHome.mainBookAppointmentButton}
                  </HashLink>
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
