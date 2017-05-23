var express =require("express")
var router = express.Router()
var User = require("../models/User")
var passport= require("passport")

router.get("/",function (req,res) {
  res.redirect("/blogs")
})

// Login
router.get("/login",function (req,res) {
  res.render("login")
})

router.post("/login",passport.authenticate("local",{
  successRedirect:"/blogs",
  failureRedirect:"/login"
}),function (req,res) {})


// Sign up
router.get("/signup",function (req,res) {
  res.render("signup")
})

router.post("/signup",function (req,res) {
  var username = req.body.username
  var password = req.body.password
  var name = req.body.name
  var age = req.body.age
  var gender = req.body.gender
  var newUser = new User({username:username,name:name,age:age,gender:gender})
  User.register(newUser,password,function (err,user) {
    if (err) {
      console.log(err);
      res.redirect("/signup")
    } else {
      passport.authenticate("local")(req,res,function () {
        res.redirect("/blogs")
      })
    }
  })
})

// Sign out

router.get("/signout",function (req,res) {
  req.logout()
  res.redirect("/blogs")
})




module.exports= router
