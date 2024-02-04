import React from 'react'
import HangmanGame from '../Hangman'
import WordGame from '../SetDifficulty'

const GameStart = () => {
  return (
    <div>
      if (difficulty === 'easy') {
        <WordGame difficulty={5} />
      } else if (difficulty === 'normal') {
        <WordGame difficulty={9} />
      } else if (difficulty === 'hard') {
        <WordGame difficulty={12} />
      }
      
      <Route path="/GameStart" component={HangmanGame} />
    </div>
  )
}

export default GameStart