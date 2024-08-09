const http = require('http');
const dataAPI = require('./dataAPI')
http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-Type':'appplication\json'});
    resp.write(JSON.stringify(dataAPI))
    resp.end();
    

}).listen(7000)