// server.js
const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcrypt');
const app = express();
const port = process.env.PORT || 3030;

// app.options('/login', function (req, res) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader('Access-Control-Allow-Methods', '*');
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   res.end();
// });

app.use(bodyParser.json());
app.use(cors());

// MariaDB connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  }); 



// API call for testing purposes
app.get('/pet', (req, res) => {
  console.log('hello world');
  return res.json({ success: false, error: 'Login failed' });
  
}); 

//API call to log user in
app.post('/login', (req, res) => {
    console.log("login successful");
    const { username, password } = req.body;
    console.log(username);
  
    // Implement logic to check the username and password against the database
    pool.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
      if (err) {
        console.error('Error querying the database:', err);
        return res.json({ success: false, error: 'Login failed' });
      }else{
        console.log("checked against database");
      }
  
      if (results.length > 0) {
        const storedPasswordHash = results[0].password; // Assuming your password column is named 'password'
        
        // Compare the hashed password from the database with the provided password
        bcrypt.compare(password, storedPasswordHash, (compareErr, isMatch) => {
          if (compareErr) {
            console.error('Error comparing passwords:', compareErr);
            return res.json({ success: false, error: 'Login failed' });
          }
  
          if (isMatch) {
            res.json({ success: true, message: 'Login successful' });
            console.log("login successful for real");
          } else {
            res.json({ success: false, error: 'Invalid username or password' });
            console.log("invalid response");
          }
        });
      } else {
        res.json({ success: false, error: 'Invalid username or password' });
      }
    });

    
  });

  //API call to register new user
  app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Hash the password before saving it to the database
        const hashedPassword = await hashPassword(password);

        // Insert user into the 'users' table
        pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, results) => {
            if (err) {
                console.error('Error registering user:', err);
                res.json({ success: false, error: 'Registration failed' });
            } else {
                console.log('User registered successfully:', results);
                res.json({ success: true, message: 'Registration successful' });
            }

            // Close the database connection
            // pool.end((err) => {
            //     if (err) {
            //         console.error('Error closing the database connection pool:', err);
            //     } else {
            //         console.log('Database connection pool closed.');
            //     }
            // });
        });
    } catch (error) {
        console.error('Error during registration:', error);
        res.json({ success: false, error: 'Registration failed' });
    }
});

//function that actually hashes the pwd
async function hashPassword(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

//API call to save user progress
app.post('/saveGame', (req, res) => {
  const { userId, guessedWord, attempts, originalWord } = req.body;

  pool.query(
    'INSERT INTO user_progress (user_id, guessed_word, attempts, original_word, letters) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE guessed_word = VALUES(guessed_word), attempts = VALUES(attempts), original_word = VALUES(original_word), letters = VALUES(letters)',
    [userId, guessedWord, attempts, originalWord, letters],
    (err, results) => {
      if (err) {
        console.error('Error saving game:', err);
        return res.status(500).json({ success: false, error: 'Error saving game' });
      }

      res.json({ success: true, message: 'Game saved successfully' });
    }
  );
});

//api to retrieve user progress when they log back in.
app.get('/getGameData', (req, res) => {
  const userId = req.query.userId;

  if (!userId) {
    return res.status(400).json({ success: false, error: 'User ID is missing in the request' });
  }

  pool.query('SELECT * FROM user_progress WHERE user_id = ?', [userId], (err, results) => {
    if (err) {
      console.error('Error fetching game data:', err);
      return res.status(500).json({ success: false, error: 'Error fetching game data' });
    }

    if (results.length > 0) {
      const gameData = results[0]; // Assuming you want data for the latest progress
      res.json({
        success: true,
        attempts: gameData.attempts,
        original_word: gameData.original_word,
        guessed_word: gameData.guessed_word,
      });
    } else {
      res.status(404).json({ success: false, error: 'Game data not found' });
    }
  });
});
  
//API call to listen for messages
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

   // Additional user-related routes and logic IF NEEDED
  
  