const express=require('express')
const router=express.Router()
const viewProperty=require('../controllers/viewProperty')
const auth=require('../middleware/authmid.js')

router.get('/viewProperty',auth,viewProperty)

module.exports = router