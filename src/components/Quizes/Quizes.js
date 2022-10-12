import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quizes.css';

const Quizes = () => {
  const quiz = useLoaderData();
  console.log(quiz)
  const questions = quiz.data.questions;

  const handleOptionClick = (option, qquestion) => {
    console.log(option);
    console.log(qquestion);
  };

  const { update, setUpdate } = useState();

  return (
    <div>
      <div className="quiz-page">
        <div className="quiz-container">
          {questions.map((qquestion) => (
            <Question
              key={qquestion.id}
              qquestion={qquestion}
              handleOptionClick={handleOptionClick}
            ></Question>
          ))}
        </div>
        <div className="marks-container">
          <p>correct</p>
          <p>incorrect</p>
        </div>
      </div>
    </div>
  );
};

export default Quizes;