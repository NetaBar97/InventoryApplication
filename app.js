const express = require('express')
const app = express()
const port = 3000
const { MongoClient } = require("mongodb");
const bodyParser = require('body-parser');
const webproject=require('./models/dbAdapterConnect')

app.use(express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const uri =  "mongodb+srv://admin:admin12345@webproject.dgji0qe.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db('webproject');
    const users = database.collection('users');
    const query = { username: 'admin' };
    const user = await users.findOne(query);
    console.log(user);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

app.post("/login",(req,res) => {
  async function loginUser()
  {
    await client.connect();
    const database = client.db('webproject');
    const users = database.collection('users');
    const query = { username: req.body.username };
    const user = await users.findOne(query);

    if (user != null && req.body.password == user.password) {
      if (req.body.username == 'admin')
        return res.redirect("/adminpanel.html");
      return res.redirect("/userpanel.html");
    }
    else return res.redirect("/login.html");
    
/*
    if (user != null && req.body.password == user.password && req.body.type=="admin") 
        return res.redirect("/adminpanel.html");
    else if (user != null && req.body.password == user.password && req.body.type=="user")
      return res.redirect("/userpanel.html");
    else return res.redirect("/login.html");
*/
    /*
    if(user != null && req.body.type == 'admin') 
      return res.redirect("/adminpanel.html");
    else if (user != null && req.body.password == user.password) 
      return res.redirect("/userpanel.html");
    return res.redirect("/login.html");
    */

  //  if(user != null && req.body.password == user.password) 
   //  return res.redirect("/adminpanel.html");
 //  return res.redirect("/login.html"); 
  }
  loginUser();
})

/*
app.get('/', (req, res) => {
  res.send('Hello World!')
})
*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/getProduct', (req, res) => {

  async function myProduct() {
    await webproject.getProductsCollection().then((result) => { res.send(result)});
  }
  myProduct();
})

app.get('/getUser', (req, res) => {

  async function myUser() {
    await webproject.getUsersCollection().then((result) => { res.send(result)});
  }
  myUser();
})


