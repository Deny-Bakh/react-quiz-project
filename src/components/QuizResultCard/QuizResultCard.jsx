import React from 'react';
import styles from './QuizResultCard.module.css';
import { Link } from 'react-router-dom'; 

function QuizResultCard({ correctAnswers, totalQuestions }) {
  return (
    <div className={styles.card}>
      <h2>Quiz Completed</h2>
      <p>You answered {correctAnswers} out of {totalQuestions} questions correctly.</p>
      <Link to='/'>
        <button className={styles.button}>Home</button>
      </Link>
    </div>
  );
}

export default QuizResultCard;
