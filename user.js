// import { error } from 'util';

//import { read } from 'fs';

const sql = require('mssql');
var env = require('./env');
var bodyParser = require('body-parser');
const express = require('express');
var router = express.Router();

var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
})); 



// app.use(express.json());       // to support JSON-encoded bodies


router.get('/:id', function(req, res){
    sql.connect(env.getDBConfig(), function (err) {
            if (err) console.log(err);    
            // create Request object
            var request = new sql.Request();        
            // query to the database and get the records
            console.log(req.params.id);
            if(req.params.id != ''){
                request.query('select * from users where id = '+req.params.id, function (err, recordset) {        
                    if (err) console.log(err + '<<==')                 
                    else 
                    {
                        res.send(JSON.stringify(recordset.recordset, null, ' '));  
                        console.log(recordset);  
                    }
                    sql.close();    
                });
            }
            else{
                request.query('select * from users', function (err, recordset) {        
                    if (err) console.log(err + '<<==')                 
                    else 
                    {
                        res.send(JSON.stringify(recordset.recordset, null, ' '));  
                        console.log(recordset);  
                    }
                    sql.close();    
                });
            }
            
        });
});

router.get('/', function(req, res){
    sql.connect(env.getDBConfig(), function (err) {
            if (err) console.log(err);    
            // create Request object
            var request = new sql.Request();        
            // query to the database and get the records
                request.query('select * from users', function (err, recordset) {        
                if (err) console.log(err + '<<==')                 
                else 
                {
                    res.send(JSON.stringify(recordset.recordset, null, ' '));  
                    console.log(recordset);  
                }
                sql.close();    
            });
        });
});


router.post('/', function(req, res){
    if(req.body.username && req.body.password)
    {
        console.log('asd => ' + req.body);
        console.log(req.body.username);
        console.log(req.body.password);
        console.log(req.headers.host);
        //console.log(req.body.username + "   " + req.body.password)
        //res.send('sadfafdssa');
        sql.connect(env.getDBConfig(), function(err){
            if(err) console.log(err);
            //console.log("Insert into users values (" +req.body.username  +","+ req.body.password + ")");
            var request = new sql.Request();
            request.query("Insert into users values ('" +req.body.username  +"','"+ req.body.password + "')", (err, recordset)=>{
                if(err) console.log(err);
                else{
                    res.send("saved Successfully");
                    //res.send(200);
                }
                sql.close();
            })
        })
    }
    else
    {
        console.log(req.body.username);
        console.log(req.body.password);
        res.sendStatus(400);
        // res.json({message: "Bad Request"});
    }

    
});



router.put('/', function(req, res){
    if(req.body.id && req.body.username && req.body.password){
        sql.connect(env.getDBConfig(), function(err){
            if(err) console.log(err);
            var request = new sql.Request();
            request.query("update Users set UserName='"+req.body.username+"', Password = '"+req.body.password+"' where id="+ req.body.id, function(err, recordset){
                if(err) console.log(err);
                else{
                    res.send("Updated Successfully");
                }
                sql.close();
            })
        })
    }else{
        res.sendStatus(400);
    }
    // res.send('PUT: User working properly')
});



router.delete('/:id', function(req, res){
    sql.connect(env.getDBConfig(), function(err){
        if(err) console.log(err);
        var request = new sql.Request();
        request.query("delete from Users where id = "+ req.params.id, function(err, recordset){
            if(err) console.log(err);
            else{
                res.send("Updated Successfully");
            }
            sql.close();
        })
    })
    // res.send('DELETE: User working properly')
});



module.exports = router;

