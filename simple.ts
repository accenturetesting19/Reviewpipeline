let message: string = 'Hello, World';
console.log(message);
var mysql = require('mysql');

var connection = mysql.createConnection(
{
  database: "project",
  multipleStatements: true
});

connection.connect();