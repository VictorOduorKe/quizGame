
import React, { useState ,useContext} from 'react'
import "./App.css"
import MainMenu from './Components/MainMenu'
import Quiz from './Components/Quiz'
import EndScreen from './Components/EndScreen'
import { QuizContext } from './Helpers/Context'
import Footer from './Components/Footer'

const App = () => {
  const [gameState,setGameState]=useState("menu")
  const [score,setScore]=useState(0)
  return (
    <>
    <div className='App'>
      <h1>Quiz App</h1>
       <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
       {gameState==="menu" &&<MainMenu/>}
      {gameState==="quiz" &&<Quiz/>}
      {gameState==="endScreen" &&<EndScreen/>}
       </QuizContext.Provider>
    </div>
     <Footer/>
    </>
    
  )
}

export default App