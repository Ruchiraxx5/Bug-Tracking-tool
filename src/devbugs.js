import React, { useState } from "react";

function MyBugs({ bugs }) {
  const [devName, setDevName] = useState("");
  const [assignedBugs, setAssignedBugs] = useState([]);

  const handleCheckBugs = () => {
    if (!devName.trim()) {
      alert("Please enter your name.");
      return;
    }

    const filteredBugs = bugs.filter(
      (bug) => bug.assignedTo && bug.assignedTo.toLowerCase() === devName.trim().toLowerCase()
    );

    setAssignedBugs(filteredBugs);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        padding: "20px",
        border: "2px solid #004aad",
        borderRadius: "10px",
        backgroundColor: "#e6f0ff",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginBottom: "20px"
      }}
    >
      <h3 style={{ color: "#004aad", textAlign: "center" }}>View Your Assigned Bugs</h3>

      <input
        type="text"
        placeholder="Enter your name"
        value={devName}
        onChange={(e) => setDevName(e.target.value)}
        style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #999" }}
      />

      <button
        onClick={handleCheckBugs}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#004aad",
          color: "#fff",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Show My Bugs
      </button>

      {assignedBugs.length > 0 ? (
        <ul style={{ paddingLeft: "20px" }}>
          {assignedBugs.map((bug) => (
            <li key={bug.id}>
              <strong>{bug.title}</strong> — Status: {bug.status}
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ fontStyle: "italic" }}>No bugs assigned to you.</p>
      )}
    </div>
  );
}

export default MyBugs;



