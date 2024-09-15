const express = require('express')
const app = express()
app.disable("x-powered-by");
app.get('/', function (req, res) {
  res.send('{ "response": "Hello From Sapna from VS code" }')
})

app.get('/will', function (req, res) {
  res.send('{ "response": "Hello World test" }')
})
app.get('/ready', function (req, res) {
  res.send('{ "response": " Great!, It works test!" }')
})
app.listen(process.env.PORT || 3000)
module.exports = app
