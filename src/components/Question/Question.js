import React from "react";
import "./Question.css";
const Question = ({ qquestion, handleOptionClick }) => {
  console.log(qquestion);
  const { id, question, correctAnswer, options } = qquestion;
  
  return (
    <div className="q-container">
      <div className="question-container">
        <p>{question}</p>
        {options.map((option) => (
          <button onClick={() => handleOptionClick(option, qquestion)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
