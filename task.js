const express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('Get: Task working properly')
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