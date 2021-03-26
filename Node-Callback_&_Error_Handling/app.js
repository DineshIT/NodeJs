var http = require("http");

http.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type':'application/text'});
    res.end("Start with hope = "+ req.url);
}).listen(8075);

console.log("http://127.0.0.1:8075");
