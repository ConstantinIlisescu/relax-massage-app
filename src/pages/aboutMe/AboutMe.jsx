import React from "react";
import "./AboutMe.css";
import {
  AiOutlinePhone,
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiFillYoutube,
} from "react-icons/ai";
import { BsCurrencyPound } from "react-icons/bs";
import { BiMap, BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { aboutMe } from "../../Data/aboutMe";
import { contactInfo } from "../../Data/contactInfo";
import { schedule } from "../../Data/schedule";
import { bookingButton } from "../../Data/bookingButton";
import Button from "../../components/button/Button";

function AboutMe() {
  return (
    <section id="about-me" className="about-me-page-container">
      <div className="container">
        {" "}
        <div className="about-me-page-container-about-me-section">
          <div className="about-me-page-container-about-me-section-img-container">
            <div>
              <h2 className="gradient-dark-text">{aboutMe.title}</h2>
              <p>{aboutMe.descriptionOne}</p>
            </div>
            <img
              src={require(`../../images/AboutMe/${aboutMe.imageOne}`)}
              alt={aboutMe.imageOneDescription}
            />
          </div>
          <div className="member-off">
            <span>{aboutMe.memberSectionText}</span>
            <div className="member-off-img-section">
              {aboutMe.memberSectionList.map((item, index) => (
                <img
                  key={index}
                  src={require(`../../images/AboutMe/${item.memberSectionImage}`)}
                  alt={item.memberSectionImageDescription}
                />
              ))}
            </div>
          </div>
          <div className="member-of-lines">
            <div className="member-of-lines-one"></div>
            <div className="member-of-lines-two"></div>
            <div className="member-of-lines-three"></div>
            <div className="member-of-lines-four"></div>
            <div className="member-of-lines-five"></div>
          </div>
          {aboutMe.list.map((item, index) => (
            <div
              key={index}
              className={
                index % 2 === 0
                  ? "about-me-page-container-about-me-section-img2-container-reverse"
                  : "about-me-page-container-about-me-section-img2-container"
              }
            >
              <p>{item.paragraph}</p>
              <img
                src={require(`../../images/AboutMe/${item.image}`)}
                alt={item.imageDescription}
              />
            </div>
          ))}
          <div className="home-contacts-button section-top z-index-1">
            <Button
              buttonStyle=""
              linkTo={bookingButton.link}
              toTarget="_blank"
              isVisible={true}
            >
              {contactInfo.mainBookAppointmentButton}
            </Button>
          </div>
        </div>
      </div>

      <div
        id="working-hours"
        className="about-services-dark-section-background clip-path-polygon z-index-1"
      >
        <div className="working-hours-container">
          <h3 className="gradient-light-text">{schedule.title}</h3>
          <p className="working-hours-by-appointment-only">
            {schedule.subTitle}
          </p>
          <div className="working-hours-container-schedule">
            {schedule.list.map((item, index) => (
              <div
                key={index}
                className="working-hours-container-schedule-item"
              >
                <span>{item.day}</span>
                <span>{item.schedule}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        id="contact-me"
        className="about-me-page-container-contact-me-section container"
      >
        <h3 className="gradient-dark-text"> {contactInfo.contactText}</h3>
        <div className="about-me-page-container-contact-me-section-contacts z-index-1">
          <div className="contact-info-icons">
            <div className="home-contacts-phone">
              <a href={contactInfo.phone} target="_blank" rel="noreferrer">
                <AiOutlinePhone />
              </a>
              <a href={contactInfo.phone} target="_blank" rel="noreferrer">
                {contactInfo.phoneDisplay}
              </a>
            </div>
            <div className="home-contacts-phone">
              <a href={contactInfo.whatsapp} target="_blank" rel="noreferrer">
                <AiOutlineWhatsApp />
              </a>
              <a href={contactInfo.whatsapp} target="_blank" rel="noreferrer">
                {contactInfo.whatsappDisplay}
              </a>
            </div>
            <div className="home-contacts-phone">
              <a href={contactInfo.email} target="_blank" rel="noreferrer">
                <AiOutlineMail />
              </a>
              <a href={contactInfo.email} target="_blank" rel="noreferrer">
                {contactInfo.emailDisplay}
              </a>
            </div>
          </div>
          <div className="contact-info-icons">
            <div className="home-contacts-phone">
              <a href={contactInfo.facebook} target="_blank" rel="noreferrer">
                <BiLogoFacebook />
              </a>
              <a href={contactInfo.facebook} target="_blank" rel="noreferrer">
                {contactInfo.facebookDisplay}
              </a>
            </div>
            <div className="home-contacts-phone">
              <a href={contactInfo.instagram} target="_blank" rel="noreferrer">
                <BiLogoInstagram />
              </a>
              <a href={contactInfo.instagram} target="_blank" rel="noreferrer">
                {contactInfo.instagramDisplay}
              </a>
            </div>
            <div className="home-contacts-phone">
              <a href={contactInfo.youtube} target="_blank" rel="noreferrer">
                <AiFillYoutube />
              </a>
              <a href={contactInfo.youtube} target="_blank" rel="noreferrer">
                {contactInfo.youtubeDisplay}
              </a>
            </div>
          </div>
        </div>
        <div className="contacts-button-container">
          <div className="home-contacts-button z-index-1">
            <Button
              buttonStyle=""
              linkTo={bookingButton.link}
              toTarget="_blank"
              isVisible={true}
            >
              {contactInfo.mainBookAppointmentButton}
            </Button>
          </div>
        </div>
        <div className="payment-section">
          <p>{contactInfo.paymentOptions}</p>
        </div>
      </div>
      <div className="member-of-lines">
        <div className="member-of-lines-one"></div>
        <div className="member-of-lines-two"></div>
        <div className="member-of-lines-three"></div>
        <div className="member-of-lines-four"></div>
        <div className="member-of-lines-five"></div>
      </div>
      <div className="about-me-page-container-where-to-find-me-section container">
        <h3 className="gradient-dark-text">{contactInfo.whereToFindMeText}</h3>
        <div className="home-contacts-address z-index-1">
          <a href={contactInfo.address} target="_blank" rel="noreferrer">
            <BiMap />
          </a>
          <a href={contactInfo.address} target="_blank" rel="noreferrer">
            {contactInfo.addressDisplay} <br />
            {contactInfo.addressDisplayPostcode}
          </a>
        </div>
        <iframe
          title="iframe-unique"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2417.631740286186!2d-1.9779674237422784!3d52.702741822684466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a0abe80d983ff%3A0x7aa752da9dc03ab6!2s34%20Haymaker%20Way%2C%20Wimblebury%2C%20Cannock%20WS12%200FU!5e0!3m2!1sen!2suk!4v1697833281619!5m2!1sen!2suk"
          loading="lazy"
        ></iframe>
      </div>
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
