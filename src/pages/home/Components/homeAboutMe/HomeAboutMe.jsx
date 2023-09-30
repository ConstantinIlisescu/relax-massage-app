import React from "react";
import AboutMeImg from "../../../../images/about-me-massage.jpg";
import "./HomeAboutMe.css";
import Button from "../../../../components/button/Button";

function HomeAboutMe() {
  return (
    <div id="home-about-me" className="home-about-me page-padding">
      <div className="section-container container">
        <div className="home-about-me-img">
          <img src={AboutMeImg} alt="Women doing massage" className="shadow" />
        </div>
        <div>
          <h2 className="gradient-light-text ">About Me</h2>
          <div>
            <p className="home-about-me-paragraph">
              I offer massages, body treatments and Reiki healing to help you
              unwind and de-stress. I use a variety of techniques to promote
              relaxation and well-being.
            </p>
            <Button buttonStyle="btn--outline" onClick="" isVisible={true}>
              Read more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAboutMe;
