import React, { useState } from "react";
import "./Question.css";


const Question = ({ qquestion, handleOptionClick }) => {
  const { question, correctAnswer, options } = qquestion;
  const [correctans, setCorrectans] = useState("see correct ans");

  const handleCorrectAnswer = (correctAnswer) => {
    setCorrectans(correctAnswer);
  };

  const [isShown, setIsShown] = useState(false);
  const showToast = () => {
    setIsShown(true);
    setTimeout(() => {
      setIsShown(false);
    }, 3000);
  };

  return (
    <div className="q-container">
      <div className="question-container">
        <p>{question}</p>
        {options.map((option, index) => (
        
          <button key={index}
            onClick={() => handleOptionClick(option, qquestion, showToast)}
          >
            {option}
          </button>
        ))}

        <br />
        <button className="button" onClick={() => handleCorrectAnswer(correctAnswer)}>
          {correctans}
        </button>

        <div className="container">
          {/* This button is used to show the toast */}
          {/* <button className="button" onClick={showToast}>
            Activity Completed
          </button> */}

          {/* Implement our toast here */}
          {isShown && (
            <div className="my-toast">
              <span className="my-toast__icon">i</span>
              <span>correct</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
