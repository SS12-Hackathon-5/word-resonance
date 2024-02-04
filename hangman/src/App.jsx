import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/pages/Login';
import Game from './components/pages/Game';
import Account from './components/pages/Account';
import Menu from './components/Menu';
import HangmanGame from './components/Hangman';
import Leaderboard from './components/pages/Leaderboard';
import HangmanKeyboard from './components/HangmanKeyboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/game" element={<Game />} />
          <Route path="/account" element={<Account />} />
          <Route path="/hangman" element={<HangmanGame />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
