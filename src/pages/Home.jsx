import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ExploreOurCourses from "../components/exploreOurourses/ExploreOurCourses";
import OurOfferContent from "../components/whatWeOffer/OurOfferContent";
import Footer from "../components/footer/Footer";
import OurFacilities from "../components/ourFacilities/OurFacilities";
import Offerings from "../components/Offerings/offerings";
import AboutUniversity from "../components/AboutUniversity/AboutUniversity";

const Home = () => {
  return <div>
  <Header />
  <Banner />
  <AboutUniversity/>
  <ExploreOurCourses/>
  <OurOfferContent/>
  <OurFacilities/>
  <Footer/>
  <Offerings />
</div>
};

export default Home;
