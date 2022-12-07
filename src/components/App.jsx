import React, { useState } from "react";
import data from "../testdata.js";
import Gameboard from "./Gameboard.jsx";
import Scoreboard from "./Scoreboard.jsx";
import Response from "./Response.jsx"; 
const App = () => {
  const [categories, setCategories] = useState(data.categories);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [score, setScore] = useState(0);

  const props = {
    categories, setCategories,
    answeredQuestions, setAnsweredQuestions,
    currentQuestion, setCurrentQuestion,
    score, setScore,
  }
  return (
    <div id={"app"}>
      
      <Gameboard {...props}/>
      <Scoreboard {...props}/>
      <Response {...props}/>
    </div>
  );
};

export default App;
