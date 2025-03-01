import React, { useState,useContext } from 'react'
import { Questions } from '../Helpers/QuestionBank'
import { QuizContext } from '../Helpers/Context'

const Quiz = () => {
const{score,setScore,gameState,setGameState}=useContext(QuizContext)
    const [currentQuestion,setCurrentQuestion]=useState(0)
    const [optionChosen,setOptionChosen]=useState("")

    const nextQustion=()=>{
         if(Questions[currentQuestion].answer==optionChosen){
            setScore(score + 1)
        }
        setCurrentQuestion(currentQuestion + 1)
    };

    const finishQuiz=()=>{
        if(Questions[currentQuestion].answer==optionChosen){
            setScore(score + 1);
        }
    setGameState("endScreen");
    }
  return (
    <div className='quiz'>
        <h1>{Questions[currentQuestion].Prompt}</h1>
        <div className='options'>
            <button onClick={()=>setOptionChosen("A")}>{Questions[currentQuestion].optionA}</button>
            <button onClick={()=>setOptionChosen("B")}>{Questions[currentQuestion].optionB}</button>
            <button onClick={()=>setOptionChosen("C")}>{Questions[currentQuestion].optionC}</button>
            <button onClick={()=>setOptionChosen("D")}>{Questions[currentQuestion].optionD}</button>
        </div>
        {currentQuestion==Questions.length-1?
         <button onClick={finishQuiz}>Finish quiz</button>:
     <button onClick={nextQustion}>Next Question</button>}
       
    </div>
  )
}

export default Quiz