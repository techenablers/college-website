/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./components/layouts/Layouts";
import StudentWelfare from "./components/StudentWelfare";
import LeadersDesk from "./components/LeadersDesk";
import CoursesDetails from "./components/CoursesDetails";
import Infrastructure from "./components/Infrastructure/Infrastructure";
import Career from "./components/careers/Career";
import Events from "./components/events/Events";


const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/career"
        element={
          <Layout>
            <Career />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
    {/*   <Route
        path="/Student's-Corner"
        element={
          <Layout>
            <StudentWelfare />
          </Layout>
        }
      /> */}
      <Route
        path="/core-member-details"
        element={
          <Layout>
            <LeadersDesk />
          </Layout>
        }
      />
      <Route
        path="/about/leaders-desk"
        element={
          <Layout>
            <LeadersDesk />
          </Layout>
        }
      />
      <Route
        path="/course-details/:courseId"
        element={
          <Layout>
            <CoursesDetails />
          </Layout>
        }
      />
      <Route
        path="/infrastructure"
        element={
          <Layout>
            <Infrastructure />
          </Layout>
        }
      />
      <Route
        path="/about/infrastructure"
        element={
          <Layout>
            <Infrastructure />
          </Layout>
        }
      />
      <Route
        path="/about/careers"
        element={
          <Layout>
            <Career />
          </Layout>
        }
      />
     <Route
        path="/Student's-Corner/welfare"
        element={
          <Layout>
            <StudentWelfare />
          </Layout>
        }
      /> 
     <Route
        path="/Student's-Corner/events"
        element={
          <Layout>
            <Events />
          </Layout>
        }
      /> 
    </Routes>
  );
};

export default App;
