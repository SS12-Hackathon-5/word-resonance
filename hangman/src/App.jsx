import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/pages/Login';
import Account from './components/pages/Account';
import Menu from './components/Menu';
import HangmanGame from './components/Hangman';
import Leaderboard from './components/pages/Leaderboard';
import GameComponent from './components/pages/Game';
import Continue from './components/Continue';
import TextToSpeech from './components/TTS';
//import HangmanKeyboard from './components/HangmanKeyboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <TextToSpeech text={"Welcome to Word Resonance! Please login or create an account to play the game."}/>
          <Routes>
          <Route path ="/" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/game" element={<GameComponent />} />
          <Route path="/hangman" element={<HangmanGame />} />
          <Route path="/continue" element={<Continue />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
