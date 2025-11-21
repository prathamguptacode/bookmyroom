const Property = require('../models/roomSchema')

async function view(req, res) {
    const name = req.query.q
    const city = req.query.city
    const id = req.query.id
    if (name) {
        const data = await Property.find({ name })
        return res.json({ data })
    }
    if (city) {
        const data = await Property.find({ city })
        return res.json({ data })
    }
    if(id){
        const data=await Property.findById(id)
        return res.json({ data })
    }
}

module.exports=view