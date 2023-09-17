// import React, { useState } from 'react';
// import './QuizQuestion.css';
// import QuestionData from './QuestionData';
// // import '../src/fonts/Font.css';

// const QuizQuestion = ({ QuestionData, onAnswer, currentQuestion, totalQuestions }) => {
//   const { question, answers, correctAnswer } = QuestionData;
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [answered, setAnswered] = useState(false);
//   const [isButtonPressed, setButtonPressed] = useState(false);

//   const handleAnswerChange = (index) => {
//     setSelectedAnswer(index);
//   };

//   const handleSubmit = () => {
//     setAnswered(true);
//     onAnswer(selectedAnswer === correctAnswer);
//   };

//   const getLabelStyle = (index) => {
//     const isSelected = selectedAnswer === index;
//     return {
//       background: isSelected ? '#fff' : 'transparent',
//       color: isSelected ? '#000' : '#fff',
//       padding: '5px',
//       borderRadius: '10px',
//       transition: 'background-color 0.3s, color 0.3s',
//     };
//   };

//   return (
//     <div className='card'>
//       <h2>
//         Question {currentQuestion} out of {totalQuestions}
//       </h2>
//       <h2 className='question_title'>{question}</h2>
//       <ul>
//         {answers.map((answer, index) => (
//           <li key={index}>
//             <label
//               htmlFor={`answer${index}`}
//               style={getLabelStyle(index)}
//             >
//               <input
//                 type="radio"
//                 className='custom_radio'
//                 id={`answer${index}`}
//                 name="answer"
//                 value={index}
//                 onChange={() => handleAnswerChange(index)}
//                 disabled={answered}
//               />
//               {answer}
//             </label>
//           </li>
//         ))}
//       </ul>
//       <button
//         className={`submit_button ${isButtonPressed ? 'button-pressed' : ''}`}
//         onClick={() => {
//           setButtonPressed(true);
//           setTimeout(() => {
//             setButtonPressed(false);
//             handleSubmit();
//           }, 500);
//         }}
//         disabled={answered || selectedAnswer === null}
//       >
//         I Choose This
//       </button>
//     </div>
//   );
// };

// export default QuizQuestion;
