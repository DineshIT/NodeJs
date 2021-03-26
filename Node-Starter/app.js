var http = require("http");
var mod = require("./local_module");



http.createServer(function(req,res) {

    
    res.writeHead(200,{'Content-Type':'application/json'});
    var response = JSON.stringify({'app':'Node - Starter = ' + mod.find(10),
        "url": req.url,"key":req.headers, "rawHeaders":req.rawHeaders});
        console.log("Http Request received on server from " + response);
    res.end(response);
}).listen(8075);

console.log("http://127.0.0.1:8075");
