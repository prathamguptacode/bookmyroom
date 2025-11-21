const jwt=require('jsonwebtoken')

async function middleware(req,res,next) {
    const headers=req.headers["authorization"]
    if(!headers){
        return res.json({message: 'token not found'})
    }
    const accessToken=headers.split(' ')[1]
    let flag;
    jwt.verify(accessToken,process.env.ACCESSTOKEN,(err,val)=>{
        if(err){
            return res.status(403).json({message: 'unauthorized user or corrupted token'})
        }
        flag=val.email;
    })
    if(!flag){
        return 
    }
    else{
        req.user=flag;
        next()
    }
}

module.exports = middleware