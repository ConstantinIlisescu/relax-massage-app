import React from "react";
import { HashLink } from "react-router-hash-link";
import "./HomeServices.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../../../../components/button/Button";
import { services } from "../../../../Data/services";

function HomeServices() {
  const servicesList = [];
  for (let i = 0; i < services.numberOfServicesDisplayedOnMainPage; i++) {
    servicesList.push(services.items[i]);
  }

  return (
    <section id="home-services" className="container home-services-section">
      <div className="home-services-text-section">
        <h2 className="gradient-dark-text">{services.mainPageSectionTitle}</h2>
        <div className="home-services-subtitle">
          <span className="title-line"></span>
          <h3>{services.mainPageSubtitle}</h3>
        </div>
        <ul className="home-services-list">
          {servicesList.map((service, index) => {
            return (
              <li key={index} className="home-services-list-item">
                <h4 className="price">
                  {service.serviceCurrency}
                  <span>{service.servicePrice}</span>
                </h4>
                <div className="text">
                  <h4 className="">{service.serviceTitle}</h4>
                  <p>{service.serviceShortDescription}</p>
                </div>
                <div className="button">
                  <Button buttonStyle="btn--small--round" isVisible={true}>
                    <HashLink to="relax-massage-app/services/#">
                      <AiOutlineArrowRight />
                    </HashLink>
                  </Button>
                </div>
                <span className="dotted-line"></span>
              </li>
            );
          })}
        </ul>
        <div className="home-services-button">
          <Button buttonStyle="btn--primary" isVisible={true}>
            <HashLink to="relax-massage-app/services/#">
              {services.mainPageButtonText}
            </HashLink>
          </Button>
        </div>
      </div>
      <div className="home-services-img-section">
        <div className="home-services-img one">
          <img
            src={require(`../../../../images/Home/${services.mainPageImg1}`)}
            alt={services.mainPageImg1Description}
          />
        </div>
        <div className="home-services-img two">
          <img
            src={require(`../../../../images/Home/${services.mainPageImg2}`)}
            alt={services.mainPageImg2Description}
          />
        </div>
        <div className="home-services-img three">
          <img
            src={require(`../../../../images/Home/${services.mainPageImg3}`)}
            alt={services.mainPageImg3Description}
          />
        </div>
      </div>
    </section>
  );
}

export default HomeServices;
