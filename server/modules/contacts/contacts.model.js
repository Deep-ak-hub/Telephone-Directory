const { string } = require('joi')
const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, requird: true},
    address: {type: String, requird: true},
    isPotential: {type: Boolean, default: false}
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact