import React from "react";
import "./HomeAboutMe.css";
import { HashLink } from "react-router-hash-link";
import { homeAboutMe } from "../../../../Data/home/homeAboutMe";

function HomeAboutMe() {
  return (
    <section
      id="home-about-me"
      className="home-about-me page-padding clip-path-polygon z-index-1"
    >
      <div className="section-container container">
        <div className="home-about-me-img">
          <img
            src={require(`../../../../images/Home/${homeAboutMe.image}`)}
            alt={homeAboutMe.imageDescription}
            className="shadow"
          />
        </div>
        <div>
          <h2 className="gradient-light-text ">{homeAboutMe.title}</h2>
          <div>
            <p className="home-about-me-paragraph">{homeAboutMe.paragraph}</p>
            <HashLink
              to="relax-massage-app/about#about-me"
              className="btn--outline hover-effect-light"
            >
              {homeAboutMe.buttonText}
            </HashLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAboutMe;
