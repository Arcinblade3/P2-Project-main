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

  app.get('/addapp', (req, res) => {
    let post = {gender: 'Male', email: 'prf11@hotmail.com'};
    let sql = "INSERT INTO applicants.applicant_info (gender, email) VALUES " + post;
    let query = connection.query(sql, post, (err, result) => {
        if(err){ throw err}
        console.log(result);
        res.send('Applicant Registered.');  
    });
});

app.use(express.static('public'))
app.use(bodyParser.urlencoded({   
 extended: true})); 
app.use(cors());

app.listen(port, ()=>{
    connection.connect((err) => {
        if(err) {
          throw err
        }
          console.log(`Server is running on port ${port}`);
          console.log('Database Connected!');
          var sql = "SELECT * FROM applicants.applicant_info;";
          let query = connection.query(sql, (err, results) => {
            if(err) throw err;
            console.log(results);
        });

    })
});

