var http = require("http");
var url = require("url");
http.createServer(function(req,res){
    res.writeHead(200,{
        "Content-Type": "text/plain;charset=utf-8"
    });
    // res.write("多云 18~30 form fangyuan");
    var result = "多云 18~30 form fangyuan";
    // res.write(`document.write('${result}')`);
    req = url.parse(req.url,true);
    var fun = req.query.callback
    res.write(`${fun}('${result}')`);
    res.end();
}).listen(9443);