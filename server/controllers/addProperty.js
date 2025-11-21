const Property = require('../models/roomSchema')
const User = require('../models/userSchema')

async function addProperty(req, res) {
    try {
        const useremail = req.user
        console.log(useremail)
        const user = await User.findOne({ email: useremail })
        const name = req.body?.name;
        const owner = user._id;
        const description = req.body?.description;
        const popularFacilities = req.body?.popularFacilities;
        const price = req.body?.price;
        const address = req.body?.address;
        const city = req.body?.city;
        if ((!name) || (!owner) || (!description) || (!popularFacilities) || (!price) || (!address) || (!city)) {
            return res.json({ message: 'invalid data missing data' })
        }
        const property = new Property({ name, owner, description, popularFacilities, price, address, city })
        const data = await property.save()
        const initalProp = await Property.where('owner').equals(owner).sort({ createdAt: -1 }).select('_id')
        const secprop=initalProp.map((e)=> e._id)
        let proparray = user.property;
        if (proparray == []) {
            const prop=[secprop[0]]
            await User.updateOne({ email: useremail }, { property: prop })
        }
        else {
            const prop=secprop[0]
            proparray.push(prop)
            await User.updateOne({ email: useremail }, { property: proparray })
        }
        res.status(201).json({ message: 'property sucessfully created', data })

    } catch (error) {
        console.log(error.message)
        console.log('something went wrong while adding the property')
        res.status(500).json({ message: 'something went wrong in the server' })
    }
}

module.exports = addProperty