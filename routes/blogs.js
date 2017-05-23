var express =require("express")
var router = express.Router()
var Blog = require("../models/Blog")


// Index
router.get("/blogs",function (req,res) {
  Blog.find({},function (err,blogs) {
    if (err) {
      console.log(err);
    } else {
      res.render("index",{blogs:blogs})
    }
  })
})

// New
router.get("/blogs/new",isLoggedIn,function (req,res) {
  res.render("newPost")
})


// Create
router.post("/blogs",isLoggedIn,function (req,res) {
  var title = req.body.title
  var img = req.body.img
  var content = req.body.content
  var newPost = {title:title,img:img,body:content}
  newPost.body =req.sanitize(newPost.body)
    Blog.create(newPost,function (err) {
      if (err) {
        res.render("newPost")
      } else {
        res.redirect("/blogs")
      }
    })
})


// Show
router.get("/blogs/:id",function (req,res) {
  Blog.findById(req.params.id,function (err,foundElem) {
    if (err) {
      res.redirect("/blogs")
    } else {
      res.render("show",{foundElem:foundElem})
    }
  })
})

// Edit
router.get("/blogs/:id/edit",function (req,res) {
  Blog.findById(req.params.id,function (err,foundElem) {
    if (err) {
      res.redirect("/blogs")
    } else {
      res.render("edit",{blog:foundElem})
    }
  })
})


// Update
router.put("/blogs/:id",function (req,res) {
  var title = req.body.title
  var img = req.body.img
  var content = req.body.content
  var UpdatedPost = {title:title,img:img,body:content}
  UpdatedPost.body =req.sanitize(UpdatedPost.body)
  // Blog.findByIdAndUpdate(id, newData ,callback)
  Blog.findByIdAndUpdate(req.params.id, UpdatedPost ,function (err, updatedElem) {
    if (err) {
      res.redirect("/blogs")
    } else {
      res.redirect("/blogs/"+req.params.id)
    }
  })
})


// Destroy
router.delete("/blogs/:id",function (req,res) {
  Blog.findByIdAndRemove(req.params.id,function (err){
    if (err) {
      res.redirect("/blogs")
    }
    else {
      res.redirect("/blogs")
    }
  })
})

function isLoggedIn(req,res,next) {
  if (req.isAuthenticated()) {
    next()
  }
  res.redirect("/login")
}

module.exports = router
