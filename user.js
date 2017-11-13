const sql = require('mssql');
var env = require('./env');
const express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    var record = getUserData();
    console.log(record+ 'eeee');
    res.send('working');
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



function getUserData()
{
    var records;
    // connect to your database
    sql.connect(env.getDBConfig(), function (err) {
    
        if (err) console.log(err);
    
        // create Request object
        var request = new sql.Request();
    
        // query to the database and get the records
        request.query('select * from users', function (err, recordset) {
    
            if (err) console.log(err + '<<==')
    
            // send records as a response
            // res.send(recordset);  
            records = Object.assign({}, JSON.stringify(recordset)); 
            console.log(records + '<==');
            sql.close();
        });
    });
    console.log(records + '  asdf');
    return records;
}



