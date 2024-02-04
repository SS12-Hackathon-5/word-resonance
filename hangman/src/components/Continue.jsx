// import React, { useEffect, useState } from 'react';

// const Continue = () => {
//   const [gameData, setGameData] = useState(null);

//   useEffect(() => {
//     const fetchGameData = async () => {
//         //Make sure to replace the URL with the correct API endpoint
//       const response = await fetch('replace with our API', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       const data = await response.json();
//       setGameData(data);
//     };

//     fetchGameData();
//   }, []);

//   if (!gameData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Continue Game</h1>
//       <p>Attempts left: {gameData.attempts}</p>
//       <p>Difficulty: {gameData.difficulty}</p>
//       <p>Original word: {gameData.originalWord}</p>
//       <p>Guessed word: {gameData.guessedWord}</p>
//       {/* Add a button or link here to continue the game */}
//     </div>
//   );
// };

// export default Continue;

import React, { useEffect, useState } from 'react';

const Continue = () => {
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    const fetchGameData = async () => {
      // Simulate a delay with setTimeout
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Dummy data
      const data = {
        attempts: 3,
        difficulty: 'medium',
        originalWord: 'hangman',
        guessedWord: 'h_ngm_n'
      };

      setGameData(data);
    };

    fetchGameData();
  }, []);

  if (!gameData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Continue Game</h1>
      <p>Attempts left: {gameData.attempts}</p>
      <p>Difficulty: {gameData.difficulty}</p>
      <p>Original word: {gameData.originalWord}</p>
      <p>Guessed word: {gameData.guessedWord}</p>
      {/* Add a button or link here to continue the game */}
    </div>
  );
};

export default Continue;