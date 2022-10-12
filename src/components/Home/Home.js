import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import './Home.css'

const Home = () => {
  const quizTopic = useLoaderData();
  const topics = quizTopic.data;

  return (
    <div>
      <div className="hero-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3407/3407022.png"
          height="150"
          width= "150"
          srcset=""
        />
        <h3>This is a quiz app regarding web technologies</h3>
      </div>
      <div className="topics-container">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Home;
