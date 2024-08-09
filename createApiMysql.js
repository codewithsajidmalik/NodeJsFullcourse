const mysql = require('mysql');
const con  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    passwoed: "",
    database: "subjects"

})

con.connect((err)=>{
    if(err){
        console.warn("error");
    }
})
module.exports = con;