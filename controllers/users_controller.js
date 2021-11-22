module.exports.profile=function(req,res){
    res.end('<h1>user profile</h1>')
}

module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title: 'codeial | sign up'
    })
}

module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title: 'codeial | sign in'
    })
}

module.exports.create=function(req,res){

}
module.exports.createSession=function(req,res){
    
}
