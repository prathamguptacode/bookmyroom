require('dotenv').config()
const express=require('express');
const app=express();
app.use(express.json())
const mongoose=require('mongoose');
const cors=require('cors')
const cookieParser=require('cookie-parser')
mongoose.connect(process.env.DB_URL).then(()=> console.log('connected to database'));

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.json({message:'hello world welcome to bookyourroom'});
})

const signup=require('./routes/signup')
app.use(signup)

const login=require('./routes/login')
app.use(login)

const verify=require('./routes/verify')
app.use(verify)

const refresh=require('./routes/refreshToken')
app.use(refresh)

const addProperty=require('./routes/addProperty')
app.use(addProperty)

const viewProperty=require('./routes/viewYourProperty')
app.use(viewProperty)

const view=require('./routes/view')
app.use(view)

const recent=require('./routes/recentlyVisited')
app.use(recent)

const name=require('./routes/getname')
app.use(name)

app.listen(process.env.PORT,()=> console.log('listening port '+process.env.PORT))