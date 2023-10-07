import React from 'react';
import { useGetQuizesQuery } from '../../api/quizes/quizes';
import QuizCard from '../../components/Cards/QuizCard';
import styles from './FavoriteQuizes.module.css';

export default function FavoriteQuizes() {
  const { data: favoriteQuizesData = [] } = useGetQuizesQuery(undefined, { refetchOnMountOrArgChange: true });

  const contentToRender = favoriteQuizesData.filter(({ favorite }) => favorite).map((quiz) => (
    <QuizCard key={quiz.id} quiz={quiz} />
  ));

  return (
    <div className={styles['favorite-quizzes-container']}>
      <h1>Favorite Quizzes</h1>
      <div className={styles['favorite-quizzes-wrapper']}>
        {contentToRender}
      </div>
    </div>
  );
}
