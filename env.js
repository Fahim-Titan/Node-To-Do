var port = 3000;

var db= '';
var username = '';
var password = '';

//db configs
const config = {
    user: 'sa',
    password: 'sa',
    server: 'DESKTOP-1KTN2KH', // You can use 'localhost\\instance' to connect to named instance
    database: 'DemoDB',
    options: {
        encrypt: true  // Use this if you're on Windows Azure
    }
}

exports.getPort = () => {return port;}

exports.getDBConfig = () => {return config;}