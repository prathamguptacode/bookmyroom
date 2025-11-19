const mongoose=require('mongoose');
const roomSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    description:{
        type:String,
        required:true
    },
    popularFacilities:{
        type:[String],
        required:true
    },
    price:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    review:Number,
    Comment:String,
    Block:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('rooms',roomSchema)