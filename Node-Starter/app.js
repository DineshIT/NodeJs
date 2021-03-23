var http = require("http");



http.createServer(function(req,res) {

    console.log("Http Request received on server from " + req.rawHeaders);
    res.writeHead(200,{'Content-Type':'application/json'});
    var response = JSON.stringify({'app':'Node - Starter'});

    res.end(response);
}).listen(8075);

console.log("http://127.0.0.1:8075");
