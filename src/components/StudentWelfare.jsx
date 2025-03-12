import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentWelfare = () => {
  return (
    <div
      style={{
        backgroundColor: "#F7F8FD",
        marginTop: "100px",
      }}
      className="container-fluid p-0"
    >
      {/* Header Section */}
      <header
        className="text-center py-5"
        style={{ backgroundColor: "#F0F0F5" }}
      >
        <h1 className="display-5 fw-bold">Student Welfare</h1>
        <p className="text-secondary">Home &gt; Student Welfare</p>
      </header>

      {/* Education System Section */}
      <section className="d-flex align-items-center p-5">
        <div className="col-md-6">
          <img
            src="src/assets/StudentWelfare_BuildingImage.svg"
            alt="Education System"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6 px-5">
          <h2 className="fw-bold">
            Our Education System <span className="text-primary">Inspires</span>{" "}
            You More.
          </h2>
          <p>
            Pellentesque vel turpis ante. Etiam eu nibh vel purus viverra
            luctus. Nulla efficitur lacus id rhoncus luctus. Donec non interdum
            massa. Vivamus malesuada finibus ex, vitae vehicula nibh finibus
            sed. Nullam nec neque dui. Donec sit amet tempor orci, ac finibus
            magna.
          </p>
          <p>
            Proin id dignissim ipsum. Sed a enim accumsan, ultrices lectus ut,
            ornare ante. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
          </p>
          <button className="btn btn-primary">Discover more</button>
        </div>
      </section>

      {/* Anti-Ragging Section */}
      <section
        style={{ backgroundColor: "#F2F2F2" }}
        className="text-center py-5"
      >
        <h2 className="fw-bold">Ensures a safe, respectful campus</h2>
        <div className="row mt-4 px-5">
          <div className="col-md-4 p-2">
            <div className="bg-primary text-white p-4 rounded">
              <h3>01</h3>
              <h4>Zero-Tolerance Policy</h4>
              <p>
                We enforce a strict no-ragging policy, ensuring a safe campus
                where harassment is never tolerated, protecting every student's
                well-being.
              </p>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div
              className=" p-4 rounded"
              style={{ backgroundColor: "#ececec" }}
            >
              <h3>02</h3>
              <h4>Anti-Ragging Committee</h4>
              <p>
                Our committee diligently enforces rules, investigates issues,
                and acts quickly to stop ragging, keeping our campus secure.
              </p>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="bg-primary text-white p-4 rounded">
              <h3>03</h3>
              <h4>Awareness Sessions</h4>
              <p>
                Regular sessions educate students on ragging’s impact, promoting
                respect and unity through engaging workshops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education System Section 2*/}
      <section className="d-flex align-items-center p-5">
        <div className="col-md-6 px-5">
          <h2 className="fw-bold">
            Our Education System <span className="text-primary">Inspires</span>{" "}
            You More.
          </h2>
          <p>
            Pellentesque vel turpis ante. Etiam eu nibh vel purus viverra
            luctus. Nulla efficitur lacus id rhoncus luctus. Donec non interdum
            massa. Vivamus malesuada finibus ex, vitae vehicula nibh finibus
            sed. Nullam nec neque dui. Donec sit amet tempor orci, ac finibus
            magna.
          </p>
          <p>
            Proin id dignissim ipsum. Sed a enim accumsan, ultrices lectus ut,
            ornare ante. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
          </p>
          <button className="btn btn-primary">Discover more</button>
        </div>
        <div className="col-md-6">
          <img
            src="src/assets/StudentWelfare_BuildingImage.svg"
            alt="Education System"
            className="img-fluid rounded"
          />
        </div>
      </section>

      {/* General Guidelines Section */}
      <section
        className="d-flex align-items-center"
        style={{ backgroundColor: "#033F73" }}
      >
        <div className="col-md-6 px-5 text-white p-4 rounded">
          <h2 className="fw-bold">
            General <span className="text-warning">Guidelines</span>
          </h2>
          <p>
            Pellentesque vel turpis ante. Etiam eu nibh vel purus viverra
            luctus. Nulla efficitur lacus id rhoncus luctus. Donec non interdum
            massa. Vivamus malesuada finibus ex, vitae vehicula nibh finibus
            sed. Nullam nec neque dui. Donec sit amet tempor orci, ac finibus
            magna. Quisque convallis quam eget felis egestas molestie. Aenean
            interdum dolor tristique sagittis tempus. Maecenas tempus erat nisl,
            et volutpat ipsum finibus eget.
          </p>
          <p>
            Proin id dignissim ipsum. Sed a enim accumsan, ultrices lectus ut,
            ornare ante. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="src/assets/StudentWelfare_StudentSitting.svg"
            alt="General Guidelines"
            className="img-fluid rounded"
            style={{ maxHeight: "500px", width: "100%", objectFit: "fill" }}
          />
        </div>
      </section>
    </div>
  );
};

export default StudentWelfare;
