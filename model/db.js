const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://localhost/peepBlog');

//connection was made
mongoose.connection.on('connected',function(){
  console.log('mongoose default connection open');
});

//connection throws error
mongoose.connection.on('error',function(err){
  console.log('Mongoose connection error : ' + err);
});

//disconnected
mongoose.connection.on('disconnected',function(){
  console.log('Mongoose lost connection');
});

//process ended close connection
process.on('SIGINT',function(){
  mongoose.connection.close(function(){
    console.log('app terminated, disconnect mongoose done');
    process.exit(0);
  });
});

//bring in the schema and models
require('../model/peepBlog');
