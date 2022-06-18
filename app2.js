// /* 
// // var express = require("express"),
// //     mongoose = require("mongoose"),
// //     bodyParser = require("body-parser"),
// //     LocalStrategy = require("passport-local"),
// //     passportLocalMongoose =
// //         require("passport-local-mongoose"),
// //     User = require("./models/user");
 
// // mongoose.set('useNewUrlParser', true);
// // mongoose.set('useFindAndModify', false);
// // mongoose.set('useCreateIndex', true);
// // mongoose.set('useUnifiedTopology', true);
// // mongoose.connect("mongodb://localhost:27017/InventoryDB");
 
// // var app = express();
// // app.set("view engine", "ejs");
// // app.use(bodyParser.urlencoded({ extended: true }));
 
// // app.use(require("express-session")({
// //     secret: "Rusty is a dog",
// //     resave: false,
// //     saveUninitialized: false
// // }));
 
// // app.use(passport.initialize());
// // app.use(passport.session());
 
// // passport.use(new LocalStrategy(User.authenticate()));
// // passport.serializeUser(User.serializeUser());
// // passport.deserializeUser(User.deserializeUser());
 
// // //=====================
// // // ROUTES
// // //=====================
 
// // // Showing home page
// // app.get("/", function (req, res) {
// //     res.render("home");
// // });
 
// // // Showing secret page
// // app.get("/secret", isLoggedIn, function (req, res) {
// //     res.render("secret");
// // });
 
// // // Showing register form
// // app.get("/register", function (req, res) {
// //     res.render("register");
// // });
 
// // // Handling user signup
// // app.post("/register", function (req, res) {
// //     var username = req.body.username
// //     var password = req.body.password
// //     User.register(new User({ username: username }),
// //             password, function (err, user) {
// //         if (err) {
// //             console.log(err);
// //             return res.render("register");
// //         }
 
// //         passport.authenticate("local")(
// //             req, res, function () {
// //             res.render("secret");
// //         });
// //     });
// // });
 
// // //Showing login form
// // app.get("/login", function (req, res) {
// //     res.render("login");
// // });
 
// // //Handling user login
// // app.post("/login", passport.authenticate("local", {
// //     successRedirect: "/secret",
// //     failureRedirect: "/login"
// // }), function (req, res) {
// // });
 
// // //Handling user logout
// // app.get("/logout", function (req, res) {
// //     req.logout();
// //     res.redirect("/");
// // });
 
// // function isLoggedIn(req, res, next) {
// //     if (req.isAuthenticated()) return next();
// //     res.redirect("/login");
// // }
 
// // var port = process.env.PORT || 3000;
// // app.listen(port, function () {
// //     console.log("Server Has Started!");
// // });



// //const { User } = require('./models/user-schema');
// const express = require('express')
// const app = express()
// const port = 3000

// app.use(express.static('public'))
// app.use(express.json());
// /*
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// */


// app.post('/login', async (req, res) => {
//   console.log('Trying to login');
//   const user = await User.findOne({
//       username: req.body.username,
//       password: req.body.password,
//   });

//   if (user) {
//       res.json({ user: user.username, id: user._id });
//   } else {
//       res.status(403).json({
//           error: 'Invalid username or password',
//       });
//   }
// });



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://admin:admin12345@webproject.dgji0qe.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("webproject").collection("users");
//   // perform actions on the collection object
//   client.close();
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })