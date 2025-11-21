const express=require('express')
const router=express.Router()
const recent=require('../controllers/recent')

router.post('/recent',recent)

module.exports = router