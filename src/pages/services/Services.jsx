import React from "react";
import ServiceItem from "./Components/ServiceItem";
import "./Services.css";
import { services } from "../../Data/services";

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
            {services.servicesPageMainTitle}
          </h2>
          {services.items.map((item, index) => {
            return (
              <ServiceItem
                key={index}
                id={item.serviceId}
                mainTitle={item.serviceTitle}
                durationText={item.serviceDurationText}
                duration={item.serviceDuration}
                priceText={item.servicePriceText}
                price={item.servicePrice}
                currency={item.serviceCurrency}
                img={item.mainImage}
                altImg={item.mainImageDescription}
                secImg={item.serviceDescriptions.image}
                altSecImg={item.serviceDescriptions.imageDescription}
                learnMoreButtonText={services.servicesPageLearnMoreButtonText}
                bookNowButtonText={services.servicesPageButtonText}
                mainDescription={
                  item.serviceDescriptions.serviceMainDescription
                }
                secDescriptions={
                  item.serviceDescriptions.serviceSecDescriptions
                }
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Services;
