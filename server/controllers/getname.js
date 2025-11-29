const jwt=require('jsonwebtoken')
const User=require('../models/userSchema')
function name(req,res){
    const token=req.body?.token;
    if(!token){
        return res.status(400).json({success: false,message: 'invalid input'})
    }
    let key;
    jwt.verify(token,process.env.ACCESSTOKEN, (err,val)=>{
        if(err) return res.status(400).json({success: false,message: 'invalid token'})
        key=val;
    })
    if(key){
        (async ()=>{
            const user=await User.findOne({email: key.email})
            res.json({success: true, user:user.name })
        })()
    }
}


module.exports=name