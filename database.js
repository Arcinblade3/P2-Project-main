const mysql = require('mySQL');

const connection = mysql.createConnection({
        host    : 'localhost',
        user    : 'root',
        password: 'Arcinblade.3',
        database: 'applicants'
});

module.exports = connection;

