const{MongoClient} =require('mongodb');
const url = 'mongodb+srv://sm738875:DXajN9SSnsbUiKNH@cluster0.rakoly7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const database = 'e-comm';
const client = new MongoClient(url);

 async function getData(){
    let result = await client.connect();
    let db = result.db(database);  
    let connection = db.collection('products');
    let response = await collection.find({}).toArray(); // promise handle karega
    console.log(response);
  

}

getData();