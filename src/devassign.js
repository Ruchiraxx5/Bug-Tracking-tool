import React, { useState } from "react";

function DeveloperAssign({ bugs, assignBug, devCode }) {
  const [inputCode, setInputCode] = useState("");
  const [developerName, setDeveloperName] = useState("");
  const [selectedBugId, setSelectedBugId] = useState("");

  const handleAssign = () => {
    if (inputCode.trim().toLowerCase() !== devCode.toLowerCase()) {
      alert("Invalid Developer Code.");
      return;
    }
    if (!developerName.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (!selectedBugId) {
      alert("Please select a bug to assign.");
      return;
    }

    assignBug(selectedBugId, developerName.trim());
    setSelectedBugId("");
    setDeveloperName("");
    setInputCode("");
  };

  const unassignedBugs = bugs.filter(
    (bug) => !bug.assignedTo && bug.status.toLowerCase() === "open"
  );

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
        flex: 1,
        minWidth: "300px"
      }}
    >
      <h3 style={{ color: "#004aad", textAlign: "center" }}>Developer Assignment</h3>

      <input
        type="text"
        placeholder="Enter Dev Code"
        value={inputCode}
        onChange={(e) => setInputCode(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #999"
        }}
      />

      <input
        type="text"
        placeholder="Your Name"
        value={developerName}
        onChange={(e) => setDeveloperName(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #999"
        }}
      />

      <select
        value={selectedBugId}
        onChange={(e) => setSelectedBugId(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #999"
        }}
      >
        <option value="">Select a bug</option>
        {unassignedBugs.map((bug) => (
          <option key={bug.id} value={bug.id}>
            {bug.title}
          </option>
        ))}
      </select>

      <button
        onClick={handleAssign}
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
        Assign Bug
      </button>
    </div>
  );
}

export default DeveloperAssign;

