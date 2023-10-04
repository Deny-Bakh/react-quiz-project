// import React from 'react';
// import '../src/assets/fonts/Font.css';
// import './App.css';
// import Header from './components/Header/Header';
// import Main from './components/Main/ Main';
// import Footer from './components/Footer/Footer';
// import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

// function Dashboard() {
//   return (
//     <div className='container'>
//       <Header />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// }

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Dashboard />}>
//         <Route
//           path="contact-us"
//           element={<>Hello!</>}
//         />
//         <Route path="about-us" element={<>Buy</>} />
//         <Route path="" element={<Main />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;

// import React from 'react';
// import './assets/fonts/Font.css';
// import './App.css';
// import {
//   BrowserRouter as Router, Routes, Route, Outlet,
// } from 'react-router-dom';
// import Header from './components/Header/Header';
// import Home from './pages/Home/Home';
// import Main from './components/Main/ Main';
// import Footer from './components/Footer/Footer';
// import QuizPage from './pages/QuizPage/QuizPage';
// import { Quizes } from './pages/quizes';
// // import QuizQuestion from "./components/QuizQuestion/QuizQuestion";
// // import QuizSelection from "./components/QuizSelection/QuizSelection";

// function Dashboard() {
//   return (
//     <div className="container">
//       <Header />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// }

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Dashboard />}>
//         <Route path="/quiz/:searchQuery?" element={<Quizes />} />
//         <Route path="/" element={<Home />} />
//         <Route path="about-us" element={<>Buy</>} />
//         <Route path="/select" element={<Main />} />
//         <Route path="/quiz" element={<QuizPage />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;

import React from 'react';
import './assets/fonts/Font.css';
import './App.css';
import {
  Routes, Route,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Main from './components/Main/ Main';
import QuizPage from './pages/QuizPage/QuizPage';
import { Quizes } from './pages/quizes';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';
import QuizResultCard from './components/QuizResultCard/QuizResultCard';
import TimeoutMessage from './components/TimeoutMessage/TimeoutMessage';
import QuizCreationPage from './pages/CreateQuiz/QuizCreationPage';
import QuizSuccessCard from './components/QuizSuccessCard/QuizSuccessCard';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/*" element={<NotFound />} />
          <Route path="quiz/:searchQuery?" element={<Quizes />} />
          <Route path="/favorite" element={<>Buy</>} />
          <Route path="/create" element={<QuizCreationPage />} />
          <Route path="/quiz-created" element={<QuizSuccessCard />} />
          <Route path="select" element={<Main />} />
          <Route path="/quiz-page/:quizName" element={<QuizPage />} />
          <Route path="/quiz-page/:quizName/quiz-result" element={<QuizResultCard />} />
          <Route path="/quiz-page/:quizName/timeout-message" element={<TimeoutMessage />} />
          <Route path="/timeout" element={<TimeoutMessage />} />
          QuizSuccessCard
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
  );
}

export default App;
