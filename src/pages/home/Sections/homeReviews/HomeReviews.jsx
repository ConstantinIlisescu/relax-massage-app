import React from "react";
import { Carousel } from "react-responsive-carousel";
import Button from "../../../../components/button/Button";
import "./HomeReviews.css";
import { homeReviews } from "../../../../Data/home/homeReviews";
import { IoIosArrowForward } from "react-icons/io";

function HomeReviews() {
  return (
    <section id="home-reviews" className="home-reviews-section z-index-1">
      <div className="home-reviews-section-container">
        <h2 className="gradient-dark-text">{homeReviews.mainTitle}</h2>
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
        <span>
          <Button
            buttonStyle="btn--outline-dark"
            onClick=""
            isVisible={true}
            linkTo={homeReviews.buttonLinkTo}
            toTarget="_blank"
          >
            {homeReviews.buttonText}
            <span className="round-arrow">
              <IoIosArrowForward />
            </span>
          </Button>
        </span>
      </div>
    </section>
  );
}

export default HomeReviews;
