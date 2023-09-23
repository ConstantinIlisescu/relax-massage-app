import React, { useState } from "react";
import Button from "../button/Button";
import { BiSolidChevronUp } from "react-icons/bi";

function ScrollButton() {
  const [visible, setVisible] = useState(false);

  function toggleVisible() {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button
      buttonStyle="btn-small-round-up" //style css is in button/Button.css
      onClick={scrollToTop}
      isVisible={visible}
    >
      <BiSolidChevronUp size={40} />
    </Button>
  );
}

export default ScrollButton;
