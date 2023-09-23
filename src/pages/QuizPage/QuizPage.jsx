import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import { quizApi } from '../../api/quizApi/quizApi';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const quizDuration = 180;
  const [timeLeft, setTimeLeft] = useState(quizDuration);
  const [quizStartTime, setQuizStartTime] = useState(null);
  const { quizName } = useParams();
  const navigate = useNavigate();

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.answer === selectedAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate(`/quiz-page/${quizName}/quiz-result`, {
        state: {
          correctAnswers,
          totalQuestions: questions.length,
          quizStartTime,
          timeLeft,
          quizDuration,
        },
      });
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
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(timer);
        navigate(`/quiz-page/${quizName}/timeout-message`);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, navigate, quizName]);

  if (error) return <p>{error}</p>;

  const isLoadingQuestions = questions.length === 0;

  return (
    <div>
      {isLoadingQuestions && <LoadingSpinner />}
      {currentQuestionIndex < questions.length && (
        <QuestionCard
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          image={questions[currentQuestionIndex].image}
          onNextQuestion={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
          onAnswerSelected={handleAnswer}
          timeLeft={timeLeft}
        />
      )}
    </div>
  );
}

export default QuizPage;
