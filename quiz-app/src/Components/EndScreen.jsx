import React from 'react'
import { QuizContext } from '../Helpers/Context'
import { useContext } from 'react'
import { Questions } from '../Helpers/QuestionBank'
const EndScreen = () => {
    const{score,setGameState,setScore}=useContext(QuizContext)
    
const restartQuiz=()=>{
      setGameState("quiz")
      setScore(0)
}
  return (
    <div className='endScreen'>
        <h1>Quiz finished</h1>
        <h3>{score}/{Questions.length}</h3>
        <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default EndScreen