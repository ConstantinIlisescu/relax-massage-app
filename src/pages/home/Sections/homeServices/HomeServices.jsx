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
                <div className="member-of-lines">
                  <div className="member-of-lines-one"></div>
                  <div className="member-of-lines-two"></div>
                  <div className="member-of-lines-three"></div>
                  <div className="member-of-lines-four"></div>
                  <div className="member-of-lines-five"></div>
                </div>
              </>
            );
          })}
        </div>
        <div className="home-services-button">
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
