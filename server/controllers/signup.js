const temp=require('../models/tempSchema')
const jwt=require('jsonwebtoken')

async function signup(req,res) {
    try {
        const name=req.body?.name;
        const email=req.body?.email;
        const password=req.body?.password;
        if((!name) || (!email) || (!password)){
            return res.status(400).json({message: 'invalid data'})
        }
        //enable joi validation
        
        const signupToken=jwt.sign({email: email},process.env.SIGNUPTOKEN,{expiresIn: '10m'})
        const tempUser=new temp({name,email,password})
        await tempUser.save()
        res.json({message: 'temp-user created otp validation required',signupToken:`Bearer ${signupToken}`})
        console.log('say chesse')
    } catch (error) {
        console.log(error.message)
        console.log('something went wrong in signup step1')
    }
}

module.exports = signup;