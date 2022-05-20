var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Arcinblade.3",
  database: "applicants"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM applicant_info", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});