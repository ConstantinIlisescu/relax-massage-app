import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        RELAX MASSAGE STUDIO CANNOCK <span>©</span> {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default Footer;
