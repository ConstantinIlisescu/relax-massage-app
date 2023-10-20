import React from "react";
import "./AboutMe.css";
import Img1 from "../../images/about-me.jpg";
import Img2 from "../../images/about-me-massage.jpg";
import Img3 from "../../images/fht.png";
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";
import { BiMap } from "react-icons/bi";

function AboutMe() {
  return (
    <section className="about-me-page-container container">
      <div className="about-me-page-container-about-me-section">
        <div className="about-me-page-container-about-me-section-img1-container">
          <div>
            <h2 className="gradient-dark-text">ABOUT ME</h2>
            <p>
              I offer massages, body treatments and Reiki healing to help you
              unwind and de-stress. I use a variety of techniques to promote
              relaxation and well-being.
            </p>
          </div>
          <img src={Img1} alt="..." />
        </div>
        <div className="about-me-page-container-about-me-section-img2-container">
          <p>
            My peaceful studio is the perfect place to escape the hustle and
            bustle of daily life and allow yourself to fully relax. I am
            dedicated to providing an exceptional experience that leaves you
            feeling rejuvenated and refreshed. I look forward to welcoming you
            to the studio and helping you to relax and unwind.
          </p>
          <img src={Img2} alt="..." />
        </div>
        <div className="member-off">
          <span>Member of</span> <img src={Img3} alt="..." />
        </div>
        <div className="member-of-lines">
          <div className="member-of-lines-one"></div>
          <div className="member-of-lines-two"></div>
          <div className="member-of-lines-three"></div>
          <div className="member-of-lines-four"></div>
          <div className="member-of-lines-five"></div>
        </div>
      </div>
      <div
        id="contact-me"
        className="about-me-page-container-contact-me-section"
      >
        <h3 className="gradient-dark-text"> Contact me</h3>
        <div className="about-me-page-container-contact-me-section-contacts">
          <div className="home-contacts-phone">
            <AiOutlinePhone />
            <a href="tel:01543524924">01543 524 924</a>
          </div>
          <div className="home-contacts-phone">
            <AiOutlineWhatsApp />
            <a href="https://wa.me/01543524924">WhatsApp</a>
          </div>
          <div className="home-contacts-address">
            <BiMap />
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
      </div>
      <iframe
        title="iframe-unique"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2417.631740286186!2d-1.9779674237422784!3d52.702741822684466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a0abe80d983ff%3A0x7aa752da9dc03ab6!2s34%20Haymaker%20Way%2C%20Wimblebury%2C%20Cannock%20WS12%200FU!5e0!3m2!1sen!2suk!4v1697833281619!5m2!1sen!2suk"
        loading="lazy"
      ></iframe>
      <div class="area-about-me">
        <ul class="circles-about-me">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
