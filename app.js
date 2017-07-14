const express = require('express');

const app = express();


//Middlewares


//Routes


//catch 404 error and froward tem to erro handler

//Error handler function


//start the server
const port  = app.get('port') || 3000;
app.listen(port,() =>console.log('server is listenig on port ${port}'));
