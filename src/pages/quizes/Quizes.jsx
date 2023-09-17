// import React, { useCallback, useEffect, useState } from 'react';
// import { quizes } from '../../api/quizes/quizes';
// import { CardContainer } from "./styled";
// import Card from '../../components/Cards/QuizCard';

// function Quizes() {
//   const [quizzes, setQuizList] = useState([]);
//   const [error, setError] = useState('');

//   const fetchQuizList = useCallback(async () => {

//     try {
//       const response = await quizes.get();
//       setQuizList(response);
//     } catch (err) {
//       console.log(err);
//       setError(err);
//     }
//   }, [setQuizList, setError]);

//   useEffect(() => {
//     fetchQuizList();
//   }, [fetchQuizList]);

// if (error) return <p>{error}</p>;

//   return (
//     <CardContainer>
//       {quizzes.map((quiz) => (
//         <Card key={quiz.id} quiz={quiz} />
//       ))}
//     </CardContainer>
//   );
// }

// export default Quizes;
// import React, { useCallback, useEffect, useState } from 'react';
// import { quizes } from '../../api/quizes/quizes';
// import { CardContainer } from './styled';
// import QuizCard from '../../components/Cards/QuizCard';

// function Quizes() {
//   const [quizzes, setQuizList] = useState([]);
//   const [error, setError] = useState('');

//   const fetchQuizList = useCallback(async () => {
//     try {
//       const response = await quizes.get();
//       setQuizList(response);
//     } catch (err) {
//       console.log(err);
//       setError(err);
//     }
//   }, [setQuizList, setError]);

//   useEffect(() => {
//     fetchQuizList();
//   }, [fetchQuizList]);

//   if (error) return <p>{error}</p>;

//   return (
//     <CardContainer>
//       {quizzes.map((quiz) => (
//         <QuizCard key={quiz.id} quiz={quiz} />
//       ))}
//     </CardContainer>
//   );
// }

// export default Quizes;

// import React, { useCallback, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { quizes } from '../../api/quizes/quizes';
// import { CardContainer } from './styled'; // Import your styled components
// import QuizCard from '../../components/Cards/QuizCard';

// function Quizes() {
//   const [quizzes, setQuizList] = useState([]);
//   const [error, setError] = useState('');

//   const fetchQuizList = useCallback(async () => {
//     try {
//       const response = await quizes.get();
//       setQuizList(response);
//     } catch (err) {
//       console.log(err);
//       setError(err);
//     }
//   }, [setQuizList, setError]);

//   useEffect(() => {
//     fetchQuizList();
//   }, [fetchQuizList]);

//   const { searchQuery } = useParams();

//   const filteredQuizzes = quizzes.filter((quiz) => quiz.name.toLowerCase().includes(searchQuery.toLowerCase()));

//   if (error) return <p>{error}</p>;

//   return (
//     <CardContainer>
//       {filteredQuizzes.map((quiz) => (
//         <QuizCard key={quiz.id} quiz={quiz} />
//       ))}
//     </CardContainer>
//   );
// }

// export default Quizes;

import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { quizes } from '../../api/quizes/quizes';
import { CardContainer } from './styled';
import QuizCard from '../../components/Cards/QuizCard';

function Quizes() {
  const [quizzes, setQuizList] = useState([]);
  const [error, setError] = useState('');

  const fetchQuizList = useCallback(async () => {
    try {
      const response = await quizes.get();
      setQuizList(response);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  }, [setQuizList, setError]);

  useEffect(() => {
    fetchQuizList();
  }, [fetchQuizList]);

  const { searchQuery } = useParams();

  const isSearchQueryValid = searchQuery && searchQuery.trim() !== '';

  const filteredQuizzes = isSearchQueryValid
    ? quizzes.filter((quiz) => quiz.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : quizzes;

  if (error) return <p>{error}</p>;

  return (
    <CardContainer>
      {filteredQuizzes.map((quiz) => (
        <QuizCard key={quiz.id} quiz={quiz} />
      ))}
    </CardContainer>
  );
}

export default Quizes;
