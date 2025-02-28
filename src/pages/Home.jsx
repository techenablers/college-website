import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ExploreOurCourses from "../components/exploreOurourses/ExploreOurCourses";
import OurOfferContent from "../components/whatWeOffer/OurOfferContent";
import Footer from "../components/footer/Footer";
import OurFacilities from "../components/ourFacilities/OurFacilities";

const Home = () => {
  return <div>
  <Header />
  <Banner />
  <ExploreOurCourses/>
  <OurOfferContent/>
  <OurFacilities/>
  <Footer/>
</div>
};

export default Home;
