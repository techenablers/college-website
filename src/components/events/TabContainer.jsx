import React, { useState } from "react";
import "../../styles/ExploreOurCourses.css"
import AllPhotos from "./AllPhotos";
import GuestLuctures from "./GuestLuctures";
import IndependenceDay from "./IndependenceDay";
import CookingCompetition from "./CookingCompetition";
import AmbedkarJayanti from "./AmbedkarJayanti";
import GaneshFestival from "./GaneshFestival";
import VotersDay from "./VotersDay";

// Wrapping each course component with React.memo
const MemoizedAllPhotos = React.memo(AllPhotos);
const MemoizedGuestLuctures = React.memo(GuestLuctures);
const MemoizedIndependenceDay = React.memo(IndependenceDay);
const MemoizedCookingCompetition = React.memo(CookingCompetition);
const MemoizedAmbedkarJayanti = React.memo(AmbedkarJayanti);
const MemoizedGaneshFestival = React.memo(GaneshFestival);
const MemoizedVotersDay= React.memo(VotersDay);

function TabContainer() {
  const tabs = [
    {
      id: "tab1",
      label: "App Photos",
      iconsClass: "",
      component: <MemoizedAllPhotos />,
    },
    {
      id: "tab2",
      label: "Guest Luctures",
      iconsClass: "",
      component: <MemoizedGuestLuctures />,
    },
    {
      id: "tab3",
      label: "Independence Day",
      iconsClass: "",
      component: <MemoizedIndependenceDay />,
    },
    {
      id: "tab4",
      label: "Cooking Competition",
      iconsClass: "",
      component: <MemoizedCookingCompetition/>,
    },
    {
      id: "tab5",
      label: "Ambedkar Jayanti",
      iconsClass: "",
      component: <MemoizedAmbedkarJayanti/>,
    },
    {
      id: "tab6",
      label: "Ganesh Festival",
      iconsClass: "",
      component: <MemoizedGaneshFestival/>,
    },
    {
      id: "tab7",
      label: "Voter’s Day",
      iconsClass: "",
      component: <MemoizedVotersDay />,
    },
  ];

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="container tab-container">
      <ul className="nav" style={{ borderBottom: "2px solid #C6CAD1" }}>
        {tabs.map(({ id, label, iconsClass }) => (
          <li className="nav-item" key={id}>
            <a
              className={`nav-link ${activeTab === id ? "active" : ""}`}
              href="#"
              onClick={() => handleTabClick(id)}
              style={{
                borderBottom: activeTab === id ? "2px solid #0B0E2A" : "none",
                fontFamily: "Manrope,sans-serif",
                fontSize: "16px",
                color: "#6C7787",
              }}
            >
              <span>
                <i
                  className={`${iconsClass} mr-2`}
                  style={{ fontSize: "16px" }}
                ></i>{" "}
                {label}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content mt-4">
        {tabs.map(
          ({ id, component }) =>
            activeTab === id && (
              <div key={id} className="tab-pane fade show active">
                {component}
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TabContainer;
