import "../Styles/App.css";
import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="navbar"><NavBar /></div>
      <div className="sidebar"><SideBar /></div>
      <div>Welcome!</div>
    </Router>
  );
}

export default App;