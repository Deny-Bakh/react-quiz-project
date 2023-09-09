import React from 'react';
import { Link } from 'react-router-dom';

const QuizSelection = () => {
  const quizzes = [
    {
      id: 1,
      title: 'Lord of the Rings Quiz',
      description: 'Test your knowledge of Middle-earth!',
    },
    // Add more quizzes here
  ];

  return (
    <div>
      <h1>Choose a Quiz</h1>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            <Link to={`/quiz/${quiz.id}`}>{quiz.title}</Link>
            <p>{quiz.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizSelection;