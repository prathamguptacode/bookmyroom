const User=require('../models/userSchema')
async function view(req,res) {
    const email=req.user;
    const data=await User.where('email').equals(email).select('property').populate('property')
    console.log(data)
    res.json({properties: data})
}
module.exports = view