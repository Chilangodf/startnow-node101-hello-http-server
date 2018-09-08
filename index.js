// write your code here
var http = require('http');

http.createServer(function (req, res){
    res.writeHead(200, {'content-Type':'text/html'});
    res.write('Hello World');
    res.end();
})
.listen(process.env.PORT || 8080);
console.log('Server running at http://localhost:8080');
