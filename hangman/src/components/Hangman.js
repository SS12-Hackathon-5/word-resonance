import React, { useState } from 'react';

function HangmanGame() {
    const [word] = useState("hangman");
    const [guessedLetters, setGuessedLetters] = useState([]);

    const displayWord = () => {
        return word.split('').map(letter => (
            guessedLetters.includes(letter) ? letter : '_'
        )).join(' ');
    };

    // ... rest of your component

    return (
        <div>
            <p>{displayWord()}</p>
            {/* ... rest of your JSX */}
        </div>
    );
}

export default HangmanGame;