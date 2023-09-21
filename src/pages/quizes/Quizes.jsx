import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { quizes } from '../../api/quizes/quizes';
import { CardContainer } from './styled';
import QuizCard from '../../components/Cards/QuizCard';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import styles from './Quizes.module.css';

function Quizes() {
  const [quizzes, setQuizzes] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const { searchQuery } = useParams();

  const fetchQuizList = useCallback(async () => {
    try {
      const response = await quizes.get();
      setQuizzes(response);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err.message || 'An error occurred while fetching quizzes.');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuizList();
  }, [fetchQuizList]);

  const isSearchQueryValid = searchQuery && searchQuery.trim() !== '';

  let filteredQuizzes = [];

  if (!loading && Array.isArray(quizzes)) {
    try {
      filteredQuizzes = isSearchQueryValid
        ? quizzes.filter((quiz) => quiz.quiz.toLowerCase().includes(searchQuery.toLowerCase()))
        : quizzes;
    } catch (filterError) {
      console.error('Error while filtering quizzes:', filterError);
    }
  }

  let contentToRender;

  if (loading) {
    contentToRender = <LoadingSpinner />;
  } else if (filteredQuizzes.length === 0 && isSearchQueryValid) {
    contentToRender = <p className={styles['message-card']}>
      No matching elements found for &quot;{searchQuery}&quot;</p>;
  } else {
    contentToRender = filteredQuizzes.map((quiz) => (
      <QuizCard key={quiz.id} quiz={quiz} />
    ));
  }

  if (error) {
    contentToRender = <p>{error}</p>;
  }

  return <CardContainer>{contentToRender}</CardContainer>;
}

export default Quizes;

// import React, { useCallback, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { quizes } from '../../api/quizes/quizes';
// import { CardContainer } from './styled';
// import QuizCard from '../../components/Cards/QuizCard';
// import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

// function Quizes() {
//   const [quizzes, setQuizzes] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);
//   const { searchQuery } = useParams();

//   const fetchQuizList = useCallback(async () => {
//     try {
//       const response = await quizes.get();
//       setQuizzes(response);
//       setLoading(false);
//     } catch (err) {
//       console.log(err);
//       setError(err.message || 'An error occurred while fetching quizzes.');
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchQuizList();
//   }, [fetchQuizList]);

//   const isSearchQueryValid = searchQuery && searchQuery.trim() !== '';

//   let filteredQuizzes = [];

//   if (!loading && Array.isArray(quizzes)) {
//     try {
//       filteredQuizzes = isSearchQueryValid
//         ? quizzes.filter((quiz) => quiz.quiz.toLowerCase().includes(searchQuery.toLowerCase()))
//         : quizzes;
//     } catch (filterError) {
//       console.error('Error while filtering quizzes:', filterError);
//     }
//   }

//   if (error) return <p>{error}</p>;

//   return (
//     <CardContainer>
//       {loading ? (
//         <LoadingSpinner />
//       ) : (
//         filteredQuizzes.map((quiz) => (
//           <QuizCard key={quiz.id} quiz={quiz} />
//         ))
//       )}
//     </CardContainer>
//   );
// }

// export default Quizes;
