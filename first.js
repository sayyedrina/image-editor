http=require('http');
server=http.createServer(function(req,res){
    if(req.url=='/'){
        res.write('<html><body><p>Hello everyone</p></body></html>');
        res.end();
    }
    if(req.url=='/student'){
        res.writeHead(200,{'context-type':'text/html'});
        res.write('<html><Body><p>This is Student page</p></Body></html>');
        res.end();
    }
    if(req.url=='/admin'){
        res.writeHead(200,{'context-type':'text/html'});
        res.write('<html><body><p>This is Admin page</p></body></html>');
        res.end();
    }
    res.end('Invalid request');
})
server.listen(5000);
console.log('Node.js web server at port 5000 is running...')