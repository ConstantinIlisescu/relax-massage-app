import React from "react";
import "./MyMission.css";
import { myMission } from "../../../../Data/home/myMission";

function MyMission() {
  return (
    <section
      id="home-about-me"
      className="home-about-me page-padding clip-path-polygon z-index-1"
    >
      <div className="section-container container">
        <div className="home-about-me-img">
          <img
            src={require(`../../../../images/Home/${myMission.image}`)}
            alt={myMission.imageDescription}
            className="shadow"
          />
        </div>
        <div>
          <h2 className="gradient-light-text ">{myMission.title}</h2>
          <div>
            <p className="home-about-me-paragraph">{myMission.paragraph}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyMission;
