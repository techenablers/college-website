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
import Information from "../components/collegeInformation/Information";
import TransformEducation from "../components/TransformEducation";
import OurCoreMember from "../components/OurCoreMember";
import Flash from "../components/Flash";
import EducationSection from "../components/EducationSection/educationSection";

const Home = () => {
  return (<div className="home-container">
  <Header />
  <div className="main-content">
  <Banner />
  <Flash/>
  <Information/>
  <Offerings />
  <AboutUniversity/>
  <EducationSection />
  {/* <TransformEducation/> */}
  <OurCoreMember/>
  <ExploreOurCourses/>
  <OurOfferContent/>
  <OurFacilities/>
  <Footer/>
  </div>
  </div>)
};

export default Home;
