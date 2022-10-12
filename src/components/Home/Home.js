import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import './Home.css'

const Home = () => {
  const quizTopic = useLoaderData();
  const topics = quizTopic.data;

  return (
    <div>
      <div className="topics-container">
        {
          topics.map(topic => <Topic
            key={topic.id}
            topic={topic}
          ></Topic>)
        }
      </div>
    </div>
  );
};

export default Home;
