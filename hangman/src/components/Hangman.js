import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const HangmanGame = () => {
  const originalWord = 'apple';
  const [guessedWord, setGuessedWord] = useState(Array(originalWord.length).fill('_').join(''));
  const [attempts, setAttempts] = useState(3);
  const { transcript, resetTranscript } = useSpeechRecognition();

  const processGuess = (transcript) => {
    const letters = transcript.split(' ');
    const lastLetter = letters[letters.length - 1].toLowerCase();
    console.log(transcript);
    console.log(`Processing guess: "${lastLetter}"`);
  
    let newGuessedWord = [...guessedWord];
    
    if (originalWord.includes(lastLetter)) {
      for (let i = 0; i < originalWord.length; i++) {
        if (originalWord[i] === lastLetter) {
          newGuessedWord[i] = lastLetter;
        }
      }
      setGuessedWord(newGuessedWord.join(''));
    } else {
      setAttempts(attempts - 1);
    }
  };
  
  const stopRecordingAndProcessGuess = () => {
    SpeechRecognition.stopListening();
    processGuess(transcript);
    resetTranscript();
  };

  if (attempts === 0) {
    return <div>You lost! The word was "{originalWord}".</div>;
  }

  if (guessedWord === originalWord) {
    return <div>Congratulations! You guessed the word: "{guessedWord}".</div>;
  }

  return (
    
    <div>
      <button onClick={SpeechRecognition.startListening}>Start Guessing</button>
      <button onClick={stopRecordingAndProcessGuess}>Stop and Process Guess</button>
      <p>Word so far: {guessedWord}</p>
      <p>Attempts left: {attempts}</p>
    </div>
  );
};

export default HangmanGame;