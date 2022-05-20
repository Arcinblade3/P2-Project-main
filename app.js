const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
        host    : 'localhost',
        user    : 'root',
        password: 'Arcinblade.3',
        database: 'applicants'
});

const app = express();

app.get('/', (req, res) => {
    console.log('get called');
    let sql = "SELECT * FROM applicant_info";
    connection.query(sql, (err, results) =>{
        res.send(results);
    })
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