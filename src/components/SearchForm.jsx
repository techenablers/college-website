import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const courses = [
    "Junior College XI & XII Arts Stream",
    "Junior College XI & XII Commerce Stream",
    "BA (Bachelor of Arts)",
    "BCom (Bachelor of Commerce)",
    "BSc Data Science",
    "BSc IT (Information Technology)",
  ];

  const filteredCourses = courses.filter((course) =>
    course.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (course) => {
    setQuery(course);
    setShowSuggestions(false);
    // You can navigate or do something with the selected course
    console.log("Selected course:", course);
    // Example: navigate(`/courses/${slugify(course)}`)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      console.log("Searching for:", query);
      // Navigate or handle submit here
    }
  };

  return (
    <form className="d-flex position-relative" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control me-2"
        placeholder="Search for Our Programmes..."
        aria-label="Search"
        style={{ width: "250px" }}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowSuggestions(true);
        }}
        onFocus={() => setShowSuggestions(true)}
      />
      <button
        className="btn btn-outline-primary"
        type="submit"
        style={{ width: "150px" }}
      >
        Apply Now
      </button>

      {/* Suggestions dropdown */}
      {showSuggestions && query && (
        <ul
          className="list-group position-absolute"
          style={{
            top: "100%",
            left: 0,
            zIndex: 1000,
            width: "250px",
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, idx) => (
              <li
                key={idx}
                className="list-group-item list-group-item-action"
                onClick={() => handleSelect(course)}
                style={{ cursor: "pointer" }}
              >
                {course}
              </li>
            ))
          ) : (
            <li className="list-group-item text-muted">No results found</li>
          )}
        </ul>
      )}
    </form>
  );
};

export default SearchForm;
