// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const HangmanKeyboard = () => {
//   const location = useLocation();
//   const level = location.state.difficulty;

//   const [originalWord, setOriginalWord] = useState('');
//   const [guessedWord, setGuessedWord] = useState('');
//   const [attempts, setAttempts] = useState(6);

//   useEffect(() => {
//     const fetchWord = async () => {
//       const response = await fetch(`https://random-word-api.herokuapp.com/word?length=${level}`);
//       const data = await response.json();
//       setOriginalWord(data[0]);
//       setGuessedWord(Array(data[0].length).fill('_').join(''));
//     };

//     fetchWord();
//   }, [level]);

//   const guessLetter = () => {
//     let letter = prompt('Guess a letter');
//     let newGuessedWord = [...guessedWord];
    
//     if (originalWord.includes(letter)) {
//       for (let i = 0; i < originalWord.length; i++) {
//         if (originalWord[i] === letter) {
//           newGuessedWord[i] = letter;
//         }
//       }
//       setGuessedWord(newGuessedWord.join(''));
//     } else {
//       setAttempts(attempts - 1);
//     }
//   };

//   if (attempts === 0) {
//     return <div>You lost! The word was "{originalWord}".</div>;
//   }

//   if (guessedWord === originalWord) {
//     return <div>Congratulations! You guessed the word: "{guessedWord}".</div>;
//   }

//   return (
//     <div>
//       <button onClick={guessLetter}>Guess a letter</button>
//       <p>Word so far: {guessedWord}</p>
//       <p>Attempts left: {attempts}</p>
//     </div>
//   );
// };

// export default HangmanKeyboard;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HangmanKeyboard = () => {
  const location = useLocation();
  const level = location.state.difficulty;

  const [originalWord, setOriginalWord] = useState('');
  const [guessedWord, setGuessedWord] = useState('');
  const [attempts, setAttempts] = useState(6);
  const [speakText, setSpeakText] = useState(null);

  useEffect(() => {
    const fetchWord = async () => {
      const response = await fetch(`https://random-word-api.herokuapp.com/word?length=${level}`);
      const data = await response.json();
      setOriginalWord(data[0]);
      setGuessedWord(Array(data[0].length).fill('_').join(''));
    };

    fetchWord();
  }, [level]);

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