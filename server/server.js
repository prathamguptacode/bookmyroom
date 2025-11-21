require('dotenv').config()
const express=require('express');
const app=express();
app.use(express.json())
const mongoose=require('mongoose');
mongoose.connect(process.env.DB_URL).then(()=> console.log('connected to database'));

app.get('/',(req,res)=>{
    res.json({message:'hello world welcome to bookyourroom'});
})

const signup=require('./routes/signup')
app.use(signup)

const login=require('./routes/login')
app.use(login)

const verify=require('./routes/verify')
app.use(verify)


app.listen(process.env.PORT,()=> console.log('listening port '+process.env.PORT))