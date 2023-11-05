import React from "react";
import HomeHome from "./Sections/homeHome/HomeHome";
import MyMission from "./Sections/myMission/MyMission";
import HomeServices from "./Sections/homeServices/HomeServices";
import HomeOffers from "./Sections/homeOffers/HomeOffers";
import HomeReviews from "./Sections/homeReviews/HomeReviews";
import HomeGift from "./Sections/homeGift/HomeGift.jsx";
import HomeAffiliate from "./Sections/homeAffiliate/HomeAffiliate";
function Home() {
  return (
    <>
      <HomeHome />
      <MyMission />
      <HomeServices />
      <HomeOffers />
      <HomeReviews />
      <HomeGift />
      <HomeAffiliate />
    </>
  );
}

export default Home;
