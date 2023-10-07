import React from "react";
import "./HomeOffers.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Button from "../../../../components/button/Button";
import Img1 from "../../../../images/offer-img.png";

function HomeOffers() {
  return (
    <>
      <section className="home-offers-section clip-path-polygon z-index-1">
        <div className="circle-animation home-offers-section-container"></div>
        <div className="home-offers-section-group container">
          <div className="home-offers-section-group-title">
            <div className="home-offers-section-group-title-container">
              <div className="home-offers-section-group-title-container-first"></div>
              <div className="home-offers-section-group-title-container-second">
                <h2>Special Offer</h2>
              </div>
            </div>
          </div>
          <div className="home-offers-section-group-offer-group">
            <h3>REIKI HEALING SESSION</h3>
            <p className="home-offers-section-group-offer-group-price">
              ONLY <span>£</span>40
            </p>
            <p className="home-offers-section-group-offer-group-price-savings">
              Priced at
              <span className="full-price">
                <s>
                  <span> £</span>50
                </s>
              </span>
              <span className="save">
                Save <span>£</span>10
              </span>
            </p>
          </div>
          <div className="home-offers-section-group-footer">
            <div className="btn-container">
              <div className="button">
                <Button buttonStyle="btn--xl--round" isVisible={true}>
                  BOOK NOW <span>DON'T MISS OUT!</span>
                </Button>
              </div>
            </div>
            <div className="text">
              <p>Offer valid ONLY for appointments made in October 2023</p>
              <p>Offer ends 31/10/2023</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeOffers;
