import { useState } from 'react'
import './App.css'

function App() {
  const maxGuesses = 6
  const [number, setNumber] = useState(() => Math.floor(Math.random() * 100) + 1)
  const [guess, setGuess] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [output, setOutput] = useState('')
  const [guessHistory, setGuessHistory] = useState([])
  const [gameOver, setGameOver] = useState(false)
  const [gamesWon, setGamesWon] = useState(0)
  const [gamesLost, setGamesLost] = useState(0)

  const processGuess = () => {
    const numericGuess = parseInt(guess, 10)
    if (isNaN(numericGuess) || numericGuess < 1 || numericGuess > 100) {
      alert('Please enter a valid number between 1 and 100.')
      return
    }
    else {
      setGuessHistory([...guessHistory, numericGuess])
    }

    const newAttempts = attempts + 1
    setAttempts(newAttempts)

    setGuess('')

    if (numericGuess === number) {
      setOutput(`Congratulations! You've guessed the number ${number} in ${newAttempts} attempts!`)
      setGameOver(true)
      setGamesWon(gamesWon + 1)
    } else if (newAttempts >= maxGuesses) {
      setOutput(`Sorry, you've used all your attempts. The number was ${number}.`)
      setGameOver(true)
      setGamesLost(gamesLost + 1)
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
    setGameOver(false)
    setGuessHistory([])
  }

  const resetStats = () => {
    resetGame()
    setGamesWon(0)
    setGamesLost(0)
  }

  return (
    <>
      <div>
        <h1>Guess the Number</h1>
        <p>I'm thinking of a number between 1 - 100. <br/> You have {maxGuesses} guesses. </p>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            processGuess()
          }}
        >
          <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter your guess"
          />
          <div>
            <button type="submit" disabled={gameOver}>Submit Guess</button>
          </div>
        </form>
        <p>Attempts: {attempts} / {maxGuesses}</p>
        <div className = "gameTracker">
          <p>Games Won: {gamesWon} <br/> Games Lost: {gamesLost}</p>
          <button onClick={resetStats}>Reset Stats</button>
        </div>
        {guessHistory.length > 0 && (
          <div>
            <p>Your Guesses: {guessHistory.join(', ')}</p>
          </div>
        )}
        <p className="guessOutput">{output}</p>
        {gameOver && <button onClick={resetGame}>Start New Game</button>}
      </div>
    </>
  )
}

export default App
