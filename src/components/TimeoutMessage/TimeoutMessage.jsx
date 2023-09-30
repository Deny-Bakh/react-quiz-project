import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './TimeoutMessage.module.css';

function TimeoutMessage() {
  const navigate = useNavigate();
  const { quizName } = useParams();

  const handleTryAgainClick = () => {
    navigate(`/quiz-page/${quizName}`);
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  window.onpopstate = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.overlay}>
          <h2>Sorry, you did not make it in time.</h2>
          <p>You can choose one of the following options:</p>
          <button onClick={handleTryAgainClick} className={styles.button}>
            Try Again
          </button>
          <button onClick={handleHomeClick} className={styles.button}>
            Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default TimeoutMessage;
