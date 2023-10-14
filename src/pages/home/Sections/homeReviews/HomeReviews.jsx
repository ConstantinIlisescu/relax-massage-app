import React from "react";
import { Carousel } from "react-responsive-carousel";
import Button from "../../../../components/button/Button";
import "./HomeReviews.css";

function HomeReviews() {
  return (
    <section className="home-reviews-section z-index-1">
      <div className="home-reviews-section-container">
        <h2 className="gradient-dark-text">My clients</h2>
        <div className="home-reviews-section-container-subtitle">
          <span className="title-line"></span>
          <h3>Reviews</h3>
        </div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          labels={false}
          className="z-index-1"
        >
          <div className="home-reviews-section-container-carousel-item">
            <p>
              Had a wonderful bamboo sticks massage last night, very relaxing,
              fantastic as usual, loved the sounds the bamboo made on my skin as
              I was massaged , another lovely treatment, thank you 👍❤️
            </p>
            <h3>Ruth</h3>
          </div>
          <div className="home-reviews-section-container-carousel-item">
            <p>
              The best massage and facial I've ever had, Aneta is so lovely and
              friendly and immediately creates a peaceful and relaxing
              environment, heavily recommend and can't wait to go back!
            </p>
            <h3>Chloe</h3>
          </div>
          <div className="home-reviews-section-container-carousel-item">
            <p>
              Fantastic first massage with Aneta.I felt very comfortable and
              relaxed.Will definitely recommend and can't wait to return.
            </p>
            <h3>Zoey Talbot</h3>
          </div>
          <div className="home-reviews-section-container-carousel-item">
            <p>
              Aneta was amazing! I felt so comfortable and can't wait to visit
              again
            </p>
            <h3>Lauren</h3>
          </div>
          <div className="home-reviews-section-container-carousel-item">
            <p>
              Fantastic service as always. So friendly & such a relaxing
              environment. Can recommend the hot stone massage.
            </p>
            <h3>Rebecca</h3>
          </div>
          <div className="home-reviews-section-container-carousel-item">
            <p>Amazing, so friendly and welcoming, you won't regret booking</p>
            <h3>Zachary Clayton</h3>
          </div>
        </Carousel>
        <Button
          buttonStyle="btn--outline-dark"
          onClick=""
          isVisible={true}
          linkTo="https://relaxmassagestudiocannock.setmore.com/reviews"
          toTarget="_blank"
        >
          Leave a review
        </Button>
      </div>
    </section>
  );
}

export default HomeReviews;
