const express = require('express');
const logger = require('morgan');
const app = express();


//Middlewares
app.use(logger('dev'));

//Routes
app.get('/',function(req,res,next){
  res.status(200).json({
    message : 'you requested index page'
  })
});

//catch 404 error and froward tem to erro handler
app.use(function(req,res,next){
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


//Error handler function
app.use(function(err,req,res,next){
  const error = app.get('env') ===  'development' ? err : {};
  const status = err.status || 500;

    //respond to client

    rs.status(status).json({
      error:{
        message:error.message
      }
    });

    //respond to  termnal
    console.error(err);
});


//start the server
const port  = app.get('port') || 3000;
app.listen(port,() =>console.log("server is listenig on port: "));
