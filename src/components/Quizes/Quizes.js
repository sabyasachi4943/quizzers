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
          questions.map(question => <Question
            key={question.id}
            question={question}
          ></Question>)
        }
      </div>
    </div>
  );
};

export default Quizes;