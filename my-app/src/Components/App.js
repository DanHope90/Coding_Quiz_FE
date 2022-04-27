import "../Styles/App.css";
import React from "react";
import NavBar from "./NavBar";
import Layout from "./Layout";
import Home from "./Home";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="navbar"><NavBar /></div>
        <Layout><Home /></Layout>
      </Router>
    </div>
  );
}

export default App;