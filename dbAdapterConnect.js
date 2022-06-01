const { MongoClient } = require("mongodb");
// Connection URI
const uri = "mongodb://localhost:27017/"; // Create a new MongoClient
const client = new MongoClient(uri);

async function saveProduct(details){  
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    var col = client.db("InventoryDB").collection("product");
    var result = await col.insertOne(details);
    client.close();
    return result;
  }
  
  exports.saveProduct = saveProduct;
  