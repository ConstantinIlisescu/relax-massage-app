import React from "react";
import "./HomeAffiliate.css";
import { Carousel } from "react-responsive-carousel";
import { IoOpenOutline } from "react-icons/io5";
import { homeAffiliate } from "../../../../Data/home/homeAffiliate";

function HomeAffiliate() {
  return (
    <section id="home-affiliate" className="home-affiliate-section">
      <div className="home-affiliate-container">
        <h2 className="gradient-dark-text">{homeAffiliate.mainTitle}</h2>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          labels={false}
        >
          {homeAffiliate.business.map((item, index) => {
            return (
              <div key={index} className="home-affiliate-carousel-item">
                <div className="home-affiliate-carousel-item-text">
                  <h3>
                    <a
                      href={item.businessLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.businessName}
                      <IoOpenOutline />
                    </a>
                  </h3>
                  <p>{item.businessDescription}</p>
                </div>
                <img
                  className="home-affiliate-carousel-item-img"
                  src={require(`../../../../images/${item.businessImage}`)}
                  alt={item.imageDescription}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}

export default HomeAffiliate;
