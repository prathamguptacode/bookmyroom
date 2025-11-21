const jwt=require('jsonwebtoken')
const User=require('../models/userSchema')
async function login(req,res) {
    const email=req.body?.email;
    const password=req.body?.password;
    if((!email) || (!password)){
        return res.status(400).json({message: 'invalid data'})
    }
    const user=await User.findOne({email})
    if(!user){
        return res.status(403).send('invalid user')
    }
    if(user.password == password){
        const refreshToken=jwt.sign({email},process.env.ACCESSTOKEN)
        const accessToken=jwt.sign({email},process.env.ACCESSTOKEN,{expiresIn: '1h'})
        res.cookie('refreshToken',refreshToken,{httpOnly:true})
        res.json({message: 'hello user', accessToken})
        return 
    }
    res.json({message: 'invalid password'})
}

module.exports=login