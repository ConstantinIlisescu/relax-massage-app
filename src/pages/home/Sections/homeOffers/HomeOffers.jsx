import React from "react";
import "./HomeOffers.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Button from "../../../../components/button/Button";
import { homeOffers } from "../../../../Data/home/homeOffers";
import { bookingButton } from "../../../../Data/bookingButton";

function HomeOffers() {
  return (
    <>
      <section
        id="home-offers"
        className="home-offers-section clip-path-polygon z-index-1"
      >
        <div className="circle-animation home-offers-section-container"></div>
        <div className="home-offers-section-group">
          <div className="home-offers-section-group-title">
            <img
              src={require(`../../../../images/Home/${homeOffers.titleImage}`)}
              alt={homeOffers.titleImageDescription}
            />
          </div>
          <div className="home-offers-section-group-offer-group">
            <h3>{homeOffers.offerTitle}</h3>
            <p className="home-offers-section-group-offer-group-price">
              {homeOffers.only} <span>{homeOffers.currency}</span>
              {homeOffers.priceAmount}
            </p>
            <p className="home-offers-section-group-offer-group-price-savings">
              {homeOffers.pricedAt}
              <span className="full-price">
                <s>
                  <span> {homeOffers.currency}</span>
                  {homeOffers.pricedAtAmount}
                </s>
              </span>
              <span className="save">
                {homeOffers.save} <span>{homeOffers.currency}</span>
                {homeOffers.saveAmount}
              </span>
            </p>
            <div className="home-offers-section-group-footer">
              <div className="btn-container">
                <div className="button">
                  <Button
                    buttonStyle="btn--primary"
                    isVisible={true}
                    linkTo={bookingButton.link}
                    toTarget="_blank"
                  >
                    {homeOffers.buttonMainText} <br />
                    <span>{homeOffers.buttonSubtext}</span>
                  </Button>
                </div>
              </div>
              <div className="text">
                <p>{homeOffers.offerInfo}</p>
                <p>{homeOffers.offerEndTime}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeOffers;
