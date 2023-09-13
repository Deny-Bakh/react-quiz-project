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

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import QuizQuestion from "../../components/QuizQuestion/QuizQuestion";
import QuestionData from "../../components/QuizQuestion/QuestionData";

const QuizPage = () => {
    const { id } = useParams();
    const quizData = QuestionData[id];

    const initialScore = 0;
    const initialCurrentQuestion = 0;
  
    // Check if quizData is undefined or empty
    if (!quizData || quizData.length === 0) {
      return <p>Quiz not found or data is empty.</p>;
    }
  
    const [score, setScore] = useState(initialScore);
    const [currentQuestion, setCurrentQuestion] = useState(initialCurrentQuestion);
  
    const handleAnswer = (isCorrect) => {
      if (isCorrect) {
        setScore(score + 1);
      }
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Quiz is over, you can navigate to a result page or handle it here
      }
    };
  
    return (
      <div>
        <h1>{quizData[0].question}</h1>
        <QuizQuestion
          QuestionData={quizData[currentQuestion]}
          onAnswer={handleAnswer}
          currentQuestion={currentQuestion + 1}
          totalQuestions={quizData.length}
        />
      </div>
    );
  };

  export default QuizPage;

