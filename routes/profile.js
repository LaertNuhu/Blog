var express =require("express")
var router = express.Router()
var User = require("../models/User")
var passport= require("passport")

router.get("/profile" ,function (req,res) {
  User.find({},function (err,user) {
    if (err) {
      return res.redirect("back")
    }
    res.render("profile",{user:user})
  })
})
router.post("/profile",function (req,res) {
  var id = req.body.id
  User.findById(req.user,function (err,currentUser) {
    if (err) {
      console.log("the current user was not found");
      return res.redirect("back")
    }
    User.findById(id).exec(function (err,friend) {
      if (err) {
        console.log("There was a problem with finding "+id);
        return res.redirect("back")
      }
      // problemmmmmmmmm!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      if(currentUser.friends.indexOf({username:friend.username,_id:friend.id}) > -1){
        console.log("is contained");
      }else {
        console.log("not contained"+currentUser.friends.indexOf(friend.friends));
        console.log(currentUser.friends[0].username);
        console.log(friend);
        currentUser.friends.push(friend)
        currentUser.save()
      }
    })
    res.redirect("back")
  })
})

module.exports = router
