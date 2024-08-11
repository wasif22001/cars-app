const express = require('express');

const app = express();

let cars = ['Honda','Toyota','Nissan', 'Subaru','Mitsubishi','Subaru','Havel','Cherry','Mercedes','bmw','audi','porsche'];

app.get('/',function(req,res){
    res.write("Home page....");
    res.end();
})

app.get('/car',function(req,res){
    
    const id = req.query.id;

    if (id >= 0 && id < cars.length) {
        res.write(cars[id]);
    }
    else{
        res.write("Not Found!");
    }
    res.end();
})

app.get('/car/:id',function(req,res){
    
    const id = req.params.id;

    if (id >= 0 && id < cars.length) {
        res.write(cars[id]);
    }
    else{
        res.write("Not Found!");
    }
    res.end();
})

app.listen(9000, function(req,res){
    console.log("Cars server is Running.......")
});