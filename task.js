// import { encode } from 'punycode';
// import { error } from 'util';

// Getting Libraries
const sql = require('mssql');
var env = require('./env');
var bodyParser = require('body-parser');
const express = require('express');
var router = express.Router();



// Initiating Route Parameters

// Get: ~/task/{id}
router.get('/:id', function(req, res){
    sql.connect(env.getDBConfig(), function(err){
        if(err) console.log(err);

        var request = new sql.Request();
        request.query('select * from tasks where id = '+req.params.id, (err, recordset)=>{
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

// POST: ~/task
router.post('/', function(req, res){
    if(req.body.UserID && req.body.TaskName && req.body.TaskDetail){
        sql.connect(env.getDBConfig(), function(err){
            if(err) console.log(err);
    
            var request = new sql.Request();
            request.query("Insert into tasks values ('"+req.body.TaskName+"','"+req.body.TaskDetail+"','"+req.body.UserID+"')", (err, recordset)=>{
                if(err) console.log(err);
                else{
                    res.status(200).send("Task Saved Successfully");
                    console.log(recordset);
                }
                sql.close();
            });
        });    
    }
    else{
        console.log(req.body.TaskName);
        console.log(req.body.TaskDetail);
        console.log(req.body.UserID);
        res.sendStatus(400);
    }
    // res.send('POST: Task working properly')
});

// Put: ~/task
router.put('/', function(req, res){
    if(req.body.taskId && req.body.UserID && req.body.TaskName && req.body.TaskDetail){
        sql.connect(env.getDBConfig(), function(err){
            if(err) console.log(err);
    
            var request = new sql.Request();
            request.query("Update tasks set Taskname = '"+req.body.TaskName+"', taskDetails = '"+req.body.TaskDetail+"' where id = "+req.body.taskId, (err, recordset)=>{
                if(err) console.log(err);
                else{
                    res.status(200).send("Task Updated Successfully");
                    console.log(recordset);
                }
                sql.close();
            });
        });    
    }
    else{
        console.log(req.body.TaskName);
        console.log(req.body.TaskDetail);
        console.log(req.body.UserID);
        res.sendStatus(400);
    }

    // res.send('PUT: Task working properly')
});
router.delete('/:id', function(req, res){
    sql.connect(env.getDBConfig(), function(err){
        if(err) console.log(err);
        var request = new sql.Request();
        request.query("delete from Tasks where id = "+ req.params.id, function(err, recordset){
            if(err) console.log(err);
            else{
                res.send("Updated Successfully");
            }
            sql.close();
        })
    })  

    
    // res.send('DELETE: Task working properly')
});

module.exports = router;