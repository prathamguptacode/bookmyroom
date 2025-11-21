const mongoose=require('mongoose');
const tempSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    joinedAt:{
        type:Date,
        default:Date.now
    },
    otp:Number
})
module.exports = mongoose.model('temp',tempSchema)