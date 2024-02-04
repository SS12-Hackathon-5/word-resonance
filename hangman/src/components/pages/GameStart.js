import React from 'react'
import HangmanGame from '../Hangman'

const GameStart = () => {
  return (
    <div>
      <Route path="/GameStart" component={HangmanGame} />
    </div>
  )
}

export default GameStart