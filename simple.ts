let message: string = 'Hello, World';
console.log(message);
var mysql = require('mysql');

var connection = mysql.createConnection(
{
  host:'localhost',
  user: "admin",
  database: "project",
  multipleStatements: true
});

connection.connect();