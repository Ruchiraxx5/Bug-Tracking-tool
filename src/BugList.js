import React, { useState } from "react";
import bugData from "./data.js"; 

function BugList() {
  const [bugs, setBugs] = useState(bugData);
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case "blocker":
        return "red";
      case "major":
        return "orange";
      case "normal":
        return "green";
      default:
        return "black";
    }
  };

  const deleteBug = (id) => {
    setBugs(bugs.filter((bug) => bug.bug_id !== id));
  };

  return (
    <div>
      <h2>Bug Reports</h2>
      <div style={{ maxHeight: "400px", overflowY: "auto", border: "2px solid #0b0b0bff", borderRadius: "5px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#ddd" }}>
              <th style={{ padding: "8px" }}>ID</th>
              <th style={{ padding: "8px" }}>Summary</th>
              <th style={{ padding: "8px" }}>Component</th>
              <th style={{ padding: "8px" }}>Category</th>
              <th style={{ padding: "8px" }}>OS</th>
              <th style={{ padding: "8px" }}>Status</th>
              <th style={{ padding: "8px" }}>Resolution</th>
              <th style={{ padding: "8px" }}>Severity</th>
              <th style={{ padding: "8px" }}>Assigned To</th>
              <th style={{ padding: "8px" }}>Created</th>
              <th style={{ padding: "8px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {bugs.map((bug) => {
              const isHovered = hoveredId === bug.bug_id;
              const isSelected = selectedId === bug.bug_id;
              return (
                <tr
                  key={bug.bug_id}
                  onMouseEnter={() => setHoveredId(bug.bug_id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setSelectedId(bug.bug_id)}
                  style={{
                    backgroundColor: isSelected
                      ? "#a8d1ff"
                      : isHovered
                      ? "#e6f2ff"
                      : "white",
                    cursor: "pointer",
                  }}
                >
                  <td style={{ padding: "8px" }}>{bug.bug_id}</td>
                  <td style={{ padding: "8px" }}>{bug.summary}</td>
                  <td style={{ padding: "8px" }}>{bug.component}</td>
                  <td style={{ padding: "8px" }}>{bug.category}</td>
                  <td style={{ padding: "8px" }}>{bug.os}</td>
                  <td style={{ padding: "8px" }}>{bug.status}</td>
                  <td style={{ padding: "8px" }}>{bug.resolution}</td>
                  <td style={{ padding: "8px", color: getSeverityColor(bug.severity) }}>{bug.severity}</td>
                  <td style={{ padding: "8px" }}>{bug.assigned_to || "Unassigned"}</td>
                  <td style={{ padding: "8px", fontSize: "0.85em" }}>{new Date(bug.created_date).toLocaleString()}</td>
                  <td style={{ padding: "8px" }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteBug(bug.bug_id);
                      }}
                      style={{
                        padding: "4px 8px",
                        fontSize: "0.8rem",
                        cursor: "pointer",
                        backgroundColor: "#ff4d4d",
                        color: "white",
                        border: "none",
                        borderRadius: "3px",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BugList;
