import React from "react";
import "./AboutServices.css";
import Img from "../../images/about-services.png";
import Img1 from "../../images/about-services-two.png";
import Img2 from "../../images/about-services-three.png";

function AboutServices() {
  return (
    <section id="#" className="about-services-container">
      <div className="about-services-dark-section-background about-services-container-first-section clip-path-polygon-top z-index-1">
        <div className="container about-services-flex-container">
          <div className="about-services-container-first-section-text">
            <h2>IT'S NOT JUST ABOUT HAVING A MASSAGE ...</h2>
            <h3>IT'S ABOUT YOUR WELLBEING</h3>
            <p>
              There are many benefits to receiving a massage, including improved
              circulation, increased relaxation, and a boost to the immune
              system. Massage can also help to improve sleep, reduce anxiety and
              depression, and increase flexibility and range of motion. When you
              are looking to relax and unwind a massage can be a powerful tool
              for overall well-being
            </p>
          </div>
          <div className="about-services-img-container">
            <img src={Img} alt="..." />
          </div>
        </div>
      </div>
      <div className="about-services-light-section-background about-services-container-section-item">
        <div className="container about-services-flex-container about-services-flex-direction-reverse">
          <div className="about-services-container-second-section-text">
            <h3 className="gradient-dark-text">WHAT EXACTLY IS A MASSAGE?</h3>
            <p className="about-services-p-padding-bottom">
              Through skilled touch and manipulation, massage alleviates muscle
              tension, reduces pain, and enhances flexibility. Massage improves
              blood circulation, which aids in delivering oxygen and nutrients
              to tissues while removing toxins. Massage also promotes
              relaxation, reduces stress, and boosts mood by stimulating the
              release of endorphins. Additionally, massage can improve sleep
              quality and alleviate anxiety and depression symptoms.
            </p>
          </div>
          <div className="about-services-img-container">
            <img src={Img1} alt="..." />
          </div>
        </div>
      </div>
      <div className="about-services-dark-section-background about-services-container-section-item clip-path-polygon z-index-1">
        <div className="container about-services-container-section-item-list small-container about-services-flex-container">
          <div>
            <h3 className="">What I Promise You</h3>
            <div className="round-circle-light"></div>
            <p>Non-toxic products</p>
            <div className="round-circle-light"></div>
            <p>Insured & certified service</p>
            <div className="round-circle-light"></div>
            <p>Clean and safe environment</p>
            <div className="round-circle-light"></div>
            <p className="about-services-p-padding-bottom">
              A relaxing experience
            </p>
          </div>
          <div className="about-services-img-container">
            <img src={Img2} alt="..." />
          </div>
        </div>
      </div>
      <div className="about-services-light-section-background about-services-container-section-item">
        <div className="container about-services-container-section-item-list-long small-container">
          <h3 className="gradient-dark-text">What To Expect</h3>
          <h4>
            As a professional massage therapist, I would like to welcome new
            customers to my massage studio and assure them that their experience
            will be as comfortable and relaxing as possible. Here is a step by
            step guide on what to expect when visiting my studio for the first
            time:
          </h4>
          <div className="round-circle-blue-dark"></div>
          <p>
            Upon arrival, I will greet you and escort you to the studio. We will
            have an informal chat and I will take contact information for you,
            any relevant medical history, and any specific areas of concern or
            goals for the massage.
          </p>
          <div className="round-circle-blue-dark"></div>
          <p>
            I will then ask you to get undressed to your comfort level and lie
            down on the massage table under a sheet. I will step out of the room
            to give you privacy and time to undress.
          </p>
          <div className="round-circle-blue-dark"></div>
          <p>
            Once you are ready, I will return to the studio and begin the
            massage. I will use a combination of techniques, such as long
            strokes, kneading, and light pressure, to relax and release tension
            in the muscles.
          </p>
          <div className="round-circle-blue-dark"></div>
          <p>
            Your visit to my massage studio is all about you. I will follow your
            lead in regards to what makes you feel comfortable. If you feel like
            talking to me during the session please do so - or if you prefer to
            remain silent or even fall asleep - that's also fine by me.
          </p>
          <div className="round-circle-blue-dark"></div>
          <p>
            After the massage, I will step out of the studio to give you time to
            get dressed. Then, I will return to the studio and check in with you
            to see how you are feeling and answer any questions you may have.
          </p>
          <div className="round-circle-blue-dark"></div>
          <h5>
            You will then be offered a glass of water, and if you want to, we
            can schedule your next session.
          </h5>
          <div className="round-circle-blue-dark"></div>
          <h4>
            In conclusion, I aim to create a comfortable and relaxing
            environment for my customers, and provide them with the highest
            quality of massage services. I offer a variety of massage services
            to help promote relaxation and well-being. Please note that my
            services are strictly therapeutic and non-sexual in nature. Any
            requests for sexual services will not be tolerated and may result in
            termination of the massage session.
          </h4>
        </div>
      </div>
    </section>
  );
}

export default AboutServices;
