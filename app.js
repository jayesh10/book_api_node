const express = require('express');
const logger = require('morgan');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/apiproject');
//routes
const users = require('./routes/users')


//Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());

//routes
app.use('/users',users);

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

    res.status(status).json({
      error:{
        message:error.message
      }
    });

    //respond to  termnal
    console.error(err);
});


//start the server
const port  = 3000;
app.listen(port,() =>console.log("server is listenig on port: ",port));
