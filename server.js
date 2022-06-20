const express = require('express')

const app = express()

app.get('/', function(req, res){ return res.status(200).send({message: "Enpoint hit!"})})

app.listen(3000, function(){
  console.log('Node app is running on port 3000')
})

module.exports = app;
