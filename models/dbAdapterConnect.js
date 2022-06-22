const { MongoClient } = require("mongodb");
// Connection URI
const uri =  "mongodb+srv://admin:admin12345@webproject.dgji0qe.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function getProductsCollection(){  
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    const database = client.db('webproject');
    const products = database.collection('products');
    const query = {  };
    let res = await products.find(query).toArray();
    console.log(res);
   
    return res;
    
  }
  exports.getProductsCollection = getProductsCollection;

  async function getUsersCollection(){  
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    const database = client.db('webproject');
    const users = database.collection('users');
    const query = {  };
    let res = await users.find(query).toArray();
    console.log(res);
   
    return res;
    
  }
  exports.getUsersCollection = getUsersCollection;

  /*
  async function saveProduct(details){  
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    var col = client.db("webproject").collection("product");
    var result = await col.insertOne(details);
    client.close();
    return result;
  }
  
  exports.saveProduct = saveProduct;
*/
