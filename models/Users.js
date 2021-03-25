const jwt = require('jsonwebtoken')
const myUser = {
    userName: 'qwerty',
    pass:'ytrewq'
}
var Users = function(){
    
}
Users.login = (userName, password, result) =>{
    // console.log(userName, myUser.userName);
    if (userName=== myUser.userName && password ===  myUser.pass)
        return result(null, jwt.sign({userName},  process.env.TOKEN_SECRET, { expiresIn: '2d' }))
    return result({error:true,message:"data not match"}, null)
        
}
module.exports = Users