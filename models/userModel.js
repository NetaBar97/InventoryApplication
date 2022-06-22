const mongoose = require("webproject");
 
// create an schema
var userSchema = new mongoose.Schema({
            username: String,
            password: String,
            type: String
        });
 
var userModel=mongoose.model('users',userSchema);
 
module.exports = mongoose.model("users", userModel);