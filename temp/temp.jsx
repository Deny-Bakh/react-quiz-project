// import logo from './logo.svg';
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="App">
//       <Header />

//       <Footer />
//     </div>
//   );
// }

// function App() {
//   const [data, setData] = useState({ question: '', answers: [] });

//   useEffect(() => {
//     fetch('https://mockapi.io/api/v1/questions/favorite-color')
//       .then((response) => response.json())
//       .then((data) => setData(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="App">
//        <Header />
//       <h1>{data.question}</h1>
//       <ul>
//         {data.answers.map((answer, index) => (
//           <li key={index}>{answer}</li>
//         ))}
//       </ul>
//       <Footer />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import QuestionData from './QuestionData';
// import Question from './Question';

// function App() {
//   return (
//     <div className="App">
//       <h1>Lord of the Rings Quiz</h1>
//       {QuestionData.map((QuestionData, index) => (
//         <Question key={index} QuestionData={QuestionData} />
//       ))}
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import QuestionData from './QuestionData';
// import Question from './Question';

// function App() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);

//   const handleAnswer = (isCorrect) => {
//     if (isCorrect) {
//       setScore(score + 1);
//     }

//     // Check if there are more questions
//     if (currentQuestionIndex < QuestionData.length - 1) {
//       // Move to the next question
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const isQuizComplete = currentQuestionIndex === QuestionData.length;

//   return (
//     <div className="App">
//       <h1>Lord of the Rings Quiz</h1>
//       {!isQuizComplete ? (
//         <Question
//           key={currentQuestionIndex}
//           QuestionData={QuestionData[currentQuestionIndex]}
//           onAnswer={handleAnswer}
//         />
//       ) : (
//         <div>
//           <h2>Quiz Complete!</h2>
//           <p>Your score: {score} out of {QuestionData.length}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import QuestionData from './QuestionData';
// import Question from './Question';

// function App() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [quizComplete, setQuizComplete] = useState(false);

//   const handleAnswer = (isCorrect) => {
//     if (isCorrect) {
//       setScore(score + 1);
//     }

//     // Check if there are more questions
//     if (currentQuestionIndex < QuestionData.length - 1) {
//       // Move to the next question
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       // All questions answered, quiz is complete
//       setQuizComplete(true);
//     }
//   };

//   return (
//     <div className="App">
//       <Header />
//       <h1 className='main_name'>Lord of the Rings Quiz</h1>
//       {!quizComplete ? (
//         <Question
//           key={currentQuestionIndex}
//           QuestionData={QuestionData[currentQuestionIndex]}
//           onAnswer={handleAnswer}
//         />
//       ) : (
//         <div className='quiz_complete_card'>
//           <h2 className='quiz_complete_name'>Quiz Complete!</h2>
//           <p className='quiz_complete_par'>Your score: {score} out of {QuestionData.length}</p> { }
//         </div>
//       )}
//       <Footer />
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// // import QuestionData from './QuestionData';
// // import Question from './Question';

// function App() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [quizComplete, setQuizComplete] = useState(false);

//   const handleAnswer = (isCorrect) => {
//     if (isCorrect) {
//       setScore(score + 1);
//     }

//     // Check if there are more questions
//     if (currentQuestionIndex < QuestionData.length - 1) {
//       // Move to the next question
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       // All questions answered, quiz is complete
//       setQuizComplete(true);
//     }
//   };

//   return (
//     <div className="App">
//       <Header />
//       <h1 className='main_name'>Lord of the Rings Quiz</h1>
//       {!quizComplete ? (
//         <Question
//           key={currentQuestionIndex}
//           QuestionData={QuestionData[currentQuestionIndex]}
//           onAnswer={handleAnswer}
//           currentQuestion={currentQuestionIndex + 1} // Pass current question number
//           totalQuestions={QuestionData.length} // Pass total number of questions
//         />
//       ) : (
//         <div className='quiz_complete_card card'>
//           <h2 className='quiz_complete_name'>Quiz Complete!</h2>
//           <p className='quiz_complete_par'>Your score: {score} out of {QuestionData.length}</p>
//         </div>
//       )}
//       <Footer />
//     </div>
//   );
// }

// export default App;