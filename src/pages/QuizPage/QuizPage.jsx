import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import QuizResultCard from '../../components/QuizResultCard/QuizResultCard';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import TimeoutMessage from '../../components/Timeout/TimeoutMessage';
import { quizApi } from '../../api/quizApi/quizApi';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [quizStartTime, setQuizStartTime] = useState(null);
  const { quizName } = useParams();

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.answer === selectedAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  useEffect(() => {
    const fetchChosenQuiz = async () => {
      try {
        const response = await quizApi.get(quizName);

        const filteredQuestions = response.filter(
          (question) => question.chozenQuiz === quizName,
        );

        setQuestions(filteredQuestions);
        setQuizStartTime(Date.now());
      } catch (err) {
        console.error(err);
        setError(err.message || 'An error occurred while fetching questions.');
      }
    };

    fetchChosenQuiz();
  }, [quizName]);

  useEffect(() => {
    let timer;

    if (!quizCompleted && timeLeft > 0) {
      timer = setInterval(() => {
        if (timeLeft > 0) {
          setTimeLeft(timeLeft - 1);
        } else {
          clearInterval(timer);
          setQuizCompleted(true);
        }
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [quizCompleted, timeLeft]);

  if (error) return <p>{error}</p>;

  const isLoadingQuestions = questions.length === 0;
  const isQuizInProgress = !quizCompleted && timeLeft > 0 && currentQuestionIndex < questions.length;
  const isTimeout = !quizCompleted && timeLeft <= 0 && currentQuestionIndex < questions.length;

  return (
    <div>
      {isLoadingQuestions && <LoadingSpinner />}
      {isQuizInProgress && (
        <QuestionCard
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          image={questions[currentQuestionIndex].image}
          onNextQuestion={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
          onAnswerSelected={handleAnswer}
          timeLeft={timeLeft}
        />
      )}
      {isTimeout && (
        <TimeoutMessage
          onTryAgain={() => {
            setCurrentQuestionIndex(0);
            setCorrectAnswers(0);
            setQuizCompleted(false);
            setTimeLeft(180);
            setQuizStartTime(Date.now());
          }}
        />
      )}
      {quizCompleted && (
        <QuizResultCard
          correctAnswers={correctAnswers}
          totalQuestions={questions.length}
          quizStartTime={quizStartTime}
        />
      )}
    </div>
  );
}

export default QuizPage;
