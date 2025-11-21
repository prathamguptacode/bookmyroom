const express=require('express')
const router=express.Router()
const view=require('../controllers/view')

router.get('/view',view)

module.exports = router