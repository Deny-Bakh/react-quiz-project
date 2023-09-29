// import React, { useState, useEffect, useCallback } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import QuestionCard from '../../components/QuestionCard/QuestionCard';
// import { quizApi } from '../../api/quizApi/quizApi';
// import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

// const DEFAULT_QUIZ_DURATION = 180;

// function QuizPage() {
//   const [questions, setQuestions] = useState([]);
//   const [error, setError] = useState('');
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [correctAnswers, setCorrectAnswers] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(DEFAULT_QUIZ_DURATION);
//   const [quizStartTime, setQuizStartTime] = useState(null);
//   const { quizName } = useParams();
//   const navigate = useNavigate();

//   const handleAnswer = (selectedAnswer) => {
//     const currentQuestion = questions[currentQuestionIndex];

//     if (currentQuestion.answer === selectedAnswer) {
//       setCorrectAnswers(correctAnswers + 1);
//     }

//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       navigate(`/quiz-page/${quizName}/quiz-result`, {
//         state: {
//           correctAnswers,
//           totalQuestions: questions.length,
//           quizStartTime,
//           timeLeft,
//           DEFAULT_QUIZ_DURATION,
//         },
//       });
//     }
//   };

//   const fetchChosenQuiz = useCallback(async () => {
//     try {
//       const response = await quizApi.get(quizName);

//       const filteredQuestions = response.filter(
//         (question) => question.chozenQuiz === quizName,
//       );

//       setQuestions(filteredQuestions);
//       setQuizStartTime(Date.now());
//     } catch (err) {
//       console.error(err);
//       setError(err.message || 'An error occurred while fetching questions.');
//     }
//   }, [quizName]);

//   useEffect(() => {
//     fetchChosenQuiz();
//   }, [fetchChosenQuiz]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       if (timeLeft > 0) {
//         setTimeLeft(timeLeft - 1);
//       } else {
//         clearInterval(timer);
//         navigate(`/quiz-page/${quizName}/timeout-message`);
//       }
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, [timeLeft, navigate, quizName]);

//   if (error) return <p>{error}</p>;

//   const isLoadingQuestions = questions.length === 0;

//   return (
//     <div>
//       {isLoadingQuestions && <LoadingSpinner />}
//       {currentQuestionIndex < questions.length && (
//         <QuestionCard
//           question={questions[currentQuestionIndex].question}
//           options={questions[currentQuestionIndex].options}
//           image={questions[currentQuestionIndex].image}
//           onNextQuestion={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
//           onAnswerSelected={handleAnswer}
//           timeLeft={timeLeft}
//         />
//       )}
//     </div>
//   );
// }

// export default QuizPage;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams, useNavigate } from 'react-router-dom';
// import QuestionCard from '../../components/QuestionCard/QuestionCard';
// import { fetchChosenQuizThunk } from '../../store/quiz/thunks';
// import {
//   setCorrectAnswers,
//   setCurrentQuestionIndex,
//   // setTimeLeft,
//   setQuizStartTime,
//   setError,
//   setIsLoadingQuestions,
//   setQuestions, // Import setQuestions action
// } from '../../store/quiz/actions'; // Import your action creators
// import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

// const DEFAULT_QUIZ_DURATION = 180;

// function QuizPage() {
//   const dispatch = useDispatch();
//   const { quizName } = useParams();
//   const navigate = useNavigate();

//   const questions = useSelector((state) => state.quiz.questions);
//   const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex);
//   const correctAnswers = useSelector((state) => state.quiz.correctAnswers);
//   const timeLeft = useSelector((state) => state.quiz.timeLeft);
//   const quizStartTime = useSelector((state) => state.quiz.quizStartTime);
//   const error = useSelector((state) => state.quiz.error);
//   const isLoadingQuestions = useSelector((state) => state.quiz.isLoadingQuestions);

//   useEffect(() => {
//     dispatch(fetchChosenQuizThunk(quizName))
//       .unwrap()
//       // eslint-disable-next-line promise/always-return
//       .then((response) => {
//         dispatch(setQuestions(response)); // Update questions in the state
//         dispatch(setQuizStartTime(Date.now()));
//       })
//       .catch((err) => {
//         dispatch(setError(err.message || 'An error occurred while fetching questions.'));
//         dispatch(setIsLoadingQuestions(false));
//       });
//   }, [dispatch, quizName]);

//   const handleAnswer = (selectedAnswer) => {
//     const currentQuestion = questions[currentQuestionIndex];

//     if (currentQuestion.answer === selectedAnswer) {
//       dispatch(setCorrectAnswers(correctAnswers + 1));
//     }

//     if (currentQuestionIndex < questions.length - 1) {
//       dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
//     } else {
//       navigate(`/quiz-page/${quizName}/quiz-result`, {
//         state: {
//           correctAnswers,
//           totalQuestions: questions.length,
//           quizStartTime,
//           timeLeft,
//           DEFAULT_QUIZ_DURATION,
//         },
//       });
//     }
//   };

//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       {isLoadingQuestions && <LoadingSpinner />}
//       {currentQuestionIndex < questions.length && (
//         <QuestionCard
//           question={questions[currentQuestionIndex].question}
//           options={questions[currentQuestionIndex].options}
//           image={questions[currentQuestionIndex].image}
//           onNextQuestion={() => dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1))}
//           onAnswerSelected={handleAnswer}
//           timeLeft={timeLeft}
//         />
//       )}
//     </div>
//   );
// }

// export default QuizPage;

// pages/QuizPage/QuizPage.jsx

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchChosenQuiz } from '../../store/quiz/thunks';
import { quizActions } from '../../store/quiz';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import QuestionCard from '../../components/QuestionCard/QuestionCard';

// const DEFAULT_QUIZ_DURATION = 180;

function QuizPage() {
  const {
    questions,
    error,
    currentQuestionIndex,
    correctAnswers,
    timeLeft,
    // quizStartTime,
    isLoadingQuestions,
  } = useSelector((state) => state.quiz);

  const dispatch = useDispatch();
  const { quizName } = useParams();
  const navigate = useNavigate();

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.answer === selectedAnswer) {
      dispatch(quizActions.updateCorrectAnswers(correctAnswers + 1));
    }

    if (currentQuestionIndex < questions.length - 1) {
      dispatch(quizActions.updateCurrentQuestion(currentQuestionIndex + 1));
    } else {
      dispatch(quizActions.resetQuizState());
      navigate(`/quiz-page/${quizName}/quiz-result`, {
        // state: {
        //   correctAnswers,
        //   totalQuestions: questions.length,
        //   quizStartTime,
        //   timeLeft,
        //   DEFAULT_QUIZ_DURATION,
        // },
      });
    }
  };

  useEffect(() => {
    dispatch(fetchChosenQuiz(quizName));
  }, [dispatch, quizName]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        dispatch(quizActions.updateTimeLeft(timeLeft - 1));
      } else {
        // clearInterval(timer);
        dispatch(quizActions.resetQuizState());
        navigate(`/quiz-page/${quizName}/timeout-message`);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, dispatch, navigate, quizName]);

  if (error) return <p>{error}</p>;

  return (
    <div>
      {isLoadingQuestions && <LoadingSpinner />}
      {currentQuestionIndex < questions.length && (
        <QuestionCard
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          image={questions[currentQuestionIndex].image}
          onNextQuestion={() => dispatch(
            quizActions.updateCurrentQuestion(currentQuestionIndex + 1),
          )}
          onAnswerSelected={handleAnswer}
          timeLeft={timeLeft}
        />
      )}
    </div>
  );
}

export default QuizPage;
