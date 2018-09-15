var http = require("http");
var url = require("url");
http.createServer(function(req,res){
    res.writeHead(200,{
        "Content-Type": "text/plain;charset=utf-8",
        "Access-Control-Allow-Origin": "*"
    });
    var result = "多云 18~30 form fangyuan";
    res.write(result);
    res.end();
}).listen(9443);