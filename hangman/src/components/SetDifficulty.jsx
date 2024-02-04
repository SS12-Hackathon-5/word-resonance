import React, { useEffect, useState } from 'react';

const WordGame = ({ difficulty }) => {
  const [word, setWord] = useState('');

  useEffect(() => {
    const fetchWord = async () => {
      const response = await fetch(`https://random-word-api.herokuapp.com/word?number=1&length=${difficulty}`);
      const data = await response.json();
      setWord(data[0]);
    };

    fetchWord();
  }, [difficulty]);

  return (
    <div>
      <p>{word}</p>
    </div>
  );
};

export default WordGame;