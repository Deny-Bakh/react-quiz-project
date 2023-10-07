import React from 'react';
import './assets/fonts/Font.css';
import './App.css';
import {
  Routes, Route,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import QuizPage from './pages/QuizPage/QuizPage';
import { Quizes } from './pages/quizes';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';
import QuizResultCard from './components/QuizResultCard/QuizResultCard';
import TimeoutMessage from './components/TimeoutMessage/TimeoutMessage';
import QuizCreationPage from './pages/CreateQuiz/QuizCreationPage';
import QuizSuccessCard from './components/QuizSuccessCard/QuizSuccessCard';
import FavoriteQuizes from './pages/FavoriteQuizes/FavoriteQuizes';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/*" element={<NotFound />} />
          <Route path="quiz/:searchQuery?" element={<Quizes />} />
          <Route path="/favorite" element={<FavoriteQuizes />} />
          <Route path="/create" element={<QuizCreationPage />} />
          <Route path="/quiz-created" element={<QuizSuccessCard />} />
          <Route path="select" element={<Quizes />} />
          <Route path="/quiz-page/:quizName" element={<QuizPage />} />
          <Route path="/quiz-page/:quizName/quiz-result" element={<QuizResultCard />} />
          <Route path="/quiz-page/:quizName/timeout-message" element={<TimeoutMessage />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
  );
}

export default App;
