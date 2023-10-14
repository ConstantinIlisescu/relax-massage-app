import React from "react";
import ServiceItem from "./Components/ServiceItem";
import "./Services.css";
import Img from "./../../images/exfoliation.png";

function Services() {
  return (
    <>
      <div className="services-moving-background">
        <div class="blob-c">
          <div class="shape-blob"></div>
          <div class="shape-blob one"></div>
          <div class="shape-blob two"></div>
          <div class="shape-blob three"></div>
          <div class="shape-blob four"></div>
          <div class="shape-blob five"></div>
          <div class="shape-blob six"></div>
          <div class="shape-blob seven"></div>
          <div class="shape-blob eight"></div>
          <div class="shape-blob nine"></div>
          <div class="shape-blob ten"></div>
          <div class="shape-blob eleven"></div>
          <div class="shape-blob twelve"></div>
        </div>
        <div className="services-service-item-container">
          <ServiceItem
            mainTitle="EXFOLIATION"
            mainParagraph="Treat yourself to a body exfoliation session to reveal softer, more vibrant skin and indulge in a pampering self-care experience."
            img={Img}
          />
          <ServiceItem
            mainTitle="REIKI HEALING"
            mainParagraph="Experience the transformative power of Reiki and unlock your inner healing potential."
            img={Img}
            className="reverse"
          />
        </div>
      </div>
    </>
  );
}

export default Services;
