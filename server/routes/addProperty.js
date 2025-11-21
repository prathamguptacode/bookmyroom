const express=require('express')
const router=express.Router()
const auth=require('../middleware/authmid.js')
const addProperty=require('../controllers/addProperty')

router.post('/addProperty',auth,addProperty)

module.exports = router