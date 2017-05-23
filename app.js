var express       = require("express"),
    app           = express(),
    bodyParser    = require("body-parser"),
    mongoose      = require("mongoose"),
    methodOverride= require("method-override"),
    sanitizer     = require("express-sanitizer"),
    seedDB        = require("./seedDB"),
    Blog          = require("./models/Blog"),
    passport              = require("passport"),
    passportLocal         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    expressSession        = require("express-session"),
    User                  = require("./models/User")

var blogRoute = require("./routes/blogs")
var indexRoute = require("./routes")
var profileRoute = require("./routes/profile")

mongoose.connect("mongodb://localhost/blog")
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
// tells what to search at url , in my case it is _method but it can be anything
app.use(methodOverride("_method"))
// tells the app to use sanitizer .!!!! It should allways come after bodyParser
app.use(sanitizer())

// * Passport Configuration *
app.use(expressSession({
  secret:"e tope tope die papagoalo", // wil be used to encode and decode the session
  resave:false,
  saveUninitialized:false
}))
app.use(passport.initialize())
app.use(passport.session())
// takes the data and encodes it and put it in session and deencodes it
passport.use(new passportLocal(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
// *------------------------*

// middleware
app.use(function(req,res,next){
  res.locals.currentUser = req.user
  next()
})

// Routes

seedDB()
app.use(indexRoute)
app.use(blogRoute)
app.use(profileRoute)

app.listen("3000",function () {
  console.log("blog server stated at 3000");
})
