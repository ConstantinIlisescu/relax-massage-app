import React from "react";
import "./HomeOffers.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Button from "../../../../components/button/Button";
import Img1 from "../../../../images/female-model-having-massage-spa.jpg";
import Img2 from "../../../../images/massage-on-woman-arm.jpg";
import Img3 from "../../../../images/woman-relaxing-spa.jpg";

function HomeOffers() {
  return (
    <section className="home-offers-section clip-path-polygon z-index-1">
      <div className="container home-offers-carousel-container ">
        <div className="carousel-item-container">
          <div className="carousel-item-img">
            <img src={Img1} alt="" />
            <span></span>
          </div>
          <div className="carousel-item-text-group">
            <div className="carousel-item-text-group-title">
              <span className="title-line"></span>
              <h2>Special Offer</h2>
            </div>
            <p className="carousel-item-text-group-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              culpa.
            </p>
            <div className="button">
              <Button buttonStyle="btn--xl--round" isVisible={true}>
                Book now
              </Button>
            </div>
          </div>
          <h3 className="-carousel-item-offer-title">
            Offer title Lorem ipsum dolor sit amet
          </h3>
        </div>
      </div>
    </section>
  );
}

export default HomeOffers;
