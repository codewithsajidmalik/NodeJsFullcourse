const dbconnect = require('./mongodb');

const insert = async ()=>{
    const db = await db.connect();
    console.log(db)
}

insert();