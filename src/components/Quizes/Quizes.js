import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quizes.css';

const Quizes = () => {
  const quiz = useLoaderData();
  console.log(quiz)
  const questions = quiz.data.questions;

  const [score, setScore] = useState(0);
  const [incorrect, setIncorrect] = useState(0);


  const handleOptionClick = (option, qquestion, showToast) => {
    if (option === qquestion.correctAnswer) {
      console.log("correct");
      showToast();
      setScore(score + 1);
    }
  
  };



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
          <p>correct{score}</p>
          <p>incorrect{incorrect}</p>
        </div>
      </div>
    </div>
  );
};

export default Quizes;