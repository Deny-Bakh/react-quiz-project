// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import QuizQuestion from "../../components/QuizQuestion/QuizQuestion";
// import QuestionData from "../../components/QuizQuestion/QuestionData";

// const QuizPage = () => {
//   const { id } = useParams();
//   const quizData = QuestionData[id];

//   const [score, setScore] = useState(0);
//   const [currentQuestion, setCurrentQuestion] = useState(0);

//   const handleAnswer = (isCorrect) => {
//     if (isCorrect) {
//       setScore(score + 1);
//     }
//     if (currentQuestion < quizData.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       // Quiz is over, you can navigate to a result page or handle it here
//     }
//   };

//   return (
//     <div>
//       <h1>{quizData[0].question}</h1>
//       <QuizQuestion
//         QuestionData={quizData[currentQuestion]}
//         onAnswer={handleAnswer}
//         currentQuestion={currentQuestion + 1}
//         totalQuestions={quizData.length}
//       />
//     </div>
//   );
// };

// export default QuizPage;

// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import QuizQuestion from "../../components/QuizQuestion/QuizQuestion";
// import QuestionData from "../../components/QuizQuestion/QuestionData";

// const QuizPage = () => {
//     const { id } = useParams();
//     const quizData = QuestionData[id];

//     const initialScore = 0;
//     const initialCurrentQuestion = 0;

//     const [score, setScore] = useState(initialScore);
//     const [currentQuestion, setCurrentQuestion] = useState(initialCurrentQuestion);

//     const handleAnswer = (isCorrect) => {
//       if (isCorrect) {
//         setScore(score + 1);
//       }
//       if (currentQuestion < quizData.length - 1) {
//         setCurrentQuestion(currentQuestion + 1);
//       } else {
//         // Quiz is over, you can navigate to a result page or handle it here
//       }
//     };

//     return (
//       <div>
//         <h1>{quizData[0].question}</h1>
//         <QuizQuestion
//           QuestionData={quizData[currentQuestion]}
//           onAnswer={handleAnswer}
//           currentQuestion={currentQuestion + 1}
//           totalQuestions={quizData.length}
//         />
//       </div>
//     );
//   };

//   export default QuizPage;

// import React, { useState } from 'react';
// // import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom';
// import QuizQuestion from '../../components/QuizQuestion/QuizQuestion';
// import QuestionData from '../../components/QuizQuestion/QuestionData';
// import QuizSelection from '../../components/QuizSelection/QuizSelection';

// const QuizPage = () => {
//   const { id } = useParams();
//   const quizData = QuestionData[id];

//   const initialScore = 0;
//   const initialCurrentQuestion = 0;

//   const [score, setScore] = useState(initialScore);
//   const [currentQuestion, setCurrentQuestion] = useState(initialCurrentQuestion);

//   const handleAnswer = (isCorrect) => {
//     if (isCorrect) {
//       setScore(score + 1);
//     }
//     if (currentQuestion < quizData.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       // Quiz is over, you can navigate to a result page or handle it here
//     }
//   };

//   return (
//     <div>
//       <h1>{quizData[0].question}</h1>
//       <QuizQuestion
//         QuestionData={quizData[currentQuestion]}
//         onAnswer={handleAnswer}
//         currentQuestion={currentQuestion + 1}
//         totalQuestions={quizData.length}
//       />
//       {/* Include the QuizSelection component here */}
//       <QuizSelection />
//     </div>
//   );
// };

// export default QuizPage;

// import React, { useState, useEffect, useCallback } from 'react';
// // import QuizQuestion from './QuizQuestion';
// import { lotrQuiz } from '../../api/lotrQuiz/lotrQuiz';

// function QuizPage() {
//   const [questions, setQuestions] = useState([]);
//   const [error, setError] = useState('');
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//   const fetchLotrQuiz = useCallback(async () => {
//     try {
//       const response = await lotrQuiz.get();
//       setQuestions(response);
//     } catch (err) {
//       console.log(err);
//       setError(err);
//     }
//   }, [setQuestions, setError]);

//   useEffect(() => {
//     fetchLotrQuiz();
//   }, [fetchLotrQuiz]);

//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       {questions.map((question, index) => (
//         <div key={question.id}>
//           <h2>Question {index + 1}</h2>
//           <p>{question.question}</p>
//           <ul>
//             {question.options.map((option, optionIndex) => (
//               <li key={optionIndex}>{option}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default QuizPage;

// import React, { useState, useEffect, useCallback } from 'react';
// import { lotrQuiz } from '../../api/lotrQuiz/lotrQuiz';

// function QuizPage() {
//   const [questions, setQuestions] = useState([]);
//   const [error, setError] = useState('');
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//   const fetchLotrQuiz = useCallback(async () => {
//     try {
//       const response = await lotrQuiz.get();
//       setQuestions(response);
//     } catch (err) {
//       console.log(err);
//       setError(err);
//     }
//   }, [setQuestions, setError]);

//   useEffect(() => {
//     fetchLotrQuiz();
//   }, [fetchLotrQuiz]);

//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       {questions.map((question, index) => (
//         <div key={question.id}>
//           <h2>Question {index + 1}</h2>
//           <p>{question.question}</p>
//           <ul>
//             {question.options.map((option, optionIndex) => (
//               <li key={optionIndex}>{option}</li>
//             ))}
//           </ul>
//         </div>
//       ))}

//       {currentQuestionIndex < questions.length - 1 && (
//         <button onClick={handleNextQuestion}>Next Question</button>
//       )}

//       {currentQuestionIndex === questions.length - 1 && (
//         <p>Congratulations, you have completed the quiz!</p>
//       )}
//     </div>
//   );
// }

// export default QuizPage;

// import React, { useState, useEffect, useCallback } from 'react';
// import { lotrQuiz } from '../../api/lotrQuiz/lotrQuiz';

// function QuizPage() {
//   const [questions, setQuestions] = useState([]);
//   const [error, setError] = useState('');
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//   const fetchLotrQuiz = useCallback(async () => {
//     try {
//       const response = await lotrQuiz.get();
//       setQuestions(response);
//     } catch (err) {
//       console.log(err);
//       setError(err);
//     }
//   }, [setQuestions, setError]);

//   useEffect(() => {
//     fetchLotrQuiz();
//   }, [fetchLotrQuiz]);

//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const handleAnswer = (selectedAnswer) => {
//     // Handle user's answer here
//     // You can check if the selectedAnswer is correct
//     // and update the user's score if needed
//     // Then, proceed to the next question
//     handleNextQuestion();
//   };

//   if (error) return <p>{error}</p>;

//   // Check if there are questions and if the current index is valid
//   const isQuestionAvailable = questions.length > 0 && currentQuestionIndex < questions.length;

//   return (
//     <div>
//       {isQuestionAvailable ? (
//         <div>
//           <h2>Question {currentQuestionIndex + 1}</h2>
//           <p>{questions[currentQuestionIndex].question}</p>
//           <ul>
//             {questions[currentQuestionIndex].options.map((option, optionIndex) => (
//               <li
//                 key={optionIndex}
//                 onClick={() => handleAnswer(option)}
//               >
//                 {option}
//               </li>
//             ))}
//           </ul>
//           <button onClick={handleNextQuestion}>Next Question</button>
//         </div>
//       ) : (
//         <p>Congratulations, you have completed the quiz!</p>
//       )}
//     </div>
//   );
// }

// export default QuizPage;

import React, { useState, useEffect } from 'react';
import { lotrQuiz } from '../../api/lotrQuiz/lotrQuiz';
import QuizResultCard from '../../components/QuizResultCard/QuizResultCard';
import QuestionCard from '../../components/QuestionCard/QuestionCard';

function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Function to handle user's answer
  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.answer === selectedAnswer) {
      // If the selected answer is correct
      setCorrectAnswers(correctAnswers + 1);
    }

    // Move to the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz completed
      setQuizCompleted(true);
    }
  };

  // Fetch quiz questions from your API using useEffect and useCallback

  useEffect(() => {
    const fetchLotrQuiz = async () => {
      try {
        const response = await lotrQuiz.get();
        setQuestions(response);
      } catch (err) {
        console.log(err);
        setError(err);
      }
    };

    fetchLotrQuiz();
  }, []);

  return (
    <div>
      {!quizCompleted ? (
        questions.length > 0 ? (
          <QuestionCard
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            onNextQuestion={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
            onAnswerSelected={handleAnswer}
          />
        ) : (
          <p>Loading questions...</p>
        )
      ) : (
        <QuizResultCard correctAnswers={correctAnswers} totalQuestions={questions.length} />
      )}
    </div>
  );
}

export default QuizPage;
