const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')

const url = "mongodb://localhost:27017/"

function mongoConnect(req, res, next){
  MongoClient.connect(url, function(err, db){
    if (err){
      console.log(err)
      return res.status(400).send({message: "We've encountered DB connection error"})
    } else {
      const dbo = db.db("srin_db")
      req.db = dbo
      next()
    }
  })
}

const app = express()
app.use(bodyParser.json())

app.get('/movies', function(req, res, next){ mongoConnect(req, res, next) }, function(req, res, next){
    req.db.collection("movies").find({}).toArray(function(err, result){
      if (err){
        console.log(err)
        return res.status(400).send({message: "We've encountered retreival error"})
      } else {
        return res.status(200).send({data: result})
      }
    })
})

app.get('/movies/:director', function(req, res, next){ mongoConnect(req, res, next)}, function(req, res, next){
    req.db.collection("movies").find({directors: req.params.director}).toArray(function(err, result){
      if (err){
        console.log(err)
        return res.status(400).send({message: "We've encountered retreival error"})
      } else {
        return res.status(200).send({data: result})
      }
    })
})

app.post('/movies', function(req, res, next){ mongoConnect(req, res, next)}, function(req, res, next){
  req.db.collection("movies").insertOne(req.body.movie, function(err, result){
    if (err){
      return res.status(400).send({message: "We've encountered an error during insertion"})
    } else {
      console.log(result)
      req.db.close()
      return res.status(200).send({message: "Insertion is successful"})
    }
  })
})

app.put('/movies/:title', function(req, res, next){ mongoConnect(req, res, next)}, function(req, res, next){
  req.db.collection("movies").update({title: req.params.title}, {$set: req.body.movie}, function(err, result){
    if (err){
      return res.status(400).send({message: err})
    } else {
      return res.status(200).send({message: "Update is successful"})
    }
  })
})

app.delete('/movies/:title', function(req, res, next){ mongoConnect(req, res, next)}, function(req, res, next){
  req.db.collection("movies").deleteOne({title: req.params.title}, function(err, result){
    if (err){
      return res.status(400).send({message: "We've encoutnered an error during deleting"})
    } else {
      return res.status(200).send({message: "Deletion is successful"})
    }
  })
})

app.get('/', function(req, res){ return res.status(200).send({message: "Enpoint hit!"})})

app.listen(3000, function(){
  console.log('Node app is running on port 3000')
})

module.exports = app;
