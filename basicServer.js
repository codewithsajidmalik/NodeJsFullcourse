const http = require('http')

// http.createServer((req,resp)=>{
//     resp.write("hello i am sajid");
//     resp.end();
// }).listen(4500);

function datacontrol(req,resp){
    resp.write("hello i am mail");
    resp.end();
}


http.createServer(datacontrol).listen(4500);
   
