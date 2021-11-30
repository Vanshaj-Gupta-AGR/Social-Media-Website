const passport=require('passport');
const googlestrategy=require('passport-google-oauth').OAuth2Strategy;
const crypto=require('crypto');
const User=require('../models/user');


passport.use(new googlestrategy({
    clientID: "679517054520-0fs1l7b8u11mkqcg93dt77tnhe70285c.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:8000/users/auth/google/callback"
   },
   function(accessToken,refreshToken,profile,done){
        User.findOne({email: profile.emails[0].value}).exec(function(err,user){
            if(err){
                console.log("error in google",err);
                return ;
            }

            console.log(profile);

            if(user){
                return done(null,user);
            }
            else{
                User.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex')
                },function(err,user){
                    if(err){
                        console.log(err);
                    }

                    return done(null,user);
                })
            }
        })
   }
))


module.exports=passport;