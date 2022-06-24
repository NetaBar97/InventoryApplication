const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const ProductModel = require("./models/productModel");
const mongoose = require("mongoose");
const UserModel = require("./models/userModel");

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uri =
  "mongodb+srv://admin:admin12345@webproject.dgji0qe.mongodb.net/?retryWrites=true&w=majority";

app.post("/login", async (req, res) => {
  const query = { username: req.body.username };
  const user = await UserModel.findOne(query);
  //console.log(user);
  if (user != null && req.body.password == user.password) {
    if (user.type == "admin") {
      res.redirect("/adminpanel.html");
    } else {
      return res.redirect("/userpanel.html");
    }
  } else {
    res.redirect("/login.html");
  }
});

/*
app.get('/', (req, res) => {
  res.send('Hello World!')
})
*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/getProduct", async (req, res) => {
  const products = await ProductModel.find();
  res.send(products);
});

app.post("/newProduct", async (req, res) => {
  const product = req.body;
  console.log(product);
  const newProduct = await ProductModel.create(product);
  res.redirect("/adminpanel.html");
});

app.get("/getUser", async (req, res) => {
  const users = await UserModel.find();
  res.send(users);
});

app.post("/newUser", async (req, res) => {
  const user = req.body;
  console.log(user);
  const newUser = await UserModel.create(user);
  res.redirect("/permissions.html");
});

app.get("/update-quantity/:productId/:newQuantity", async (req, res) => {
  const { productId, newQuantity } = req.params;
  await ProductModel.findByIdAndUpdate(productId, { quantity: newQuantity });
  res.status(200).send();
});

(async function () {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "webproject",
    });
    console.log("Connected to mongo db");
    // const database = client.db("webproject");
    // const users = database.collection("users");
    // const query = { username: "admin" };
    // const user = await users.findOne(query);
    // console.log(user);
  } catch (err) {
    console.log("error connection to db " + err);
  }
})();
