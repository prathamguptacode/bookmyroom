const mongoose=require('mongoose');
const {Schema}=require('mongoose')
const userSchema=new mongoose.Schema({
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
    property:[{
        type: Schema.Types.ObjectId,
        ref: 'rooms'
    }],
    joinedAt:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model('users',userSchema)