import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Home = () => {
  const quizTopic = useLoaderData();
  const topics = quizTopic.data
  return (
    <div>
      {
        topics.map(topic => <Topic
          key={topic.id}
          topic={topic}
        ></Topic>)
      }
    </div>
  );
};

export default Home;
