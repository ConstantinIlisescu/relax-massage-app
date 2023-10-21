import React from "react";
import "./HomeHome.css";
import mainImg from "../../../../images/main-img.png";
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";
import { BiMap, BiLogoFacebook } from "react-icons/bi";
import Button from "../../../../components/button/Button";

function HomeHome() {
  return (
    <section id="home" className="page-padding">
      <div className="section-container">
        <div className="home-description-main-title">
          <div className="home-description">
            <div className="home-description-title">
              <h3>Massage Studio</h3>
              <span className="title-line"></span>
            </div>
            <p>Relax, lie back and let me take away your stress......</p>
          </div>
          <div className="home-main-title">
            <h1>
              <span className="gradient-dark-text">GIVE</span>
              <span className="gradient-dark-text">YOURSELF</span>
              <span className="gradient-dark-text">A LITTLE</span>
              <span className="gradient-dark-text">PAMPERING</span>
            </h1>
            <div className="home-main-image">
              <img src={mainImg} alt="..." />
            </div>
          </div>
        </div>
        <div className="home-contacts">
          <div className="home-contacts-phone">
            <a href="tel:01543524924">
              <AiOutlinePhone />
            </a>
            <a href="tel:01543524924">01543 524 924</a>
          </div>
          <div className="home-contacts-phone">
            <a href="https://wa.me/01543524924">
              <AiOutlineWhatsApp />
            </a>
            <a href="https://wa.me/01543524924">WhatsApp</a>
          </div>
          <div className="home-contacts-phone">
            <a
              href="https://www.facebook.com/profile.php?id=100084589461441"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoFacebook />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100084589461441"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
          <div className="home-contacts-address">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/maps/place/34+Haymaker+Way,+Wimblebury,+Cannock+WS12+0FU/@52.7027386,-1.9753925,17z/data=!3m1!4b1!4m6!3m5!1s0x487a0abe80d983ff:0x7aa752da9dc03ab6!8m2!3d52.7027386!4d-1.9753925!16s%2Fg%2F11c5dctl26?entry=ttu"
            >
              <BiMap />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/maps/place/34+Haymaker+Way,+Wimblebury,+Cannock+WS12+0FU/@52.7027386,-1.9753925,17z/data=!3m1!4b1!4m6!3m5!1s0x487a0abe80d983ff:0x7aa752da9dc03ab6!8m2!3d52.7027386!4d-1.9753925!16s%2Fg%2F11c5dctl26?entry=ttu"
            >
              34 Haymaker Way, Wimblebury, Cannock <br />
              WS12 0FU
            </a>
          </div>
        </div>
        <div className="home-contacts-button">
          <Button
            buttonStyle=""
            linkTo="https://relaxmassagestudiocannock.setmore.com/"
            toTarget="_blank"
            isVisible={true}
          >
            Make an Appointment
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HomeHome;
