const MongoClient = require('mongodb').MongoClient

const url = "mongodb://localhost:27017/"

exports.MongoConnect = function(){
  MongoClient.connect(url, function(err, db){
    if (err){
      console.log(err)
      return res.status(400).send({message: "We've encountered DB connection error"})
    } else {
      const dbo = db.db("srin")
      req.db = dbo
      next()
    }
  })
}