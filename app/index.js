const express = require('express')
const steem = require('steem')

var app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/healthcheck', function (req, res) {
    res.send('hello world')
  })
  
app.listen(3000, () => console.log('Example app listening on port 3000!'))