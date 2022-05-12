import React, { useContext } from "react";
import Context from "../Utils/Context";
import "../Styles/Home.css";

function Home() {
  const { userInfo } = useContext(Context);

  return (
    <div className="home-text">
      <div>Welcome to Dev Quiz!</div>
      <div>You are logged in as: </div>
      <div className="user-name">{userInfo.userName}</div>
      <div>Use the navigation bar above to take or view your quizzes.</div>
    </div>
  );
}

export default Home;
