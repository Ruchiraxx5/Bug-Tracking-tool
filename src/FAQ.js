import React from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "What kind of charts are on the dashboard?",
    a: "Our dashboard includes: Open vs Closed Bugs (pie chart), Most Reported Bugs (bar chart), and Reported Bugs Over Time (line chart). These charts help teams monitor bug trends and development progress."
  },
  {
    q: "How often is the dashboard updated?",
    a: "The dashboard updates in real-time whenever a bug is added, edited, or its status changes."
  },
  {
    q: "How can I reset my password?",
    a: "If you’ve forgotten your password, click the “Forgot Password?” link below the login form. An email will be sent to your registered address allowing you to reset your password."
  },
  {
    q: "How can I contact you?",
    a: "Email: Bugreports@gmail.com | Telephone: +44 20 7946 0958"
  }
];

const FAQPage = () => (
  <div style={{ backgroundColor: "#204881ff", minHeight: "100vh", padding: "40px" }}>
    <h2 className="mb-4" style={{ color: "#ffffffff", textAlign: "center" }}>Frequently Asked Questions</h2>

    <div className="accordion" id="accordionExample">
      {faqs.map((item, idx) => (
        <div
          key={idx}
          className="accordion-item"
          style={{
            backgroundColor: "rgba(167, 225, 250, 0.8)", // faded box background
            border: "4px solid rgba(223, 247, 255, 0.7)", // lighter faded blue border
            borderRadius: "10px",
            marginBottom: "20px",
            padding: "10px"
          }}
        >
          <h2 className="accordion-header" id={`heading${idx}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${idx}`}
              aria-expanded="false"
              aria-controls={`collapse${idx}`}
              style={{ fontWeight: "bold", color: "#022b60ff" }}
            >
              {item.q}
            </button>
          </h2>
          <div
            id={`collapse${idx}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${idx}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{item.a}</div>
          </div>
        </div>
      ))}
    </div>

    <Link to="/" className="d-block mt-4 text-center">
      <button
        style={{
          padding: "12px 25px",
          backgroundColor: "#a2b5ceff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          color: "#fff",
          fontWeight: "bold"
        }}
      >
        Back to Bug Tracker
      </button>
    </Link>
  </div>
);

export default FAQPage;




