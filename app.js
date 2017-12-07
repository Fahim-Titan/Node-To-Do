
// ----- adding libraries -----
// import { read } from 'fs';
const bodyParser = require('body-parser');
const express = require('express');
const app = express();


// ----- adding modules to express framework -----
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
})); 



// ----- Creating routes -----
const env = require('./env'); 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
const task = require('./task');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
const user = require('./user');



// ----- registering routes -----
app.get('/',(req, res)=> res.send('working properly'));
app.use('/task', task);
app.use('/user', user);



// ----- starting the server ----- 
app.listen(env.getPort(), ()=> {console.log("Server started. Listening on port " + env.getPort())});