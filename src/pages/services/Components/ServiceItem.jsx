import React, { useState } from "react";
import "./ServiceItem.css";
import Button from "../../../components/button/Button";
import { IoOpenOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { bookingButton } from "../../../Data/bookingButton";

function ServiceItem({
  id,
  mainTitle,
  durationText,
  duration,
  priceText,
  price,
  currency,
  img,
  altImg,
  secImg,
  altSecImg,
  mainDescription,
  secDescriptions,
  learnMoreButtonText,
  bookNowButtonText,
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
        id={id}
        className="services-service-item container"
        onClick={handleOpenOverlay}
      >
        <div className="services-service-item-img">
          <img src={require(`../../../images/Services/${img}`)} alt={altImg} />
        </div>
        <div className="services-service-item-text">
          <h2>{mainTitle}</h2>
          <p>
            {priceText} <span>{currency}</span>
            {price}
          </p>
          <span onClick={handleOpenOverlay} className="learn-more">
            {learnMoreButtonText}
            <IoOpenOutline />
          </span>
          <Button
            buttonStyle=""
            linkTo={bookingButton.link}
            toTarget="_blank"
            isVisible={true}
          >
            {bookNowButtonText}
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
              <img
                src={require(`../../../images/Services/${secImg}`)}
                alt={altSecImg}
              />
            </div>
            <h2>{mainTitle}</h2>
            <p>{mainDescription}</p>
          </div>
          {secDescriptions.map((service, index) => {
            return (
              <div
                key={index}
                className="services-service-item-overlay-content-item"
              >
                <h3>{service.title}</h3>
                <p>{service.paragraph}</p>
              </div>
            );
          })}

          <div className="services-service-item-overlay-content-button">
            <Button
              buttonStyle=""
              linkTo={bookingButton.link}
              toTarget="_blank"
              isVisible={true}
            >
              {bookNowButtonText}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceItem;
