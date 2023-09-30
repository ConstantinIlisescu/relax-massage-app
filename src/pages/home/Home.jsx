import React from "react";
import HomeHome from "./Components/homeHome/HomeHome";
import HomeAboutMe from "./Components/homeAboutMe/HomeAboutMe";
import HomeServices from "./Components/homeServices/HomeServices";
import HomeOffers from "./Components/homeOffers/HomeOffers";
function Home() {
  return (
    <>
      <HomeHome />
      <HomeAboutMe />
      <HomeServices />
      <HomeOffers />
    </>
  );
}

export default Home;
