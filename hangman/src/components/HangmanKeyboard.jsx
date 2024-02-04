import React, { useState } from 'react';

const HangmanKeyboard = () => {
  const originalWord = 'apple';
  const [guessedWord, setGuessedWord] = useState(Array(originalWord.length).fill('_').join(''));
  const [attempts, setAttempts] = useState(3);

  const guessLetter = () => {
    let letter = prompt('Guess a letter');
    let newGuessedWord = [...guessedWord];
    
    if (originalWord.includes(letter)) {
      for (let i = 0; i < originalWord.length; i++) {
        if (originalWord[i] === letter) {
          newGuessedWord[i] = letter;
        }
      }
      setGuessedWord(newGuessedWord.join(''));
    } else {
      setAttempts(attempts - 1);
    }
  };

  if (attempts === 0) {
    return <div>You lost! The word was "{originalWord}".</div>;
  }

  if (guessedWord === originalWord) {
    return <div>Congratulations! You guessed the word: "{guessedWord}".</div>;
  }

  return (
    <div>
      <button onClick={guessLetter}>Guess a letter</button>
      <p>Word so far: {guessedWord}</p>
      <p>Attempts left: {attempts}</p>
    </div>
  );
};

export default HangmanKeyboard;