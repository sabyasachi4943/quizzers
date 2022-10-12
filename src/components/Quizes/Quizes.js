import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quizes.css';

const Quizes = () => {
  const quiz = useLoaderData();
  console.log(quiz)
  const questions = quiz.data.questions;

  const [score, setScore] = useState(0);
  const [arr, setArr] = useState([]);
  


  const handleOptionClick = (option, qquestion, showToast) => {
    
    const exists = arr.find(option => option === qquestion.correctAnswer);
    if (exists) {
      alert("already answered")
    } else {
      const newAns = [...arr, option];
      setArr(newAns);
      showToast();
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


        
      </div>
    </div>
  );
};

export default Quizes;