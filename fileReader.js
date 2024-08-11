var fs = require('fs');

fs.readFile('calc.js','utf8', function(err,data){
    console.log(data);
});

fs.appendFile('cal1.js','console.log("done")',function(err){
    console.log("Data saved!");
});

//Delete a file
fs.unlink('cal1.js',function(err){
    console.log("Deleted!");
});