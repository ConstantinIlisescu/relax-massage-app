import React from "react";
import "./HomeAffiliate.css";
import { Carousel } from "react-responsive-carousel";
import Img1 from "../../../../images/BeautyES.png";
import Img2 from "../../../../images/bjornstrxng.png";
import Img3 from "../../../../images/vision.png";
import Img4 from "../../../../images/linaillab.png";
import { IoOpenOutline } from "react-icons/io5";

function HomeAffiliate() {
  return (
    <section className="home-affiliate-section">
      <div className="home-affiliate-container">
        <h2 className="gradient-dark-text">Business That I Recommend</h2>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          labels={false}
        >
          <div className="home-affiliate-carousel-item">
            <div className="home-affiliate-carousel-item-text">
              <h3>
                <a
                  href="https://linaillab.co.uk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LI Nail Lab
                  <IoOpenOutline />
                </a>
              </h3>
              <p>
                Nail salon in Hednesford, offering great Manicure and Pedicure
                services.
              </p>
            </div>
            <img
              className="home-affiliate-carousel-item-img"
              src={Img4}
              alt="..."
            />
          </div>
          <div className="home-affiliate-carousel-item">
            <div className="home-affiliate-carousel-item-text">
              <h3>
                <a href="https://google.com" target="_blank" rel="noreferrer">
                  BeautyES
                  <IoOpenOutline />
                </a>
              </h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi, mollitia?
              </p>
            </div>
            <img
              className="home-affiliate-carousel-item-img"
              src={Img1}
              alt="..."
            />
          </div>
          <div className="home-affiliate-carousel-item">
            <div className="home-affiliate-carousel-item-text">
              <h3>
                <a href="https://google.com" target="_blank" rel="noreferrer">
                  BJORNSTRXNG
                  <IoOpenOutline />
                </a>
              </h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi, mollitia?
              </p>
            </div>
            <img
              className="home-affiliate-carousel-item-img"
              src={Img2}
              alt="..."
            />
          </div>
          <div className="home-affiliate-carousel-item">
            <div className="home-affiliate-carousel-item-text">
              <h3>
                <a href="https://google.com" target="_blank" rel="noreferrer">
                  VISION
                  <IoOpenOutline />
                </a>
              </h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi, mollitia?
              </p>
            </div>
            <img
              className="home-affiliate-carousel-item-img"
              src={Img3}
              alt="..."
            />
          </div>
          <div className="home-affiliate-carousel-item">
            <div className="home-affiliate-carousel-item-text">
              <h3>
                <a href="https://google.com" target="_blank" rel="noreferrer">
                  LI Nail Lab
                  <IoOpenOutline />
                </a>
              </h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi, mollitia?
              </p>
            </div>
            <img
              className="home-affiliate-carousel-item-img"
              src={Img4}
              alt="..."
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default HomeAffiliate;
