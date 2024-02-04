// src/App.js

import React from 'react';
import './leaderboard.css';

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: 'Player 1', score: 1000 },
    { rank: 2, name: 'Player 2', score: 900 },
    { rank: 3, name: 'Player 3', score: 800 },
    // Add more data as needed
  ];

  return (
    <div className="leaderboard-container">
      <h1>Game Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((player) => (
            <tr key={player.rank}>
              <td>{player.rank}</td>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
