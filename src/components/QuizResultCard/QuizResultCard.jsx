// import React from 'react';
// import { Link } from 'react-router-dom';
// import styles from './QuizResultCard.module.css';

// function QuizResultCard({ correctAnswers, totalQuestions }) {
//   return (
//     <div className={styles.card}>
//       <h2>Quiz Completed</h2>
//       <p>You answered {correctAnswers} out of {totalQuestions} questions correctly.</p>
//       <Link to='/'>
//         <button className={styles.button}>Home</button>
//       </Link>
//     </div>
//   );
// }

// export default QuizResultCard;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import styles from './QuizResultCard.module.css';

// function QuizResultCard({ correctAnswers, totalQuestions, quizStartTime }) {
//   // Function to calculate quiz completion time
//   const calculateQuizCompletionTime = (quizStartTime) => {
//     if (!quizStartTime) return '';

//     const quizEndTime = Date.now();
//     const completionTimeInSeconds = Math.floor(
//       (quizEndTime - quizStartTime) / 1000
//     );

//     const minutes = Math.floor(completionTimeInSeconds / 60);
//     const seconds = completionTimeInSeconds % 60;

//     return `${minutes} min ${seconds} sec`;
//   };

//   return (
//     <div className={styles.card}>
//       <h2>Quiz Completed</h2>
//       <p>You answered {correctAnswers} out of {totalQuestions} questions correctly.</p>
//       <p>Quiz completed in {calculateQuizCompletionTime(quizStartTime)}</p>
//       <Link to='/'>
//         <button className={styles.button}>Home</button>
//       </Link>
//     </div>
//   );
// }

// export default QuizResultCard;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './QuizResultCard.module.css';

function QuizResultCard({ correctAnswers, totalQuestions, quizStartTime }) {
  const calculateQuizCompletionTime = (quizStartTime) => {
    if (!quizStartTime) return '';

    const quizEndTime = Date.now();
    const completionTimeInSeconds = Math.floor(
      (quizEndTime - quizStartTime) / 1000,
    );

    const minutes = Math.floor(completionTimeInSeconds / 60);
    const seconds = completionTimeInSeconds % 60;

    return `${minutes} min ${seconds} sec`;
  };

  return (
    <div className={styles.container}>
        <div className={styles.card}>
            <h2 className={styles.card_name}>Quiz Completed</h2>
            <p className={styles.card_text}>
                You answered {correctAnswers} out of {totalQuestions} questions correctly.
            </p>
            <p className={styles.card_text}>
                Quiz completed in {calculateQuizCompletionTime(quizStartTime)}
            </p>
            <Link to='/'>
                <button className={styles.button}>Home</button>
            </Link>
        </div>
    </div>
  );
}

export default QuizResultCard;
