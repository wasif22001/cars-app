var http = require('http');

http.createServer(function(req,res){
    res.write("Welcome Back Brother!");
    res.end();
}).listen(8080);