import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ExploreOurCourses from "../components/exploreOurourses/ExploreOurCourses";
import OurOfferContent from "../components/whatWeOffer/OurOfferContent";
import Footer from "../components/footer/Footer";
import OurFacilities from "../components/ourFacilities/OurFacilities";
import Offerings from "../components/Offerings/offerings";
import AboutUniversity from "../components/AboutUniversity/AboutUniversity";
import "../styles/Home.css";


const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="main-content">
          <Banner />
          <ExploreOurCourses/>
          <OurOfferContent/>
          <OurFacilities/>
          <Footer/>
          <Offerings />
          <AboutUniversity />
      </div>
    </div>
  );
};

export default Home;
