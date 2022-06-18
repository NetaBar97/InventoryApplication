const express = require('express')
const app = express()
const port = 3000
const { MongoClient } = require("mongodb");
const bodyParser = require('body-parser');


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
    // Query for a movie that has the title 'Back to the Future'
    const query = { username: 'admin' };
    const user = await movies.findOne(query);
    console.log(user);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);

app.post("/login",(req,res) => {
    console.log(req.body.username);
  

})

/*
app.get('/', (req, res) => {
  res.send('Hello World!')
})
*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
