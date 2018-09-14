const express = require("express");
const app = express();
const bodyParser = require("body-parser");

var user = require('./routes/user.js');
var pool = require('./pool.js');
app.listen(5000,function(){
    console.log("服务器开启成功");
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use('/user',user);