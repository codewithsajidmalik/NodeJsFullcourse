const {MongoClient, Collection} = require('./mongodb');
// const MongoClient = require('mongodb').MongoClien;
const url = 'mongodb://localhost:27017';
const database = 'e-comm'
const client = new MongoClient(url);

async function getData(){
    let result = await client.connect();
    let db = result.db(database);
   let Collection = db.Collection('products');
    let response = await Collection.find({}).toArray()
   console.log(response);
}
getData();
