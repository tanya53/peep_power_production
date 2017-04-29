var express = require('express');
var router = express.Router();
var path = process.cwd();
var peepdb = require('../model/peepBlog.js');
const mongoose = require('mongoose');
var tiles = require('../serverSideJs/slidingServer')

/*get the home page */
router.get('/',function(req,res){
  //res.sendFile(path + "/public/views/blog.html");
  res.sendFile(path + "/public/views/index.html");
});

router.get('/shiplogs',function(req,res){
  const connection = mongoose.connect('mongodb://localhost/peepBlog');
  const collec = "logs";
  mongoose.connection.db.collection(collec,function(err,collection){
      //collection.find({title:"ship log entry one"}).toArray(function(err,data){
      collection.find({}).toArray(function(err,data){
        res.send(data);
      })
    })
});
router.get('/popposts',function(req,res){
  const connection = mongoose.connect('mongodb://localhost/peepBlog');
  const collec = "posts";
  mongoose.connection.db.collection(collec,function(err,collection){
      //collection.find({title:"ship log entry one"}).toArray(function(err,data){
      collection.find({}).toArray(function(err,data){
        res.send(data);
      })
    })
});
/*should be a post request*/
router.get('/newdata',function(req,res){
  var newBlog = peepBlog({
    title: "entered from program",
    by:"Buffy",
    entry:"buffy entry",
    likes: 2
  });
  newBlog.save(function(err) {
    if (err) throw err;

    console.log("Blog created");
  });
});
router.get('/helloworld',function(req,res){
  res.send("this is working hello world");
});
router.get('/again',function(req,res){
  res.send("we did recompile");
});
router.get('/sliding/',function(req,res){
  var outstr = tiles.peep_play(req.query.board);
  res.send(outstr);
});
module.exports = router;
