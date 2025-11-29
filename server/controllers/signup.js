const temp = require('../models/tempSchema')
const user = require('../models/userSchema')
const jwt = require('jsonwebtoken')
const nodeMailer = require('nodemailer')
const otpgen = require('otp-generator')

async function signup(req, res) {
    try {
        const name = req.body?.name;
        const email = req.body?.email;
        const password = req.body?.password;
        if ((!name) || (!email) || (!password)) {
            return res.status(400).json({ message: 'invalid data' })
        }
        //enable express validation
        const emailreg = /^(?!.*\.\.)(?!\.)[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
        const passreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+\[\]{}|\\;:'",.<>/?`~])[A-Za-z\d!@#$%^&*()_\-+\[\]{}|\\;:'",.<>/?`~]{8,}$/;
        if(!emailreg.test(email)){
            return res.status(403).json({message: 'not  valid email'})
        }
        if(!passreg.test(password)){
            return res.status(403).json({message: 'esay password'})
        }
        //chrking that user already be in db
        const inuser=await user.findOne({email})
        if(inuser){
            return res.status(403).json({message: 'user already exists'})
        }

        const otp=sendOtp(email,name)
        console.log(otp)
        if(!otp){
            return res.status(500).json({message: 'could not send the otp'})
        }
        const signupToken = jwt.sign({ email: email }, process.env.SIGNUPTOKEN, { expiresIn: '10m' })
        const tempUser = new temp({ name, email, password, otp})
        await tempUser.save()
        res.json({ message: 'temp-user created otp validation required', signupToken: `${signupToken}` })
        console.log('say chesse')
    } catch (error) {
        console.log(error.message)
        console.log('something went wrong in signup step1')
        res.status(500).json({message: 'something went wrong internal server error'})
    }
}

function sendOtp(email,name) {
    const otp = otpgen.generate(5, { upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false })
    let transport = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'prathamgupta.wk@gmail.com',
            pass: process.env.EPASS
        }
    })
    let mailOption = {
        from: 'prathamgupta.wk@gmail.com',
        to: email,
        subject: `Your OTP Verification Code is ${otp}`,
        text: `Dear ${name},\nThank you for signing up with us. To verify your email, please enter the following\nOne Time Password (OTP): ${otp}\nThis OTP is valid for 10 minutes from the receipt of this email.`
    }
    transport.sendMail(mailOption,(err,value)=>{
        if(err){
            console.log(err.message)
            return console.log('could not send the otp')
        }
    })
    return otp
}

module.exports = signup;