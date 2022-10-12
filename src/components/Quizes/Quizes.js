import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quizes = () => {
  const quiz = useLoaderData();
  const questions = quiz.data.questions;

  return (
    <div>
      <div className="quiz-container">
        {
          questions.map(qquestion => <Question
            key={qquestion.id}
            qquestion={qquestion}
          ></Question>)
        }
      </div>
    </div>
  );
};

export default Quizes;