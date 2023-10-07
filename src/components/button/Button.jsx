import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = [
  "btn--primary",
  "btn--outline",
  "btn--outline-dark",
  "btn--small--round",
  "btn--xl--round",
  "btn--small--back",
  "btn-small-round-up",
];

function Button({
  children,
  type,
  onClick,
  buttonStyle,
  linkTo = "#",
  isVisible,
  toTarget = "_self",
}) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <button
      className={`${checkButtonStyle}`}
      onClick={onClick}
      type={type}
      style={{ display: isVisible ? "block" : "none" }}
      target={toTarget}
    >
      <Link to={`${linkTo}`} className="btn" target={toTarget}>
        {children}
      </Link>
    </button>
  );
}

export default Button;
