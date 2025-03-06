// import React from 'react'
import "../../../src/styles/ExploreOurCourses.css";
import NewTabContainer from "./couseTab/NewTabContainer";
import TabContainer from "./couseTab/TabContainer";

function ExploreOurCourses() {
  return (
    <div className="course-content">
      <p className="course-header">
        <span>
          <i
            className="fa fa-graduation-cap"
            aria-hidden="true"
            style={{ fontSize: "16px" }}
          ></i>{" "}
          Explore Our Courses
        </span>
      </p>
      <p className="course-headding">
        Find the Right Program For Your <br /> Career Goals.
      </p>
      <div>
        {/* <TabContainer/> */}
        <NewTabContainer />
      </div>
      <button className=" view-all-course-btn">All course Details</button>
    </div>
  );
}

export default ExploreOurCourses;
