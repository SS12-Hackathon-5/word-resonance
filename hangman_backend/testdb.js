const dotenv = require('dotenv');
dotenv.config();

const bcrypt = require('bcrypt');

const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });  

  

// Example user data
const newUser = {
  username: 'testuser',
  password: 'testpassword', // Remember to hash passwords in a real application
};

hashPassword();

//function to hash password
async function hashPassword() {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newUser.password, saltRounds);
    // Rest of your code here
// Insert user into the 'users' table
    pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [newUser.username, hashedPassword], (err, results) => {
  
        if (err) {
        console.error('Error inserting user:', err.message);
        } else {
        console.log('User inserted successfully:', results);
        }
  
        // Close the database connection
        pool.end((err) => {
            if (err) {
              console.error('Error closing the database connection pool:', err);
            } else {
              console.log('Database connection pool closed.');
            }
          });
  });
  }

  //const saltRounds = 10;
//const hashedPassword = bcrypt.hashSync(newUser.password, saltRounds);


// // Insert user into the 'users' table
// pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [newUser.username, hashedPassword], (err, results) => {
  
//   if (err) {
//     console.error('Error inserting user:', err);
//   } else {
//     console.log('User inserted successfully:', results);
//   }

//   // Close the database connection
//   pool.end();
// });

  
 
  
