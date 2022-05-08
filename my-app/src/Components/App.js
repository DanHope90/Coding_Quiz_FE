/* eslint-disable react/jsx-no-constructed-context-values */
import "../Styles/App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";
import Layout from "./Layout";
import Home from "./Home";
import TakeAQuiz from "./TakeAQuiz";
import SavedQuizzes from "./SavedQuizzes";
import Register from "./Register";
import Login from "./Login";
import RandomQuiz from "./RandomQuiz";
import Context from "../Utils/Context";

function App() {
  // Below sets the initial alert.
  const initialState = {
    alert: { message: "", isSuccess: false },
  };

  const [alert, setAlert] = useState(initialState.alert);

  // Below employs an empty array to store all quizzes, useEffect makes an axios request
  // to populate said array with all quizzes.
  const [availableQuizzes, setAvailableQuizzes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/quizzes")
      .then(({ data }) => setAvailableQuizzes(data))
      .catch(() => setAlert({ message: "Axios promise rejected", isSuccess: false }));
  }, []);

  return (
    <Context.Provider value={{ availableQuizzes }}>
      <div className="app">
        <Router>
          <div className="navbar"><NavBar /></div>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/take-a-quiz" element={<TakeAQuiz alert={alert} />} />
              <Route path="/saved-quizzes" element={<SavedQuizzes />} />
              <Route path="/random-quiz" element={<RandomQuiz />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Layout>
        </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
