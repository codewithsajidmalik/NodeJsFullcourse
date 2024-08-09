const express = require('express');
const path = require('path');
const app = express();

const publicpath = path.join(__dirname,'public');

app.set('view engine','ejs');

//  console.log(publicpath); 
// app.use(express.static(publicpath));
app.get('',(_,resp)=>{
    resp.sendFile(`${publicpath}/home.html`)
})
app.get('/aboutme',(_,resp)=>{ // "/aboutme ke naam se file search karni hogi" and this is use to remove extension file
    resp.sendFile(`${publicpath}/about.html`)
})
app.get('*',(_,resp)=>{
    resp.sendFile(`${publicpath}/pagenotfound.html`)
})
app.get('./profile',(_,resp)=>{
    const user={
        name: ' sajid malik',
        email:'sm@amil.com',
        skill:['php','js','c++']

    }
    resp.render('profile',{user})
});

app.listen(5500);