import React from "react";
import "./AboutMe.css";
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";
import { BiMap, BiLogoFacebook } from "react-icons/bi";
import { aboutMe } from "../../Data/aboutMe";
import { contactInfo } from "../../Data/contactInfo";

function AboutMe() {
  return (
    <section id="about-me" className="about-me-page-container container">
      <div className="about-me-page-container-about-me-section">
        <div className="about-me-page-container-about-me-section-img1-container">
          <div>
            <h2 className="gradient-dark-text">{aboutMe.title}</h2>
            <p>{aboutMe.descriptionOne}</p>
          </div>
          <img
            src={require(`../../images/AboutMe/${aboutMe.imageOne}`)}
            alt={aboutMe.imageOneDescription}
          />
        </div>
        <div className="about-me-page-container-about-me-section-img2-container">
          <p>{aboutMe.descriptionTwo}</p>
          <img
            src={require(`../../images/AboutMe/${aboutMe.imageTwo}`)}
            alt={aboutMe.imageTwoDescription}
          />
        </div>
        <div className="member-off">
          <span>{aboutMe.memberSectionText}</span>
          <img
            src={require(`../../images/AboutMe/${aboutMe.memberSectionImage}`)}
            alt={aboutMe.memberSectionImageDescription}
          />
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
        <h3 className="gradient-dark-text"> {aboutMe.contactText}</h3>
        <div className="about-me-page-container-contact-me-section-contacts z-index-1">
          <div>
            <div className="home-contacts-phone">
              <a href={contactInfo.phone}>
                <AiOutlinePhone />
              </a>
              <a href={contactInfo.phone}>{contactInfo.phoneDisplay}</a>
            </div>
            <div className="home-contacts-phone">
              <a href={contactInfo.whatsapp}>
                <AiOutlineWhatsApp />
              </a>
              <a href={contactInfo.whatsapp}>{contactInfo.whatsappDisplay}</a>
            </div>
          </div>
          <div>
            <div className="home-contacts-phone">
              <a href={contactInfo.facebook} target="_blank" rel="noreferrer">
                <BiLogoFacebook />
              </a>
              <a href={contactInfo.facebook} target="_blank" rel="noreferrer">
                {contactInfo.facebookDisplay}
              </a>
            </div>
            <div className="home-contacts-address">
              <a target="_blank" rel="noreferrer" href={contactInfo.address}>
                <BiMap />
              </a>
              <a target="_blank" rel="noreferrer" href={contactInfo.address}>
                {contactInfo.addressDisplay} <br />
                addressDisplayPostcode
              </a>
            </div>
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
