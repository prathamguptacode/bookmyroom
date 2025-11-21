const express=require('express')
const router=express.Router()
const signup=require('../controllers/signup')
const middleware=require('../middleware/auth')

router.post('/signup',middleware,signup)

module.exports=router