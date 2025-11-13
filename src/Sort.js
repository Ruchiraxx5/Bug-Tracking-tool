import React, { useState } from 'react';

const severityOrder = {
  high: 3,
  medium: 2,
  low: 1
};

const BugList = ({ bugs }) => {
  const [sortBy, setSortBy] = useState("severity");

  const sortedBugs = [...bugs].sort((a, b) => {
    if (sortBy === "severity") {
      return severityOrder[b.severity] - severityOrder[a.severity];
    } else if (sortBy === "date") {
      return new Date(b.dateReported) - new Date(a.dateReported);
    } else {
      return 0;
    }
  });

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'red';
      case 'medium': return 'orange';
      case 'low': return 'green';
      default: return 'black';
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="sortBy">Sort by: </label>
        <select
          id="sortBy"
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy}
        >
          <option value="severity">Severity</option>
          <option value="date">Date Reported</option>
        </select>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {sortedBugs.map(bug => (
          <li
            key={bug.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <h3 style={{ margin: '0 0 0.5rem 0' }}>{bug.title}</h3>
            <p style={{ margin: 0 }}>
              <strong>Severity:</strong>{" "}
              <span style={{ color: getSeverityColor(bug.severity) }}>
                {bug.severity}
              </span>
              {" | "}
              <strong>Reported:</strong> {bug.dateReported}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BugList;
