import React from "react";
import "./ServiceItem.css";
import Button from "../../../components/button/Button";
import { IoOpenOutline } from "react-icons/io5";

function ServiceItem({ mainTitle, mainParagraph, img }) {
  return (
    <>
      <div className="service-item container">
        <div className="service-item-text">
          <h2>{mainTitle}</h2>
          <p>
            {mainParagraph}
            <span>
              Learn More
              <IoOpenOutline />
            </span>
          </p>
          <Button
            buttonStyle=""
            linkTo="https://relaxmassagestudiocannock.setmore.com/"
            toTarget="_blank"
            isVisible={true}
          >
            Book Now
          </Button>
        </div>
        <div className="service-item-img">
          <img src={img} alt="..." />
        </div>
      </div>
      <div className="service-item-overlay-container">
        <div className="service-item-overlay-content">
          <div className="service-item-overlay-content-item">
            <h3>test title overlay</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              excepturi consequatur cupiditate cum nobis aperiam explicabo
              accusamus pariatur sequi ea quia, quidem ipsum quam tenetur fuga
              maxime nam quis voluptatem!
            </p>
          </div>
          <div className="service-item-overlay-content-item">
            <h3>test title overlay</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              excepturi consequatur cupiditate cum nobis aperiam explicabo
              accusamus pariatur sequi ea quia, quidem ipsum quam tenetur fuga
              maxime nam quis voluptatem!
            </p>
          </div>
          <div className="service-item-overlay-content-item">
            <h3>test title overlay</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              excepturi consequatur cupiditate cum nobis aperiam explicabo
              accusamus pariatur sequi ea quia, quidem ipsum quam tenetur fuga
              maxime nam quis voluptatem!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceItem;
