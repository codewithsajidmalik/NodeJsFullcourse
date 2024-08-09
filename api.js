const express = require('express')
//const dbConnect = require('./mongodb')

const app = express();
app.use(express.json());

app.get('/',(req,resp)=>{
    resp.send({name: 'sajid'})
});
app.post('./',(req,resp)=>{
    console.log(req.body)
    resp.send({name: 'malik'})
})

app.listen(9000);