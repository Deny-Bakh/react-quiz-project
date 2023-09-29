import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { DEFAULT_QUIZ_DURATION } from '../../store/quiz/constants';
import styles from './QuizResultCard.module.css';

function QuizResultCard() {
  const {
    correctAnswers, currentQuestionIndex, quizStartTime, timeLeft,
  } = useSelector((state) => state.quiz);

  const calculateQuizCompletionTime = (quizStartTime, timeLeft) => {
    if (!quizStartTime || timeLeft === undefined) return '';

    const quizEndTime = quizStartTime + (DEFAULT_QUIZ_DURATION - timeLeft) * 1000;
    const completionTimeInSeconds = Math.floor((quizEndTime - quizStartTime) / 1000);

    const minutes = Math.floor(completionTimeInSeconds / 60);
    const seconds = completionTimeInSeconds % 60;

    return `${minutes} min ${seconds} sec`;
  };

  const navigate = useNavigate();

  window.onpopstate = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.wrapper}>
            <h2 className={styles.card_name}>Quiz Completed</h2>
            <p className={styles.card_text}>
                You answered {correctAnswers} out of {currentQuestionIndex} questions correctly.
            </p>
            <p className={styles.card_text}>
                Quiz completed in {calculateQuizCompletionTime(quizStartTime, timeLeft)}
            </p>
            <Link to='/'>
                <button className={styles.button}>Home</button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default QuizResultCard;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import styles from './QuizResultCard.module.css';

// function QuizResultCard() {
//   const {
//     correctAnswers,
//     totalQuestions,
//     quizStartTime,
//     timeLeft,
//     DEFAULT_QUIZ_DURATION,
//   } = useSelector((state) => state.quiz);

//   // const DEFAULT_QUIZ_DURATION = 180;

//   const calculateQuizCompletionTime = (quizStartTime, timeLeft) => {
//     if (!quizStartTime || timeLeft === undefined) return '';

//     const quizEndTime = quizStartTime + (DEFAULT_QUIZ_DURATION - timeLeft) * 1000;
//     const completionTimeInSeconds = Math.floor((quizEndTime - quizStartTime) / 1000);

//     const minutes = Math.floor(completionTimeInSeconds / 60);
//     const seconds = completionTimeInSeconds % 60;

//     return `${minutes} min ${seconds} sec`;
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         <div className={styles.wrapper}>
//           <h2 className={styles.card_name}>Quiz Completed</h2>
//           <p className={styles.card_text}>
//             You answered {correctAnswers} out of {totalQuestions} questions correctly.
//           </p>
//           <p className={styles.card_text}>
//             Quiz completed in {calculateQuizCompletionTime(quizStartTime, timeLeft)}
//           </p>
//           <Link to='/'>
//             <button className={styles.button}>Home</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default QuizResultCard;
