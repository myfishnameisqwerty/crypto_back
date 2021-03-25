let Users = require("../models/Users")

exports.login = (req, res) =>{
    
    Users.login(req.body.userName, req.body.pass, (err, login)=>{
        if (err)    return res.json({error: true, message:err})
        return res.json({error: null, data:login})  
    })
}