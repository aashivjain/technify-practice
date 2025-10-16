import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(() => Math.floor(Math.random() * 100) + 1)
  const [guess, setGuess] = useState('')
  const [attempts, setAttempts] = useState(0)

  const processGuess = () => {
    const numericGuess = parseInt(guess, 10)
    if (isNaN(numericGuess) || numericGuess < 1 || numericGuess > 100) {
      alert('Please enter a valid number between 1 and 100.')
      return
    }

    const newAttempts = attempts + 1
    setAttempts(newAttempts)

    if (numericGuess === number) {
      alert(`Congratulations! You've guessed the number ${number} in ${newAttempts} attempts!`)
      resetGame()
    } else if (newAttempts >= 5) {
      alert(`Sorry, you've used all your attempts. The number was ${number}.`)
      resetGame()
    } else if (numericGuess < number) {
      alert('Too low! Try again.')
    } else {
      alert('Too high! Try again.')
    }
  }


  return (
    <>
      <div>
        <h1>Guess the Number Game</h1>
        <p>I'm thinking of a number between 1 - 100. I'll tell you if your guess is higher or lower than the target. You have 5 guesses. </p>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter your guess"
        />
        <button onClick={processGuess}>Submit Guess</button>
        <p>Attempts: {attempts} / 5</p>
      </div>
    </>
  )
}

export default App
