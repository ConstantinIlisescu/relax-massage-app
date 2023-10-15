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
            duration="1h 30m"
            price="35"
            img={Img}
          />
          <ServiceItem
            mainTitle="REIKI HEALING"
            duration="1h"
            price="45"
            img={Img}
          />
          <ServiceItem
            mainTitle="REIKI HEALING"
            duration="1h"
            price="45"
            img={Img}
          />
          <ServiceItem
            mainTitle="GLIDING CUPPING TREATMENTS"
            duration="1h"
            price="45"
            img={Img}
          />
          <ServiceItem
            mainTitle="REIKI HEALING"
            duration="1h"
            price="45"
            img={Img}
          />
          <ServiceItem
            mainTitle="WORM RATTAN MASSAGE"
            duration="1h"
            price="45"
            img={Img}
          />
          <ServiceItem
            mainTitle="GLIDING CUPPING TREATMENTS"
            duration="1h"
            price="45"
            img={Img}
          />
        </div>
      </div>
    </>
  );
}

export default Services;
