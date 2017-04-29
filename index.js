var express = require('express'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    favicon = require('serve-favicon'),
    app = express(),
    path = process.cwd(),
    routes = require('./routes/index'),
    db = require('./model/db');

app.use(favicon(path+"/public/images/favicon.ico"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.set('port',(process.env.PORT||5000));

app.use('/',express.static(__dirname+'/public'));
app.use('/css',express.static(__dirname+'/public/css'));
app.use('/images',express.static(__dirname+'/public/images'));

app.use('/',routes);

//catch 404 and forwarding to error handler
app.use(function(req,res,next){
  var err =  new Error('Not Found');
  err.status = 404;
  next(err);
});

//error handlers
//dev error handler with stacktrace
if (app.get('env')==='development'){
  app.use(function(err,req,res,next){
    re.status(err.status || 500);
    res.send(err.message + " " + err.status+" " +err);
  });
}

//production err without stacktrace
app.use(function(err,req,res,next){
  res.status(err.status || 500);
  res.send(err.message + " " + err);
});
module.exports = app; //export for use by other programs
app.listen(app.get('port'),function(){
console.log("Node app is running on port",app.get('port'));
})
