const User = require('../models/userSchema')
const tempUser = require('../models/tempSchema')
const jwt = require('jsonwebtoken')
async function verify(req, res) {
    try {
        const header = req.headers['authorization'];
        if (!header) {
            res.status(400).json({ message: 'could not find authorization data' })
        }
        const token = header.split(' ')[1]
        const otp = req.body?.otp
        if (!otp) return res.status(400).json({ message: 'did not find the otp' })
        let userEmail;
        jwt.verify(token, process.env.SIGNUPTOKEN, (err, decode) => {
            if (err) {
                return res.status(403).json({ message: 'invalid token' })
            }
            userEmail = decode.email
        })
        if (!userEmail) {
            return
        }
        const userlist = await tempUser.where('email').equals(userEmail).sort({ joinedAt: -1 }).select('-_id')
        const user = userlist[0]
        const dbotp = user.otp;
        if (dbotp == otp) {
            const newuser = new User(user.toObject())
            const data=await newuser.save()
            //give tokens
            const refreshToken=jwt.sign({email: user.email},process.env.REFRESHTOKEN)
            const accessToken=jwt.sign({email: user.email},process.env.ACCESSTOKEN,{expiresIn: '12m'})
            res.cookie('refreshToken',refreshToken,{httpOnly: true})
            res.status(201).json({ message: 'congrations user created',data,accessToken})
        }
        else {
            res.status(403).json('invalid otp')
        }

    } catch (error) {
        console.log(error.message)
        console.log('something went wrong in otp verification')
        res.status(200).json({ message: 'something went wrong in server during otp verification' })
    }
}
module.exports = verify
