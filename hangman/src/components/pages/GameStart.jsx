import React from 'react'
import { Route } from 'react-router-dom';
import WordGame from '../SetDifficulty'
import HangmanKeyboard from '../HangmanKeyboard';

const GameStart = ({difficulty}) => {

  return (
    <div>
      <Route path="/GameStart" component={HangmanKeyboard} word={<WordGame difficulty={5} />} />
    </div>
  )
}

export default GameStart