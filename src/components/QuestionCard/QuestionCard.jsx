import React from 'react';
import styles from './QuestionCard.module.css';

function QuestionCard({
  question, options, onNextQuestion, onAnswerSelected,
}) {
  return (
    <div className={styles.card}>
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
  );
}

export default QuestionCard;
