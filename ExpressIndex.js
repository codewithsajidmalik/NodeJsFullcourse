const express = require('express');
const app  = express();
app.get('',(req,resp)=>{ // req = request, res = response
    resp.send(`
    <h1>My name is sajid malik from home page<h1><a href="/about">go to about page</a>
    `);
    
});
app.get('/about',(req,resp)=>{ // req = request, res = response
    resp.send(`
    <input  type="text" placeholder="user name"/>
    <button>click me</button>

    `);

    
});

app.listen(6000); // server 