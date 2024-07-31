var express = require('express');
const {isLoggedIn} = require('../middleware/auth');
const { getRecentPosts } = require('../middleware/posts');
var router = express.Router();

/* GET home page. */
router.get('/', getRecentPosts,function(req, res, next) {
  res.render('index', { title: 'CSC 317 App', name:"Jose Rios" });
});

module.exports = router;

router.get("/login", function(req,res){
  res.render('login',{ title: 'login',css:["style.css"]});
})
router.get("/postvideo", isLoggedIn,function(req,res){
  res.render('postvideo',{ title: 'postvideo',css:["style.css"]});
})
router.get("/profile/:id(\\d+)", isLoggedIn,function(req,res){
  res.render('profile',{ title: 'profile',css:["style.css"]});
})
router.get("/registration", function(req,res){
  res.render('registration',{ title: 'registration',css:["style.css"],js:["validation.js"]});
});
