const express = require("express");
const bodyParser = require("body-parser");
var user = require('./routes/user.js');
var index = require('./routes/index.js');


var app = express();
app.listen(5000,function(){
    console.log("bug模式");
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use('/user',user);
app.use('/index',index);