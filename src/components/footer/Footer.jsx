import React from "react";
import "./Footer.css";
import { footer } from "../../Data/footer";

function Footer() {
  return (
    <div className="footer">
      <p>
        {footer.text} <span>©</span>
        {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default Footer;
