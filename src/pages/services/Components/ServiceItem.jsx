import React, { useState } from "react";
import "./ServiceItem.css";
import Button from "../../../components/button/Button";
import { IoOpenOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function ServiceItem({
  mainTitle,
  duration,
  price,
  img,
  secImg,
  altImg,
  mainParagraph,
}) {
  const [toggleOverlay, setToggleOverlay] = useState(false);

  function handleOpenOverlay() {
    setToggleOverlay(true);
  }

  function handleCloseOverlay() {
    setToggleOverlay(false);
  }

  return (
    <>
      <div
        className="services-service-item container"
        onClick={handleOpenOverlay}
      >
        <div className="services-service-item-img">
          <img src={img} alt={altImg} />
        </div>
        <div className="services-service-item-text">
          <h2>{mainTitle}</h2>
          <p>Duration: {duration}</p>
          <p>Price: £{price}</p>
          <span onClick={handleOpenOverlay}>
            Learn More
            <IoOpenOutline />
          </span>
          <Button
            buttonStyle=""
            linkTo="https://relaxmassagestudiocannock.setmore.com/"
            toTarget="_blank"
            isVisible={true}
          >
            Book Now
          </Button>
        </div>
      </div>
      <div
        className={
          toggleOverlay
            ? "services-service-item-overlay-container"
            : "services-service-item-overlay-container hidden"
        }
      >
        <div className="services-service-item-overlay-content">
          <div className="services-service-item-overlay-content-item">
            <div className="services-service-item-overlay-content-item-close">
              <IoMdClose onClick={handleCloseOverlay} />
            </div>
            <div className="services-service-item-overlay-content-item-img">
              <img src={secImg} alt={altImg} />
            </div>
            <h2>{mainTitle}</h2>
            <p>{mainParagraph}</p>
          </div>
          <div className="services-service-item-overlay-content-item">
            <h3>test title overlay</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              excepturi consequatur cupiditate cum nobis aperiam explicabo
              accusamus pariatur sequi ea quia, quidem ipsum quam tenetur fuga
              maxime nam quis voluptatem!
            </p>
          </div>
          <div className="services-service-item-overlay-content-item">
            <h3>test title overlay</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              excepturi consequatur cupiditate cum nobis aperiam explicabo
              accusamus pariatur sequi ea quia, quidem ipsum quam tenetur fuga
              maxime nam quis voluptatem!
            </p>
          </div>
          <div className="services-service-item-overlay-content-item">
            <h3>test title overlay</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              excepturi consequatur cupiditate cum nobis aperiam explicabo
              accusamus pariatur sequi ea quia, quidem ipsum quam tenetur fuga
              maxime nam quis voluptatem!
            </p>
          </div>
          <div className="services-service-item-overlay-content-item">
            <h3>test title overlay</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              excepturi consequatur cupiditate cum nobis aperiam explicabo
              accusamus pariatur sequi ea quia, quidem ipsum quam tenetur fuga
              maxime nam quis voluptatem!
            </p>
          </div>
          <div className="services-service-item-overlay-content-button">
            <Button
              buttonStyle=""
              linkTo="https://relaxmassagestudiocannock.setmore.com/"
              toTarget="_blank"
              isVisible={true}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceItem;
