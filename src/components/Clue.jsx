import React from "react";

const Clue = (props) => {
  // show $ value of clue OR
  // the Clue question itself OR
  
  // empty screen if it was already answered
 if(props.answeredQuestions.indexOf(props.clue.id) === -1){
  return <div className="clueValue" data-testid="value" 
  onClick={()=>(
    props.setCurrentQuestion(props.clue)
   
   ) }>
    ${props.clue.value}
    </div>;
  
} else {
  return <div className="clueValue" data-testid="value"></div>
}
};
export default Clue;
