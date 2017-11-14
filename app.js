// import { read } from 'fs';

const env = require('./env');
const task = require('./task');
const user = require('./user');

var bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//     extended: false
// })); 


app.get('/',(req, res)=> res.send('working properly'));
app.use('/task', task);
app.use('/user', user);

app.listen(env.getPort(), ()=> {console.log("Server started. Listening on port " + env.getPort())});