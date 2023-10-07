import React from 'react';
import { Link } from 'react-router-dom';
import styles from './QuizSuccessCard.module.css';

const QuizSuccessCard = () => (
    <div className={styles.successCard}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: 'url(\'https://images3.alphacoders.com/132/1326456.jpeg\')' }}
      ></div>
      <div className={styles.content}>
        <p className={styles.card_text}>Your Quiz Was Successfully Created! <br /> Now you can try it out!</p>
        <div className={styles.buttons}>
        <Link to="/select" className={styles.selectButton}>Select Quiz</Link>
        <Link to="/" className={styles.homeButton}>Home</Link>
        </div>
      </div>
    </div>
);

export default QuizSuccessCard;
