import React, { useState } from "react";

function BugForm({ addBug }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("P2 / Major");
  const [status, setStatus] = useState("OPEN");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Please enter a bug title.");
      return;
    }

    const newBug = {
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      severity,
      status,
      assignedTo: null,
      created_date: new Date().toISOString(),
    };

    addBug(newBug);

    setTitle("");
    setDescription("");
    setSeverity("P2 / Major");
    setStatus("OPEN");
  };

  return (
    <form
      onSubmit={handleSubmit}
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
      <h3 style={{ color: "#004aad", textAlign: "center" }}>Report a New Bug</h3>

      <input
        type="text"
        placeholder="Bug Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #999"
        }}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #999",
          resize: "vertical"
        }}
      />

      <select
        value={severity}
        onChange={(e) => setSeverity(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #999"
        }}
      >
        <option value="P1 / Critical">P1 / Critical</option>
        <option value="P2 / Major">P2 / Major</option>
        <option value="P3 / Minor">P3 / Minor</option>
      </select>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #999"
        }}
      >
        <option value="OPEN">OPEN</option>
        <option value="CLOSED">CLOSED</option>
      </select>

      <button
        type="submit"
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
        Submit Bug
      </button>
    </form>
  );
}

export default BugForm;




