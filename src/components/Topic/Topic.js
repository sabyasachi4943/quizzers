import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const Topic = ({topic , handleStartQuiz}) => {
  const {id, name, logo, total} = topic;
  return (
    <div>
      <div className="topic-container">
        <h4>{name}</h4>
        <div className="img-container">
          <img src={logo} alt="" />
        </div>
        <p>Total Quizes number {total}</p>
        <Link to={`/quiz/${id}`}>
          <button>start quiz</button>
        </Link>
      </div>
    </div>
  );
};

export default Topic;