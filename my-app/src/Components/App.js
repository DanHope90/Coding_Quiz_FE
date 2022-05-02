import "../Styles/App.css";
import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";
import Layout from "./Layout";
import Home from "./Home";
import TakeAQuiz from "./TakeAQuiz";
import SavedQuizzes from "./SavedQuizzes";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="navbar"><NavBar /></div>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/take-a-quiz" element={<TakeAQuiz />} />
            <Route path="/saved-quizzes" element={<SavedQuizzes />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
