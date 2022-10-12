import React, { PureComponent } from "react";
import { XAxis, YAxis, Tooltip, LineChart, Line } from "recharts";

import { useLoaderData } from "react-router-dom";
import "./Stats.css";

const Stats = () => {
  const quizTopic = useLoaderData();
  const topics = quizTopic.data;
  console.log(topics);
  return (
    <div>
      <LineChart width={500} height={400} data={topics}>
        <Line type="monotone" dataKey="total" stroke="#82ca9d"></Line>
        <XAxis dataKey="name"></XAxis>
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Stats;
