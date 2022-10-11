import React from 'react';
import './Topic.css';

const Topic = ({topic}) => {
  const { name, logo, total } = topic;
  return (
    <div>
      <div className="topic-container">
        <h4>{name}</h4>
        <div className="img-container">
          <img src={logo} alt="" />
        </div>
        <p>Total Quizes number {total}</p>
        <button>start quiz</button>
      </div>
    </div>
  );
};

export default Topic;