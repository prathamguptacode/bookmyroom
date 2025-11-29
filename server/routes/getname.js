const express=require('express')
const route=express.Router()
const getname=require('../controllers/getname')

route.post('/getname',getname)

module.exports=route