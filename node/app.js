const http = require("http")
http.createServer((req,res)=>{
    res.writeHead(200)
    res.end("hello world request")
}).listen(1337, '127.0.0.1')
console.log('hello world!\nServer running at http://127.0.0.1:1337/')