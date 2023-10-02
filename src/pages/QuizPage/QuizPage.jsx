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
      navigate(`/quiz-page/${quizName}/quiz-result`);
    }
  };

  useEffect(() => {
    dispatch(fetchChosenQuiz(quizName));
  }, [dispatch, quizName]);

  useEffect(() => {
    if (!isLoadingQuestions && !error) {
      const timer = setInterval(() => {
        if (timeLeft > 0) {
          dispatch(quizActions.updateTimeLeft(timeLeft - 1));
        } else {
          clearInterval(timer);
          navigate(`/quiz-page/${quizName}/timeout-message`);
        }
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [isLoadingQuestions, timeLeft, dispatch, navigate, quizName, error]);

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

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useParams, useNavigate } from 'react-router-dom';
// import { fetchChosenQuiz, quizActions } from '../../store/quiz';
// import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
// import QuestionCard from '../../components/QuestionCard/QuestionCard';
// import { useGetQuizApiByNameQuery } from '../../api/quizApi/quizApi';

// // const DEFAULT_QUIZ_DURATION = 180;

// function QuizPage() {
//   const {
//     questions,
//     error,
//     currentQuestionIndex,
//     correctAnswers,
//     timeLeft,
//     // quizStartTime,
//     isLoadingQuestions,
//   } = useSelector((state) => state.quiz);

//   const dispatch = useDispatch();
//   const { quizName } = useParams();
//   const navigate = useNavigate();
//   const { data } = useGetQuizApiByNameQuery('chosenQuiz');

//   const handleAnswer = (selectedAnswer) => {
//     const currentQuestion = questions[currentQuestionIndex];

//     if (currentQuestion.answer === selectedAnswer) {
//       dispatch(quizActions.updateCorrectAnswers(correctAnswers + 1));
//     }

//     if (currentQuestionIndex < questions.length - 1) {
//       dispatch(quizActions.updateCurrentQuestion(currentQuestionIndex + 1));
//     } else {
//       navigate(`/quiz-page/${quizName}/quiz-result`);
//     }
//   };

//   useEffect(() => {
//     dispatch(quizActions.resetQuizState());
//     dispatch(fetchChosenQuiz(data));
//   }, [data, dispatch]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       if (timeLeft > 0) {
//         dispatch(quizActions.updateTimeLeft(timeLeft - 1));
//       } else {
//         navigate(`/quiz-page/${quizName}/timeout-message`);
//       }
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, [timeLeft, dispatch, navigate, quizName]);

//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       {isLoadingQuestions && <LoadingSpinner />}
//       {currentQuestionIndex < questions.length && (
//         <QuestionCard
//           question={questions[currentQuestionIndex].question}
//           options={questions[currentQuestionIndex].options}
//           image={questions[currentQuestionIndex].image}
//           onNextQuestion={() => dispatch(
//             quizActions.updateCurrentQuestion(currentQuestionIndex + 1),
//           )}
//           onAnswerSelected={handleAnswer}
//           timeLeft={timeLeft}
//         />
//       )}
//     </div>
//   );
// }

// export default QuizPage;
