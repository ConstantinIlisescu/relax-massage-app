import React from "react";
import { HashLink } from "react-router-hash-link";
import "./HomeServices.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../../../../components/button/Button";
import Img1 from "../../../../images/home-services-1.jpg";
import Img2 from "../../../../images/home-services-2.jpg";
import Img3 from "../../../../images/home-services-3.jpg";

function HomeServices() {
  return (
    <section id="home-services" className="container home-services-section">
      <div className="home-services-text-section">
        <h2 className="gradient-dark-text">Techniques</h2>
        <div className="home-services-subtitle">
          <span className="title-line"></span>
          <h3>My Services</h3>
        </div>
        <ul className="home-services-list">
          <li className="home-services-list-item">
            <h4 className="price">
              £<span>129</span>
            </h4>
            <div className="text">
              <h4 className="">Service name</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus, ipsum molestiae.
              </p>
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
          <li className="home-services-list-item">
            <h4 className="price">
              £<span>129</span>
            </h4>
            <div className="text">
              <h4 className="">Service name</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus, ipsum molestiae.
              </p>
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
          <li className="home-services-list-item">
            <h4 className="price">
              £<span>129</span>
            </h4>
            <div className="text">
              <h4 className="">Service name</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus, ipsum molestiae.
              </p>
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
          <li className="home-services-list-item">
            <h4 className="price">
              £<span>129</span>
            </h4>
            <div className="text">
              <h4 className="">Service name</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus, ipsum molestiae.
              </p>
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
        </ul>
        <div className="home-services-button">
          <Button buttonStyle="btn--primary" isVisible={true}>
            <HashLink to="relax-massage-app/services/#">
              See All Services
            </HashLink>
          </Button>
        </div>
      </div>
      <div className="home-services-img-section">
        <div className="home-services-img one">
          <img src={Img1} alt="ratan hot sticks massage" />
        </div>
        <div className="home-services-img two">
          <img src={Img2} alt="hot stones massage" />
        </div>
        <div className="home-services-img three">
          <img src={Img3} alt="cliding-cupping massage" />
        </div>
      </div>
    </section>
  );
}

export default HomeServices;
