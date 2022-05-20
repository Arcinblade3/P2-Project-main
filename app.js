const express = require('express');

const app = express();
const connection = require('./database');

app.get('/', (req, res) => {
    let sql = 'SELECT * FROM applicant_info';
    connection.query(sql, (err, results) =>{
        if (err){
        };
        res.send(results);
    })
    res.send('This is the beginning.');
});

app.listen('3000', () => {
    console.log('Server running on port 3000');
    connection.connect((err) => {
        if(err) {
        };
        console.log('Database Connected!');
    })
});