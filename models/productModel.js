const mongoose = require("mongoose");

// create a schema
var productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  category: String,
  img: String,
  minQuantity: Number,
});

var ProductModel = mongoose.model("products", productSchema);

module.exports = ProductModel;
