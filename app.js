const express = require('express');
const mysql = require('mysql');
const app = express();

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