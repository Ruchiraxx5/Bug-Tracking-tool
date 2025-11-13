import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer  //import Line chart
} from "recharts";

import { format } from "date-fns"; //import
import './App.css';


function BugsOverTimeChart({ bugs }) {
  const dailyCounts = {};

  bugs.forEach((bug) => {
    const date = format(new Date(bug.created_date), "yyyy-MM-dd");

    dailyCounts[date] = (dailyCounts[date] || 0) + 1;
  });

  const data = Object.entries(dailyCounts)
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  return (  //Line chart customisation
    <div>
      <h3>Bugs Reported Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#4f46e5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BugsOverTimeChart;
