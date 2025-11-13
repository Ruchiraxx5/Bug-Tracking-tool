import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import BugForm from "./Bugform";
import BugList from "./BugList";
import BugStatusChart from "./chart";
import Reportedbugs from "./Reportedbugs";
import BugsOverTimeChart from "./Bugtrend";
import DeveloperAssign from "./devassign";
import MyBugs from "./devbugs";
import bugData from "./data";
import FAQPage from "./FAQ";
import './App.css';

function App() {
  const [bugs, setBugs] = useState(bugData);
  const [currentDev, setCurrentDev] = useState(""); // Logged-in developer
  const DEV_CODE = "dev123";

  const addBug = (bug) => {
    setBugs([
      ...bugs,
      {
        ...bug,
        id: Date.now().toString(),
        status: "open",
        createdAt: new Date(),
        assignedTo: null,
      },
    ]);
  };

  const updateBug = (id, updates) => {
    setBugs(
      bugs.map((bug) =>
        bug.id === id ? { ...bug, ...updates, updatedAt: new Date() } : bug
      )
    );
  };

  const deleteBug = (id) => {
    setBugs(bugs.filter((bug) => bug.id !== id));
  };

  const assignBug = (id, developerName) => {
    updateBug(id, { assignedTo: developerName });
    setCurrentDev(developerName);
  };

  return (
    <Router>
      <div className="background" style={{ padding: "20px" }}>
        <h1>Bug Tracker</h1>

        {/* Navigation Buttons */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <Link to="/faq">
            <button style={buttonStyle}>Go to FAQ</button>
          </Link>
          <Link to="/developer">
            <button style={buttonStyle}>Developer View</button>
          </Link>
        </div>

        <Routes>
          {/* User View */}
          <Route
            path="/"
            element={
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <BugForm addBug={addBug} />
                <BugList bugs={bugs} updateBug={updateBug} deleteBug={deleteBug} />
                <div className="chart-section" style={{ marginTop: "20px" }}>
                  <h2>Bug Insights</h2>
                  <BugStatusChart bugs={bugs} />
                  <Reportedbugs bugs={bugs} />
                  <BugsOverTimeChart bugs={bugs} />
                </div>
              </div>
            }
          />

          {/* FAQ Page */}
          <Route path="/faq" element={<FAQPage />} />

          {/* Developer View */}
          <Route
            path="/developer"
            element={
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px" }}>
                
                {/* Developer Forms */}
                <DeveloperAssign bugs={bugs} assignBug={assignBug} devCode={DEV_CODE} />
                <MyBugs bugs={bugs} />

                {/* Large Assigned Bugs Table */}
                {currentDev && (
                  <div>
                    <h3 style={{ textAlign: "center" }}>My Assigned Bugs</h3>
                    <div style={{ overflowX: "auto" }}>
                      <BugList
                        bugs={bugs.filter(
                          (bug) =>
                            bug.assignedTo &&
                            bug.assignedTo.toLowerCase() === currentDev.toLowerCase()
                        )}
                        updateBug={updateBug}
                        deleteBug={deleteBug}
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                )}

                {/* Back to User View */}
                <Link to="/" className="d-block mt-4">
                  <button style={buttonStyle}>Back to User View</button>
                </Link>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

// Neutral button style
const buttonStyle = {
  padding: "10px 20px",
  borderRadius: "5px",
  backgroundColor: "#f0f0f0",
  color: "#333",
  fontWeight: "bold",
  cursor: "pointer",
  border: "1px solid #ccc",
};




export default App;
