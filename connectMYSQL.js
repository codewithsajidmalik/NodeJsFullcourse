const mysql  = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "classroom"
});
con.connect((err)=>{
    if(err){
        console.warn("error");
    }else{
        console.warn("connected")
    }
});

