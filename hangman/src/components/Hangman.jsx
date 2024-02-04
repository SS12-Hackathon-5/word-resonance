import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import DeathScreen from './Deathscreen';
import { Button, Container, Row, Col} from 'react-bootstrap';
import './pages/Game.css';

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

  //Function that fails the player immediately - added to prompt death screen and debug.
  const failGame = () => {
    setAttempts(0);
  };

  const saveGame = () => {
    localStorage.setItem('guessedWord', guessedWord);
    localStorage.setItem('attempts', attempts);
  };

  if (attempts === 0) {
    return <div>
        <DeathScreen className="mega" message="You lost! The word was 'apple'." route="/hangman" />
      </div>;
  }

  if (guessedWord === originalWord) {
    return <div>Congratulations! You guessed the word: "{guessedWord}".</div>;
  }

  return (
    
    <div>
      <br /><br /><br /><br />
      <Container>
        <Row>
          <Col>
          <Button onClick={SpeechRecognition.startListening} variant="dark" className="mega">Start Guessing</Button>
          </Col>
          <Col>
          <Button onClick={stopRecordingAndProcessGuess} variant="dark" className="mega">Stop and Process Guess</Button>
          </Col>
          <Col>
          <Button onClick={failGame} variant="dark" className="mega">Fail Game</Button>
          </Col>
          <Col>
          <Button onClick={saveGame} variant="dark" className="mega">Save Game</Button>
          </Col>
        </Row>
      </Container>
      <p>Word so far: {guessedWord}</p>
      <p>Attempts left: {attempts}</p>
    </div>
  );
};

export default HangmanGame;