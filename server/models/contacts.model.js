const { string } = require('joi')
const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, requird: true},
    address: {type: String, required: true},
    dob: {type: Date, required: true },
    isPotential: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now}
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact
