import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CardContainer } from './styled';
import QuizCard from '../../components/Cards/QuizCard';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import styles from './Quizes.module.css';
import { useGetQuizesByNameQuery } from '../../api/quizes/quizes';
import actions from '../../store/quizes/actions';
import { quizActions } from '../../store/quiz';

function Quizes() {
  const { quizes: reduxQuizes, filteredQuizes, filter } = useSelector((state) => state.quizesReducer);
  const dispatch = useDispatch();
  const { searchQuery } = useParams();
  const { data, isLoading, error } = useGetQuizesByNameQuery('quiz');

  const quizesList = useMemo(() => (filter ? filteredQuizes : reduxQuizes), [reduxQuizes, filter, filteredQuizes]);

  useEffect(() => {
    dispatch(quizActions.resetQuizState());
    dispatch(actions.getAction(data || []));
  }, [data, dispatch]);

  const isSearchQueryValid = searchQuery && searchQuery.trim() !== '';

  let contentToRender;

  if (isLoading) {
    contentToRender = <LoadingSpinner />;
  } else if (quizesList.length === 0 && isSearchQueryValid) {
    contentToRender = (
      <p className={styles['message-card']}>
        No matching elements found for &quot;{searchQuery}&quot;
      </p>
    );
  } else {
    contentToRender = quizesList.map((quiz) => (
      <QuizCard key={quiz.id} quiz={quiz} />
    ));
  }

  if (error) {
    contentToRender = <p>{error}</p>;
  }

  return <CardContainer>{contentToRender}</CardContainer>;
}

export default Quizes;
