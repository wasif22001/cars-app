var calc = require('./calc.js')
var http = require('http');



http.createServer(function(req,res){
    result = calc.add(4,5);
    console.log("The output is " + result);
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("Welcome Back Brother!");
    res.write("The output is " + result);
    res.end();
}).listen(8080);
