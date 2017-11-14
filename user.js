const sql = require('mssql');
var env = require('./env');
const express = require('express');
var router = express.Router();

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
    res.send('POST: User working properly')
});



router.put('/', function(req, res){
    res.send('PUT: User working properly')
});



router.delete('/', function(req, res){
    res.send('DELETE: User working properly')
});



module.exports = router;

