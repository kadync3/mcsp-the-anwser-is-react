import React, { useState } from "react";
import Scoreboard from "./Scoreboard";

const Response = (props) => {
  const [userResponse, setUserResponse] = useState("");
console.log(props)
  const recordResponse = (event) => {
  
    setUserResponse(event.target.value)
  };

  const submitResponse = (event) => {
    // this function should fire when the user fills the response and hits 'enter'
   if (event.key === 'Enter'){
    console.log('Current anwser', props.currentQuestion.answer)
    if(userResponse === ''){
      return;
    }
    if(userResponse.toLowerCase() ===  props.currentQuestion.answer.toLowerCase()){
        console.log('correct')
       
        //update score
        props.setScore((prev)=>prev + props.currentQuestion.value)
       
    } else {
      console.log('better Luck next time')
      
      props.setScore((prev)=>prev - props.currentQuestion.value)
    }
    props.setAnsweredQuestions((prev)=> [...prev, props.currentQuestion.id]);
    props.setCurrentQuestion({});
    setUserResponse('');
    // Is the user response correct?
    // yes/no? What should happen?
   }
  }
  return (
    <div id="response" data-testid="response">
      <input
     
        type="text"
        placeholder="Answers go here!"
        // handle data change
        onChange={(e)=> recordResponse(e)}
        onKeyDown={(e)=> submitResponse(e)}
        value={userResponse}
        // handle when 'enter' is hit
      />
      
    </div>
  );
};

export default Response;
