
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// create a Schema
var popularPostSchema = new Schema({
  title: String,
  by : String,
  entry: Number,
  likes : Number,
  date : String,
  comments : [{commentdate : String,comment:String,author:String,commentlikes:Number}]
});
var shipLogSchema = new Schema({
  title: String,
  date : String,
  entry : String
});

var popularPost = mongoose.model('popularPost',popularPostSchema,'posts');
var shipLog = mongoose.model('shipLog',shipLogSchema,'logs');
module.exports = {popularPost,shipLog};
