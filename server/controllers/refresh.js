const jwt=require('jsonwebtoken')
async function refresh(req,res) {
    const token=req.cookies?.refreshToken
    if(!token){
        return res.status(400).json({message: 'token not found'})
    }
    let userEmail;
    jwt.verify(token,process.env.REFRESHTOKEN,(err,val)=>{
        if(err){
            return res.status(403).json({message: 'invalid token'})
        }
        userEmail=val.email
    })
    if(!userEmail){
        return
    }
    console.log(userEmail)
    const accessToken=jwt.sign({email: userEmail},process.env.ACCESSTOKEN,{expiresIn: '1h'})
    res.json({accessToken})
}
module.exports = refresh