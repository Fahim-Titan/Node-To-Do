// import { read } from 'fs';

const env = require('./env');
const task = require('./task');

const express = require('express');
const app = express();

app.get('/',(req, res)=> res.send('working properly'));
app.use('/task', task);

app.listen(env.getPort());