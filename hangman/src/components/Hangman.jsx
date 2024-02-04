// import React, { useState } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import DeathScreen from './Deathscreen';
// import { Button, Container, Row} from 'react-bootstrap';
// import './pages/Game.css';

// const HangmanGame = ({ word }) => {
//   const originalWord = word || 'apple';
//   const [guessedWord, setGuessedWord] = useState(Array(originalWord.length).fill('_').join(''));
//   const [attempts, setAttempts] = useState(6);
//   const { transcript, resetTranscript } = useSpeechRecognition();

//   const processGuess = (transcript) => {
//     const letters = transcript.split(' ');
//     const lastLetter = letters[letters.length - 1].toLowerCase();
//     console.log(transcript);
//     console.log(`Processing guess: "${lastLetter}"`);
  
//     let newGuessedWord = [...guessedWord];
    
//     if (originalWord.includes(lastLetter)) {
//       for (let i = 0; i < originalWord.length; i++) {
//         if (originalWord[i] === lastLetter) {
//           newGuessedWord[i] = lastLetter;
//         }
//       }
//       setGuessedWord(newGuessedWord.join(''));
//     } else {
//       setAttempts(attempts - 1);
//     }
//   };
  
//   const stopRecordingAndProcessGuess = () => {
//     SpeechRecognition.stopListening();
//     processGuess(transcript);
//     resetTranscript();
//   };

//   //Function that fails the player immediately - added to prompt death screen and debug.
//   const failGame = () => {
//     setAttempts(0);
//   };

//   const saveGame = () => {
//     localStorage.setItem('guessedWord', guessedWord);
//     localStorage.setItem('attempts', attempts);
//   };

//   if (attempts === 0) {
//     return <div>
//         <DeathScreen className="mega" message="You lost! The word was 'apple'." route="/hangman" />
//       </div>;
//   }

//   if (guessedWord === originalWord) {
//     return <div>Congratulations! You guessed the word: "{guessedWord}".</div>;
//   }

//   return (
    
//     <div>
//       <br /><br />

//       <div className="gametext">Word so far: {"\n"} {guessedWord}</div>
//       <div className="gametext">Attempts left: {attempts}</div>
//       <Container>
//         <Row>
//         <Button onClick={SpeechRecognition.startListening} variant="dark" className="custom-text">Start Guessing</Button>
//         </Row>
//         <Row>
//           <br/>
//         </Row>
//         <Row>
//         <Button onClick={stopRecordingAndProcessGuess} variant="dark" className="custom-text">Stop and Process Guess</Button>
//         </Row>
//         <Row>
//           <br/>
//         </Row>
//         <Row>
//         <Button onClick={failGame} variant="dark" className="mega">Quit</Button>
//         </Row>
//         <Row>
//           <br/>
//         </Row>
//         <Row>
//         <Button onClick={saveGame} variant="dark" className="mega">Save Game</Button>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default HangmanGame;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const HangmanKeyboard = () => {
  const location = useLocation();
  const level = location.state.difficulty;

  const [originalWord, setOriginalWord] = useState('');
  const [guessedWord, setGuessedWord] = useState('');
  const [attempts, setAttempts] = useState(6);

  const { transcript, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    const fetchWord = async () => {
      const response = await fetch(`https://random-word-api.herokuapp.com/word?length=${level}`);
      const data = await response.json();
      setOriginalWord(data[0]);
      setGuessedWord(Array(data[0].length).fill('_').join(''));
    };

    fetchWord();
  }, [level]);

  useEffect(() => {
    if (transcript.length === 1) {
      guessLetter(transcript);
      resetTranscript();
    }
  }, [transcript]);

  const guessLetter = (letter) => {
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
      <button onClick={SpeechRecognition.startListening}>Start Guessing</button>
      <button onClick={SpeechRecognition.stopListening}>Stop Guessing</button>
      <p>Word so far: {guessedWord}</p>
      <p>Attempts left: {attempts}</p>
    </div>
  );
};

export default HangmanKeyboard;