import React from "react";

const Question = ({ qquestion }) => {
  console.log(qquestion);
  const { id, question, correctAnswer, options } = qquestion;
  const handleOptionClick = (option, qquestion) => {
    console.log(option);
    console.log(qquestion);
  }
  return (
    <div>
      <p>{question}</p>
      {options.map((option) => (
        <button onClick={() => handleOptionClick(option, qquestion) }>{option}</button>
      ))}
    </div>
  );
};

export default Question;
