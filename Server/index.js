const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const port = 3000;

const connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'Arcinblade.3',
    database: 'applicants'
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

app.use(express.static('public'))

app.use( bodyParser.json() ); 

app.use(bodyParser.urlencoded({   
 extended: true})); 
app.use(cors());

app.listen(port, ()=>{
    connection.connect((err) => {
        if(err) {
          console.log('Database not connected!', err);
        } else {
          console.log(`Server is running on port ${port}`);
          console.log('Database Connected!');
        }
    })
});

