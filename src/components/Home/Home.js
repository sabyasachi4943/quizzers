import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Topic from "../Topic/Topic";
import './Home.css'

const Home = () => {
  const quizTopic = useLoaderData();
  const topics = quizTopic.data;

  const handleStartQuiz = topic => {
    
  };
  return (
    <div>
      <div className="topics-container">
        {
          topics.map(topic => <Topic
            key={topic.id}
            topic={topic}
            handleStartQuiz={handleStartQuiz}
          ></Topic>)
        }
      </div>
    </div>
  );
};

export default Home;
