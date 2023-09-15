import React from "react";
import "./assets/fonts/Font.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Main from "./components/Main/ Main";
import Footer from "./components/Footer/Footer";

function Dashboard() {
  return (
    <div className="container">
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
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<>Buy</>} />
        <Route path="/select" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
