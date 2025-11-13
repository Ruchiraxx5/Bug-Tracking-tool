import React, { useState } from "react";

function DeveloperAssign({ bugs, assignBug, devCode }) {
  const [inputCode, setInputCode] = useState("");
  const [developerName, setDeveloperName] = useState("");

  const handleAssign = () => {
    if (inputCode.trim().toLowerCase() !== devCode.trim().toLowerCase()) {
      alert("Invalid developer code.");
      return;
    }

    if (!developerName.trim()) {
      alert("Please enter your name.");
      return;
    }

    const unassignedBug = bugs.find(
      (bug) => !bug.assigned_to && bug.status.toLowerCase() === "open"
    );

    if (unassignedBug) {
      assignBug(unassignedBug.bug_id, developerName);
      alert(`Bug "${unassignedBug.summary}" assigned to ${developerName}`);
    } else {
      alert("No unassigned bugs available.");
    }

    setInputCode("");
    setDeveloperName("");
  };

  return (
    <div
      style={{
        border: "3px solid #333",
        borderRadius: "10px",
        padding: "20px",
        width: "320px",
        backgroundColor: "#1773fdff",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        marginTop: "30px",
      }}
    >
      <h3 style={{ marginBottom: "15px", color: "#002f5f" }}>Developer Assignment</h3>

      <label style={{ fontWeight: "bold", marginBottom: "5px", display: "block" }}>
        Enter Developer Code:
      </label>
      <input
        type="text"
        value={inputCode}
        onChange={(e) => setInputCode(e.target.value)}
        placeholder="e.g. dev123"
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "15px",
          borderRadius: "5px",
          border: "1px solid #999",
          backgroundColor: "#ffffffff"
        }}
      />

      <label style={{ fontWeight: "bold", marginBottom: "5px", display: "block" }}>
        Enter Your Name:
      </label>
      <input
        type="text"
        value={developerName}
        onChange={(e) => setDeveloperName(e.target.value)}
        placeholder="e.g. Sarah"
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "15px",
          borderRadius: "5px",
          border: "1px solid #999",
          backgroundColor: "#cad8faf1"
        }}
      />

      <button
        onClick={handleAssign}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#004aad",
          color: "#7eb1f7ff",
          border: "none",
          borderRadius: "5px",
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

