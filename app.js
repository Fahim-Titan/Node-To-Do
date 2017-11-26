
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
const task = require('./task');
const user = require('./user');



// ----- registering routes -----
app.get('/',(req, res)=> res.send('working properly'));
app.use('/task', task);
app.use('/user', user);



// ----- starting the server ----- 
app.listen(env.getPort(), ()=> {console.log("Server started. Listening on port " + env.getPort())});