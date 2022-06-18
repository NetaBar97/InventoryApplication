const mongoose = require("InventoryDB");
 
// create an schema
var userSchema = new mongoose.Schema({
            username: String,
            password: String,

        });
 
var userModel=mongoose.model('users',userSchema);
 
module.exports = mongoose.model("Users", userModel);