const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'Arcinblade.3',
    database: 'new_applicants'
});

db.connect( (err) => {
    if(err){
    }
    console.log('MySQL connected.');
});

const app = express();

// create database
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE new_applicants';
    db.query(sql, (err, result) => {
        if(err){
        }
        console.log(result);
        res.send('database created.');
    });
});

//create table

app.get('/createtable', (req, res) => {
    let sql = 'CREATE TABLE applicant_info (applicant_id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err){
        }
        console.log(result);
        res.send('Table created.');        
    });
});

//Insert stuff into table
app.get('/addpost1', (req, res) => {
    let post = {title: 'Post 1', body: 'this is post 1'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err){
        }
        console.log(result);
        res.send('Post 1 added');  
    });
});

//Insert stuff into table
app.get('/addpost2', (req, res) => {
    let post = {title: 'Post 2', body: 'this is post 2'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err){
        }
        console.log(result);
        res.send('Post 2 added');  
    });
});

//Select records
app.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err, results) => {
        if(err){
        }
        console.log(results);
        res.send('Posts found.');  
    });
});

//Select single record
app.get('/getpost/:applicant_id', (req, res) => {
    let sql = `SELECT * FROM posts WHERE applicant_id = ${req.params.applicant_id}`;
    let query = db.query(sql, (err, result) => {
        if(err){
        }
        console.log(result);
        res.send('Post found.');  
    });
});

//Update record
app.get('/updatepost/:applicant_id', (req, res) => {
    let new_Title = 'Updated Title';
    let sql = `UPDATE posts SET title = '${new_Title}' applicant_id = ${req.params.applicant_id}`;
    let query = db.query(sql, (err, result) => {
        if(err){
        }
        console.log(result);
        res.send('Post Updated.');  
    });
});

//Delete record
app.get('/delete/:applicant_id', (req, res) => {
    let sql = `DELETE FROM posts WHERE applicant_id = ${req.params.applicant_id}`;
    let query = db.query(sql, (err, result) => {
        if(err){
        }
        console.log(result);
        res.send('Post deleted.');  
    });
});

app.listen('3000', () => {
    console.log('Server running on port 3000');
});

