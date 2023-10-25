import React from "react";
import { Carousel } from "react-responsive-carousel";
import Button from "../../../../components/button/Button";
import "./HomeReviews.css";
import { homeReviews } from "../../../../Data/home/homeReviews";

function HomeReviews() {
  return (
    <section id="home-reviews" className="home-reviews-section z-index-1">
      <div className="home-reviews-section-container">
        <h2 className="gradient-dark-text">{homeReviews.mainTitle}</h2>
        <div className="home-reviews-section-container-subtitle">
          <span className="title-line"></span>
          <h3>{homeReviews.subTitle}</h3>
        </div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          labels={false}
          className="z-index-1"
        >
          {homeReviews.reviews.map((review, index) => {
            return (
              <div
                key={index}
                className="home-reviews-section-container-carousel-item"
              >
                <p>{review.reviewParagraph}</p>
                <h3>{review.name}</h3>
              </div>
            );
          })}
        </Carousel>
        <Button
          buttonStyle="btn--outline-dark"
          onClick=""
          isVisible={true}
          linkTo="https://relaxmassagestudiocannock.setmore.com/reviews"
          toTarget="_blank"
        >
          {homeReviews.buttonText}
        </Button>
      </div>
    </section>
  );
}

export default HomeReviews;
