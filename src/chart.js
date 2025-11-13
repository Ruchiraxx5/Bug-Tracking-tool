import React from "react"; 
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"; //Imports 

const COLORS = ["#f87171", "#facc15", "#34d399"];     //Colours
 
function BugStatusChart({ bugs }) {    //Status of Bugs
  const statusCounts = {
    open: 0,
    "in-progress": 0,
    done: 0,
  };

  bugs.forEach((bug) => {
    let key = bug.status.toLowerCase();
    if (key === "closed" || key === "done") key = "done";
    else if (key === "in-progress" || key === "accepted") key = "in-progress";
    else key = "open";

    statusCounts[key]++;
  });

  const data = Object.entries(statusCounts).map(([status, count]) => ({
    name: status,
    value: count,
  }));

  return (
    <div style={{ 
      border: "2px solid #888", 
      borderRadius: "10px", 
      padding: "15px", 
      width: "280px", 
      backgroundColor: "#fff",
      textAlign: "center"
    }}>
      <h3 style={{ fontSize: "1rem" }}>Status Breakdown</h3>
      <PieChart width={250} height={200}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={70}
          label
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend wrapperStyle={{ fontSize: "0.8rem" }} />
      </PieChart>
    </div>
  );
}

export default BugStatusChart;


