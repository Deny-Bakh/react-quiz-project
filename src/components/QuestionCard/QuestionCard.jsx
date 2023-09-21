import React from 'react';
import styles from './QuestionCard.module.css';

function QuestionCard({
  question, options, onNextQuestion, onAnswerSelected, image, timeLeft,
}) {
  return (
    <div className={styles.card}>
      {image && (
        <div className={styles.imageContainer}>
          <img src={image} alt="Question" className={styles.image} />
        </div>
      )}
      <div className={styles.text_wrapper}>
        <h3 className={styles.timer}>Time left: {timeLeft} seconds</h3>
        <h2 className={styles.question}>{question}</h2>
        <ul>
          {options.map((option, optionIndex) => (
            <li
              key={optionIndex}
              onClick={() => {
                onAnswerSelected(option);
                onNextQuestion();
              }}
              className={styles.option}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default QuestionCard;
