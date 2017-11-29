// import { encode } from 'punycode';
// import { error } from 'util';

// Getting Libraries
const sql = require('mssql');
var env = require('./env');
var bodyParser = require('body-parser');
const express = require('express');
var router = express.Router();



// Initiating Route Parameters

// Get: ~/Task
router.get('/', function(req, res){
    sql.connect(env.getDBConfig(), function(err){
        if(err) console.log(err);

        var request = new sql.Request();
        request.query('select * from tasks', (err, recordset)=>{
            if(err) console.log(err);
            else{
                res.send(JSON.stringify(recordset.recordset));
                console.log(recordset);
            }
            sql.close();
        });
    });
    // res.send('Get: Task working properly')
});
router.post('/', function(req, res){
    res.send('POST: Task working properly')
});
router.put('/', function(req, res){
    res.send('PUT: Task working properly')
});
router.delete('/', function(req, res){
    res.send('DELETE: Task working properly')
});

module.exports = router;