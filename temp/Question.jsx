// import React from 'react';
// // import QuestionData from './QuestionData';

// const Question = ({ QuestionData }) => {
//   const { question, answers } = QuestionData;

//   return (
//     <div>
//       <h2>{question}</h2>
//       <ul>
//         {answers.map((answer, index) => (
//           <li key={index}>{answer}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Question;

// import React, { useState } from 'react';
// import './Question.css'
// import '../src/fonts/Font.css';
// // import cursor from './images/cursor.svg';

// const Question = ({ QuestionData, onAnswer }) => {
//   const { question, answers, correctAnswer } = QuestionData;
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [answered, setAnswered] = useState(false);

//   const handleAnswerChange = (index) => {
//     setSelectedAnswer(index);
//   };

//   const handleSubmit = () => {
//     setAnswered(true);
//     onAnswer(selectedAnswer === correctAnswer);
//   };

//   return (
//     <div className='card'>
//       <h2>{question}</h2>
//         <ul>
//             {answers.map((answer, index) => (
//                 <li key={index}>
//                     <label className='label_pointer' htmlFor={`answer${index}`}>
//                         <input
//                         type="radio"
//                         className='custom_radio'
//                         id={`answer${index}`}
//                         name="answer"
//                         value={index}
//                         onChange={() => handleAnswerChange(index)}
//                         disabled={answered}
//                         />
//                         {answer}
//                     </label>
//                 </li>
//             ))}
//         </ul>
//         <button className='submit_button' onClick={handleSubmit} disabled={answered || selectedAnswer === null}>
//             I Choose This
//         </button>
//     </div>
//   );
// };

// export default Question;

// import React, { useState } from 'react';
// import './Question.css';
// import '../src/fonts/Font.css';

// const Question = ({ QuestionData, onAnswer }) => {
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

// //   const uniqueColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00']; // Define your unique colors here

// //   const getLabelStyle = (index) => {
// //     if (selectedAnswer === index) {
// //       const backgroundColor = uniqueColors[index % uniqueColors.length]; // Use a unique color based on index
// //       return {
// //         background: `linear-gradient(45deg, ${backgroundColor}, #fff)`,
// //         color: '#000',
// //         padding: '5px',
// //         borderRadius: '10px',
// //       };
// //     }
// //     return {};
// //   };

// const getLabelStyle = (index) => {
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
//       <h2>{question}</h2>
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
//   className={`submit_button ${isButtonPressed ? 'button-pressed' : ''}`}
//   onClick={() => {
//     setButtonPressed(true);
//     setTimeout(() => {
//       setButtonPressed(false); // Reset the button animation after the timeout
//       handleSubmit(); // Execute your form submission logic here
//     }, 500);
//   }}
//   disabled={answered || selectedAnswer === null}
// >
//   I Choose This
// </button>
//     </div>
//   );
// };

// export default Question;


import React, { useState } from 'react';
import './Question.css';
import '../src/fonts/Font.css';

const Question = ({ QuestionData, onAnswer, currentQuestion, totalQuestions }) => {
  const { question, answers, correctAnswer } = QuestionData;
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [isButtonPressed, setButtonPressed] = useState(false);

  const handleAnswerChange = (index) => {
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    setAnswered(true);
    onAnswer(selectedAnswer === correctAnswer);
  };

  const getLabelStyle = (index) => {
    const isSelected = selectedAnswer === index;
    return {
      background: isSelected ? '#fff' : 'transparent',
      color: isSelected ? '#000' : '#fff',
      padding: '5px',
      borderRadius: '10px',
      transition: 'background-color 0.3s, color 0.3s',
    };
  };

  return (
    <div className='card'>
      <h2>
        Question {currentQuestion} out of {totalQuestions}
      </h2>
      <h2 className='question_title'>{question}</h2>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>
            <label
              htmlFor={`answer${index}`}
              style={getLabelStyle(index)}
            >
              <input
                type="radio"
                className='custom_radio'
                id={`answer${index}`}
                name="answer"
                value={index}
                onChange={() => handleAnswerChange(index)}
                disabled={answered}
              />
              {answer}
            </label>
          </li>
        ))}
      </ul>
      <button
        className={`submit_button ${isButtonPressed ? 'button-pressed' : ''}`}
        onClick={() => {
          setButtonPressed(true);
          setTimeout(() => {
            setButtonPressed(false); // Reset the button animation after the timeout
            handleSubmit(); // Execute your form submission logic here
          }, 500);
        }}
        disabled={answered || selectedAnswer === null}
      >
        I Choose This
      </button>
    </div>
  );
};

export default Question;
