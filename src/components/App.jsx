import React, { useState } from "react";
import data from "../testdata.js";
import Gameboard from "./Gameboard.jsx";

const App = () => {
  const [categories, setCategories] = useState(data.categories);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [score, setScore] = useState(0);

  const props = {
    categories,
    currentQuestion,
    answeredQuestions,
  }
  return (
    <div id={"app"}>
      
      <Gameboard {...props}/>
      {/* Scoreboard */}
      {/* Response */}
    </div>
  );
};

export default App;
