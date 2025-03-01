import React, { useState } from "react";
import "../../../../src/styles/ExploreOurCourses.css"
import Course1 from "./Course1";
import Course2 from "./Course2";
import Course3 from "./Course3";
import Course4 from "./Course4";
import Course5 from "./Course5";
import Course6 from "./Course6";
import Course7 from "./Course7";

// Wrapping each course component with React.memo
const MemoizedCourse1 = React.memo(Course1);
const MemoizedCourse2 = React.memo(Course2);
const MemoizedCourse3 = React.memo(Course3);
const MemoizedCourse4 = React.memo(Course4);
const MemoizedCourse5 = React.memo(Course5);
const MemoizedCourse6 = React.memo(Course6);
const MemoizedCourse7 = React.memo(Course7);

function TabContainer() {
  const tabs = [
    {
      id: "tab1",
      label: "Developer",
      iconsClass: "",
      component: <MemoizedCourse1 />,
    },
    {
      id: "tab2",
      label: "UI Designer",
      iconsClass: "",
      component: <MemoizedCourse2 />,
    },
    {
      id: "tab3",
      label: "Project Manager",
      iconsClass: "",
      component: <MemoizedCourse3 />,
    },
    {
      id: "tab4",
      label: "Designer",
      iconsClass: "",
      component: <MemoizedCourse4 />,
    },
    {
      id: "tab5",
      label: "Accountant",
      iconsClass: "",
      component: <MemoizedCourse5 />,
    },
    {
      id: "tab6",
      label: "Human Resource",
      iconsClass: "fa fa-user-plus",
      component: <MemoizedCourse6 />,
    },
    {
      id: "tab7",
      label: "Marketing",
      iconsClass: "",
      component: <MemoizedCourse7 />,
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
