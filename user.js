// Getting libraries
const sql = require('mssql');
var env = require('./env');
var bodyParser = require('body-parser');
const express = require('express');
var router = express.Router();

// initializing libraries
var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
})); 



app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Credentials', true);    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
  });

// User Login Method
// ~/user/login
router.post('/login',(req, res)=>{
    if (req.body.UserName && req.body.Password) {
        console.log(req.body.UserName);
        console.log(req.body.Password);
        sql.connect(env.getDBConfig(), function(err){
            if(err) console.log(err);
            var request = new sql.Request();
            request.query("select top 1 * from users where username = '"+req.body.UserName+"'", (err,recordset)=>{
                if(err) console.log(err);
                else {
                    if (recordset.rowsAffected == 0){
                        res.sendStatus(404);
                    } else {
                        var pass = recordset.recordset[0].Password;
                        console.log(pass);
                        if (pass == req.body.Password) {
                            res.status(200).send(recordset.recordset);    
                        } else res.sendStatus(403);
                        console.log(recordset);
                    }
                    
                }
                sql.close();
            })
        })
    } else{
        console.log(req.body.UserName);
        console.log(req.body.Password);
        console.log('bad req');
        res.sendStatus(400);
    }
    
});




// get: ~/user/{id}
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

// Get: ~/user
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

// Post: ~/user/registration
router.post('/registration', function(req, res){
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


// Put: ~/user
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


// Delete: ~/user/{id}
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






// exporting the whole router
module.exports = router;

