var express = require('express');
var app = express();
let port = process.env.PORT || 3000;
// viewed at http://localhost:8080

app.use(express.static(__dirname + '/src'))

app.get('/', function(req, res){
    res.sendfile(__dirname + "/index.html");
});
app.listen(port, ()=>{
    console.log(`App is running at the port ${port}`) ;
 });