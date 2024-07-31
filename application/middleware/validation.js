var validator = require('validator');
var db = require('../conf/database');
module.exports={
    usernameCheck: function(req,res,next){
        var {username}= req.body;
        username = username.trim();
        if(!validator.isLength(username, {min:3})){
            req.flash("error","Username must be 3 or more characters");
        }
        if(!/[a-zA-Z]/.test(username.charAt(0))){
            req.flash("error","Username must begin with a character");
        }
        if(req.session.flash.error){
            res.redirect('/registration');
        }else{
            next();
        }
    },
    passwordCheck: function(req,res,next){
        var {password} = req.body;
        if(password.length < 8){
            req.flash("error","Password should be at least 8 characters or longer");
        }else{
            next();
        }
    },
    emailCheck: function(req,res,next){
        next();
    },
    tosCheck: function(req,res,next){
        next();
    },
    ageCheck: function(req,res,next){
        next();
    },
    isUsernameUnique: async function(req,res,next){
        var {username} = req.body;
        try{
            var [rows, fields] = await db.execute(`select id from users where username=?;`,[username]);
            if(rows && rows.length > 0){
            req.flash("error", `Username "${username}" is already taken`);
            return req.session.save(function (err){
                return res.redirect('/registration');
                });
            }else{
                next();
            }
        }catch(error){
            next(error);
        }
    },
    isEmailUnique: async function(req,res,next){
        var {email} =req.body;
        try{
            var [rows, fields] = await db.execute(`select id from users where email=?;`,[email]);
            if(rows && rows.length > 0){
            req.flash("error", `"${email}" is already taken`);
            return req.session.save(function (err){
                return res.redirect('/registration');
            });
    }else{
        next();
    }
        }catch(error){
            next(error);
        }

    }
};