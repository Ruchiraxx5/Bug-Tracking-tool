import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Cell
} from "recharts";

function Reportedbugs({ bugs }) {
  const bugCounts = {};
  const MAX_TITLE_LENGTH = 25; 
  const COLORS = ["#4f46e5", "#f87171", "#facc15", "#34d399", "#f472b6"];

  bugs.forEach((bug) => {
    const title = bug.summary?.trim() || "Untitled";
    bugCounts[title] = (bugCounts[title] || 0) + 1;
  });

  const data = Object.entries(bugCounts)
    .map(([title, count]) => ({
      title: title.length > MAX_TITLE_LENGTH ? title.slice(0, MAX_TITLE_LENGTH) + "..." : title,
      count
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return (
    <div style={{ border: "2px solid #888", borderRadius: "10px", padding: "15px", backgroundColor: "#fff" }}>
      <h3>Most Reported Bugs</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical" margin={{ left: 140, right: 20, top: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="title" type="category" tick={{ fontSize: 12 }} />
          <Tooltip />
          <Bar dataKey="count">
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Reportedbugs;
