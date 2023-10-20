import React from "react";
import "./HomeGift.css";
import Img from "../../../../images/gift.png";
import Button from "../../../../components/button/Button";

function HomeGift() {
  return (
    <section className="home-gift-section clip-path-polygon z-index-1">
      <div className="home-gift-section-container z-index-2">
        <div>
          {/* <h2 className="gradient-light-text">Gift Voucher</h2> */}
          <div className="home-gift-section-image">
            <img src={Img} alt="..." />
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
            Buy a Gift Voucher
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
