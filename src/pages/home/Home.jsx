import React from "react";
import HomeHome from "./Sections/homeHome/HomeHome";
import HomeAboutMe from "./Sections/homeAboutMe/HomeAboutMe";
import HomeServices from "./Sections/homeServices/HomeServices";
import HomeOffers from "./Sections/homeOffers/HomeOffers";
import HomeReviews from "./Sections/homeReviews/HomeReviews";
import HomeGift from "./Sections/homeGift/HomeGift.jsx";
import HomeAffiliate from "./Sections/homeAffiliate/HomeAffiliate";
function Home() {
  return (
    <>
      <HomeHome />
      <HomeAboutMe />
      <HomeServices />
      <HomeOffers />
      <HomeReviews />
      <HomeGift />
      <HomeAffiliate />
    </>
  );
}

export default Home;
