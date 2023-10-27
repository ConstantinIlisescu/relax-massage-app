import React from "react";
import "./AboutServices.css";
import { aboutServices } from "../../Data/aboutServices";

function AboutServices() {
  return (
    <section id="#" className="about-services-container">
      <div className="about-services-dark-section-background about-services-container-first-section clip-path-polygon-top z-index-1">
        <div className="container about-services-flex-container">
          <div className="about-services-container-first-section-text">
            <h2>{aboutServices.sectionOne.title}</h2>
            <h3>{aboutServices.sectionOne.subtitle}</h3>
            <p>{aboutServices.sectionOne.paragraph}</p>
          </div>
          <div className="about-services-img-container">
            <img
              src={require(`../../images/AboutServices/${aboutServices.sectionOne.image}`)}
              alt={aboutServices.sectionOne.imageDescription}
            />
          </div>
        </div>
      </div>
      <div className="about-services-light-section-background about-services-container-section-item">
        <div className="container about-services-flex-container about-services-flex-direction-reverse">
          <div className="about-services-container-second-section-text">
            <h3 className="gradient-dark-text">
              {aboutServices.sectionTwo.title}
            </h3>
            <p className="about-services-p-padding-bottom">
              {aboutServices.sectionTwo.paragraph}
            </p>
          </div>
          <div className="about-services-img-container">
            <img
              src={require(`../../images/AboutServices/${aboutServices.sectionTwo.image}`)}
              alt={aboutServices.sectionTwo.imageDescription}
            />
          </div>
        </div>
      </div>
      <div className="about-services-dark-section-background about-services-container-section-item clip-path-polygon z-index-1">
        <div className="container about-services-container-section-item-list small-container about-services-flex-container">
          <div>
            <h3 className="">{aboutServices.sectionThree.title}</h3>
            {aboutServices.sectionThree.list.map((item, index) => {
              if (index < aboutServices.sectionThree.list.length - 1) {
                return (
                  <div key={index}>
                    <div className="round-circle-light"></div>
                    <p key={index}>{item}</p>
                  </div>
                );
              } else {
                return (
                  <div key={index}>
                    <div className="round-circle-light"></div>
                    <p className="about-services-p-padding-bottom">{item}</p>
                  </div>
                );
              }
            })}
          </div>
          <div className="about-services-img-container">
            <img
              src={require(`../../images/AboutServices/${aboutServices.sectionThree.image}`)}
              alt={aboutServices.sectionThree.imageDescription}
            />
          </div>
        </div>
      </div>
      <div className="about-services-light-section-background about-services-container-section-item">
        <div className="container about-services-container-section-item-list-long small-container">
          <h3 className="gradient-dark-text">
            {aboutServices.sectionFour.title}
          </h3>
          <h4>{aboutServices.sectionFour.title}</h4>
          {aboutServices.sectionFour.list.map((item, index) => {
            return (
              <div key={index}>
                <div className="round-circle-blue-dark"></div>
                <p>{item.paragraph}</p>
              </div>
            );
          })}

          <div className="round-circle-blue-dark"></div>
          <h5>{aboutServices.sectionFour.secondaryParagraph}</h5>
          <div className="round-circle-blue-dark"></div>
          <h4>{aboutServices.sectionFour.conclusionParagraph}</h4>
        </div>
      </div>
    </section>
  );
}

export default AboutServices;
