import React from "react";
import "./HomeGift.css";
import Button from "../../../../components/button/Button";
import { homeGift } from "../../../../Data/home/homeGift";

function HomeGift() {
  return (
    <section
      id="home-gift"
      className="home-gift-section clip-path-polygon z-index-1"
    >
      <div className="home-gift-section-container z-index-2">
        <div>
          <h2 className="gradient-light-text">{homeGift.title}</h2>
          <div className="home-gift-section-image">
            <img
              src={require(`../../../../images/${homeGift.mainImage}`)}
              alt={homeGift.mainImageDescription}
            />
          </div>
        </div>
        <div className="home-gift-section-button">
          {" "}
          <Button
            buttonStyle=""
            linkTo="https://squareup.com/gift/MLJE3J2WEEYZ8/order"
            toTarget="_blank"
            isVisible={true}
          >
            {homeGift.buttonText}
          </Button>
        </div>
      </div>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
}

export default HomeGift;
