const express=require('express')
const router=express.Router()
const verify=require('../controllers/verify')
router.post('/verifyotp',verify)
module.exports=router