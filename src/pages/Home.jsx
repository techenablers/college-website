import React from "react";
import Header from "../components/Header";
// import Banner from "../components/Banner";
import ExploreOurCourses from "../components/exploreOurourses/ExploreOurCourses";
import OurOfferContent from "../components/whatWeOffer/OurOfferContent";

const Home = () => {
  return <div>
  <Header />
  {/* <Banner /> */}
  <ExploreOurCourses/>
  <OurOfferContent/>
</div>
};

export default Home;
