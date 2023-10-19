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
          <h2 className="services-service-item-container-main-title">
            Services
          </h2>
          <ServiceItem
            mainTitle="EXFOLIATION"
            duration="1h 30m"
            price="35"
            img={Img}
            secImg={Img}
            altImg="..."
            mainParagraph="By removing dead skin cells and unclogging pores, exfoliation
              promotes improved skin texture and a healthy glow. It also
              enhances the effectiveness of moisturizers and treatments,
              allowing them to penetrate deeper. Additionally, exfoliation can
              help reduce ingrown hairs and even out skin tone. Treat yourself
              to a body exfoliation session to reveal softer, more vibrant skin
              and indulge in a pampering self-care experience."
          />
          <ServiceItem
            mainTitle="REIKI HEALING"
            duration="1h"
            price="45"
            img={Img}
            secImg={Img}
            altImg="..."
            mainParagraph=""
          />
          <ServiceItem
            mainTitle="REIKI HEALING"
            duration="1h"
            price="45"
            img={Img}
            secImg={Img}
            altImg="..."
            mainParagraph="Reiki promotes deep relaxation, reduces stress, and supports emotional healing. It can help alleviate physical pain, boost the immune system, and enhance mental clarity. Reiki is a gentle and non-invasive therapy that addresses the root causes of imbalances, providing a holistic approach to healing. Experience the transformative power of Reiki and unlock your inner healing potential."
          />
          <ServiceItem
            mainTitle="GLIDING CUPPING TREATMENTS"
            duration="1h"
            price="45"
            img={Img}
            secImg={Img}
            altImg="..."
          />
          <ServiceItem
            mainTitle="REIKI HEALING"
            duration="1h"
            price="45"
            img={Img}
            secImg={Img}
            altImg="..."
          />
          <ServiceItem
            mainTitle="WORM RATTAN MASSAGE"
            duration="1h"
            price="45"
            img={Img}
            secImg={Img}
            altImg="..."
          />
          <ServiceItem
            mainTitle="GLIDING CUPPING TREATMENTS"
            duration="1h"
            price="45"
            img={Img}
            secImg={Img}
            altImg="..."
          />
        </div>
      </div>
    </>
  );
}

export default Services;
