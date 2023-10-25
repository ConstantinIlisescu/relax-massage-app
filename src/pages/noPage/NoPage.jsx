import React from "react";
import "./NoPage.css";
import Button from "../../components/button/Button";
import { errorPage } from "../../Data/errorPage";
import { bookingButton } from "../../Data/bookingButton";

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
          <img
            src={require(`../../images/${errorPage.image}`)}
            alt={errorPage.imageDescription}
          />
        </div>
        <Button
          buttonStyle=""
          linkTo={bookingButton.link}
          toTarget="_blank"
          isVisible={true}
        >
          {errorPage.buttonText}
        </Button>
      </div>
    </section>
  );
}

export default NoPage;
