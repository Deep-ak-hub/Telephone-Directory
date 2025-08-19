const Joi = require("joi")
const { PhoneRegex } = require("../../utils/regex")

UpdateProfileDTO = Joi.object({
    name: Joi.string().min(2).max(50),
    email: Joi.string().email().optional(),
    phone: Joi.string().regex(PhoneRegex).optional(),
    address: Joi.string().max(200).optional()
}).min(1)

module.exports = {UpdateProfileDTO}