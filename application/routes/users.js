
var express = require('express');
var router = express.Router();
var db = require('../conf/database')
var bcrypt = require('bcrypt');
var { isLoggedIn, isMyProfile} = require("../middleware/auth");
const { isUsernameUnique, usernameCheck, passwordCheck, emailCheck,tosCheck,ageCheck,isEmailUnique } = require('../middleware/validation');
const { getPostsForUserBy } = require('../middleware/posts');

/* GET localhost:3000/users/registration */
router.post('/registration', usernameCheck, isUsernameUnique, passwordCheck, emailCheck, isEmailUnique,async function(req, res, next) {
  var {username,email,password} = req.body;
  try{

    var hashedPassword = await bcrypt.hash(password, 3);

    var [resultObject, fields] = await db.execute(`INSERT INTO users
    (username, email, password)
    value
    (?,?,?);`,[username,email,hashedPassword]);
    if(resultObject && resultObject.affectedRows == 1){
      return res.redirect('/login');
    }else{
      return res.redirect('/registration');
    }
  }catch(error){
    next(error);
  }
});

router.post("/login", async function (req,res,next){
  const {username, password} = req.body;
  if(!username || !password){
    return res.redirect("/login");
  }else{
    var[rows,fields] = await db.execute(`select id,username,password,email from users where username=?;`,[username]);
    var user = rows[0];
    if(!user){
      req.flash("error",`Log In Failed: Invalid username/password`);
      req.session.save(function(err){
        return res.redirect("/login");
      })
    }else{
      var passwordsMatch = await bcrypt.compare(password, user.password);
      if(passwordsMatch){
        req.session.user = {
            userId: user.id,
            email: user.email,
            username: user.username
        };
        req.flash("success",`You are now logged in!`);

        req.session.save(function(err){
          return res.redirect("/");
        })
      }else{
        return res.redirect("/login");
      }
    }
  }
});

router.get("/profile/:id(\\d+)", isLoggedIn ,isMyProfile, getPostsForUserBy,function(req,res){
  console.log(req.params);
  res.render("profile");
});

router.post("/logout", function(req,res,next){
  req.session.destroy(function(err){
    if(err){
      next(err);
    }
    return res.redirect('/');
  })
});

module.exports = router;
