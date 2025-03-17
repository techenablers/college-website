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

// import Placement from "../components/Placement";
import Events from "../components/events/Events";
// import LeadersDesk from "../components/LeadersDesk";
// import Infrastructure from "../components/Infrastructure";
// import Career from "../components/careers/Career";
// import CoursesDetails from "../components/CoursesDetails";

const Home = () => {
  return (
    <div className="home-content">
      {/* <Banner />/ */}
      {/* <Flash />
      <Information />
      <Offerings />
      <AboutUniversity />
      <EducationSection />
      <OurCoreMember />
      <ExploreOurCourses />
      <OurOfferContent />
      <OurFacilities /> */}



      {/* <Placement/> */}
      <Events/>
      {/* <LeadersDesk/> */}
      {/* <Infrastructure/> */}
      {/* <Career/> */}
      {/* <CoursesDetails/> */}
    </div>
  );
};

export default Home;
