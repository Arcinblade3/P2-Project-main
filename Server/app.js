const express = require('express');
const mysql = require('mysql');
const app = express();


const connection = mysql.createConnection({
        host    : 'localhost',
        user    : 'root',
        password: 'Arcinblade.3',
        database: 'applicants'
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen('3000', () => {
    connection.connect((err) => {
        if(err) {
          console.log('Database not connected!', err);
        } else {
          console.log('Server running on port 3000');
          console.log('Database Connected!');
        }
    })
});