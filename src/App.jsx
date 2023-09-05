import React from 'react';
import '../src/assets/fonts/Font.css';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/ Main';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
// import { Quizes } from './pages/quizes';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Main />
//       <Footer />
//     </div>
//   );
// }

function Dashboard() {
  return (
    <div className='container'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route
          path="contact-us"
          element={<>Hello!</>}
        />
        <Route path="about-us" element={<>Buy</>} />
        <Route path="" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
