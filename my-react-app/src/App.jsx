import { useState } from 'react'
import './App.css'

function App() {
  const maxGuesses = 7
  const [number, setNumber] = useState(() => Math.floor(Math.random() * 100) + 1)
  const [guess, setGuess] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [output, setOutput] = useState('')
  const [gameOver, setGameOver] = useState(false)

  const processGuess = () => {
    const numericGuess = parseInt(guess, 10)
    if (isNaN(numericGuess) || numericGuess < 1 || numericGuess > 100) {
      alert('Please enter a valid number between 1 and 100.')
      return
    }

    const newAttempts = attempts + 1
    setAttempts(newAttempts)

    if (numericGuess === number) {
      setOutput(`Congratulations! You've guessed the number ${number} in ${newAttempts} attempts!`)
      setGameOver(true)
    } else if (newAttempts >= maxGuesses) {
      setOutput(`Sorry, you've used all your attempts. The number was ${number}.`)
      setGameOver(true)
    } else if (numericGuess < number) {
      setOutput('Too low! Try again.')
    } else {
      setOutput('Too high! Try again.')
    }
  }

  const resetGame = () => {
    setNumber(Math.floor(Math.random() * 100) + 1)
    setGuess('')
    setAttempts(0)
    setOutput('')
  }

  return (
    <>
      <div>
        <h1>Guess the Number Game</h1>
        <p>I'm thinking of a number between 1 - 100. I'll tell you if your guess is higher or lower than the target. You have 7 guesses. </p>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter your guess"
        />
        <button onClick={processGuess}>Submit Guess</button>
        <p>Attempts: {attempts} / {maxGuesses}</p>
        <p className="guessOutput">{output}</p>
        {gameOver && <button onClick={resetGame}>Start New Game</button>}
      </div>
    </>
  )
}

export default App
