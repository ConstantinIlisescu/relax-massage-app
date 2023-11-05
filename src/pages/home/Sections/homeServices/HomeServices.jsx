import React from "react";
import { HashLink } from "react-router-hash-link";
import "./HomeServices.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../../../../components/button/Button";
import { services } from "../../../../Data/services";
import { homeServices } from "../../../../Data/home/homeServices";
import { bookingButton } from "../../../../Data/bookingButton";

function HomeServices() {
  const servicesList = [];
  for (let i = 0; i < services.numberOfServicesDisplayedOnMainPage; i++) {
    servicesList.push(services.items[i]);
  }

  return (
    <section id="home-services" className="container home-services-section">
      <div className="home-services-text-section">
        <h2 className="gradient-dark-text">
          {homeServices.mainPageSectionTitle}
        </h2>
        <div className="home-services-subtitle">
          <span className="title-line"></span>
          <h3>{homeServices.mainPageSubtitle}</h3>
        </div>
        <div className="home-services-list">
          {homeServices.list.map((service, index) => {
            return (
              <>
                <div className="home-services-list-object">
                  <div key={index} className="home-services-list-item">
                    <div className="text">
                      <h4 className="">{service.title}</h4>
                      <p>{service.description}</p>
                    </div>
                  </div>
                  <div className="home-services-img">
                    <img
                      src={require(`../../../../images/Home/${service.image}`)}
                      alt={service.imageDescription}
                    />
                  </div>
                </div>
                <div className="home-services-list-item">
                  <span className="dotted-line"></span>
                </div>
              </>
            );
          })}
        </div>
        <div className="home-services-button">
          {/* <Button buttonStyle="btn--primary" isVisible={true}>
            <HashLink to="relax-massage-app/services/#">
              {homeServices.mainPageButtonText}
            </HashLink>
          </Button> */}
          <Button
            buttonStyle=""
            linkTo={bookingButton.link}
            toTarget="_blank"
            isVisible={true}
          >
            {homeServices.mainPageButtonText}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HomeServices;
