// import { useNavigate } from 'react-router-dom';

// const StartQuiz = (title) => {
//   const navigate = useNavigate();
//   const params = title.replaceAll(' ', '').toLowerCase();
//   navigate(`/select/${params}`);
// };

// export default StartQuiz;

// // QuizPage.js

// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

// const StartQuiz = ({ title }) => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // You can perform any necessary transformations on 'title' here.
//     const params = title.replaceAll(' ', '').toLowerCase();
//     navigate(`/select/${params}`);
//   }, [title, navigate]);

//   return null; // You don't need to return anything from this component.
// };

// export default StartQuiz;

export default function StartQuiz() {
  alert('The quiz is starting!');
}
