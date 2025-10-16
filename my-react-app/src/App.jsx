import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(() => Math.floor(Math.random() * 100) + 1)
  const [guess, setGuess] = useState('')
  const [attempts, setAttempts] = useState(0)


  return (
    <>
      <div>
        <h1>Guess the Number Game</h1>
        <p>I'm thinking of a number between 1 - 100. I'll tell you if your guess is higher or lower and you have a max number of 5 guesses. </p>
      </div>
    </>
  )
}

export default App
