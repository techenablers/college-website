/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../components/Banner";
import ExploreOurCourses from "../components/exploreOurourses/ExploreOurCourses";
import OurOfferContent from "../components/whatWeOffer/OurOfferContent";
import OurFacilities from "../components/ourFacilities/OurFacilities";
import Offerings from "../components/Offerings/offerings";
import AboutUniversity from "../components/AboutUniversity/AboutUniversity";
import "../styles/Home.css";
import Information from "../components/collegeInformation/Information";
import OurCoreMember from "../components/OurCoreMember";
import Flash from "../components/Flash";
import EducationSection from "../components/EducationSection/educationSection";

const Home = () => {
  return (
    <div className="home-content">
      <Banner />
      <Flash />
      <Information />
      <Offerings />
      <AboutUniversity />
      <EducationSection />
      <OurCoreMember />
      <ExploreOurCourses />
      <OurOfferContent />
      <OurFacilities />
    </div>
  );
};

export default Home;
