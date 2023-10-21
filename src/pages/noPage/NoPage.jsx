import React from "react";
import "./NoPage.css";
import Img from "../../images/error-img.png";
import Button from "../../components/button/Button";

function NoPage() {
  return (
    <section id="error-page">
      <div>
        <h2 className="gradient-dark-text">
          Oops! We can't seem to find the page that you are looking for
        </h2>
        <p>
          Please use the top menu to navigate to an existing page and hope to
          see you soon at a massage session
        </p>
        <div>
          <img src={Img} alt="..." />
        </div>
        <Button
          buttonStyle=""
          linkTo="https://relaxmassagestudiocannock.setmore.com/"
          toTarget="_blank"
          isVisible={true}
        >
          Book Now
        </Button>
      </div>
    </section>
  );
}

export default NoPage;
