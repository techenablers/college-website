import { useState } from "react";
import Course1 from "./Course1";
import Course2 from "./Course2";
import Course3 from "./Course3";
import Course4 from "./Course4";
import Course5 from "./Course5";
import Course6 from "./Course6";
import Course7 from "./Course7";

function TabContainer() {
  const tabs = [
    {
      id: "tab1",
      lable: "Developer",
      iconsClass: "",
      component: <Course1 />,
    },
    {
      id: "tab2",
      lable: "UI Designer",
      iconsClass: "",
      component: <Course2 />,
    },
    {
      id: "tab3",
      lable: "Project Manager",
      icons: "",
      component: <Course3 />,
    },
    {
      id: "tab4",
      lable: "Designer",
      iconsClass: "",
      component: <Course4 />,
    },
    {
      id: "tab5",
      lable: "Accountant",
      iconsClass: "",
      component: <Course5 />,
    },
    {
      id: "tab6",
      lable: "Human Resource",
      iconsClass: "fa fa-user-plus",
      component: <Course6 />,
    },
    {
      id: "tab7",
      lable: "Marketing",
      iconsClass: "",
      component: <Course7 />,
    },
  ];
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const renderTabContent = () => {
    const activeTabObject = tabs.find((tab) => tab.id === activeTab);
    if (activeTabObject) {
      return activeTabObject.component;
    }
    return null;
  };

  return (
    <div className="container">
      <ul className="nav " style={{ borderBottom: "2px solid #C6CAD1" }}>
        {tabs.map(({ id, lable, iconsClass }) => (
          <li className="nav-item" key={id}>
            <a
              className={`nav-link ${activeTab === id ? "active" : ""}`}
              href="#"
              onClick={() => {
                handleTabClick(id);
              }}
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
                {lable}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content mt-4">{renderTabContent()}</div>
    </div>
  );
}

export default TabContainer;
