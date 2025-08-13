const Joi = require("joi")
const { PhoneRegex } = require("../../utils/regex")

const updateContactDTO = Joi.object({
    name: Joi.string().max(50).min(1).optional().messages({
        "string.max": "Name must not exceed 50 characters long",
        "string.min" : "Name must be a character long"
    }),
    phone: Joi.string().regex(PhoneRegex).optional().messages({
        "string.pattern.base": "phone must be a valid number"
    }),
    email: Joi.string().email().optional().allow("",null).messages({
        "string.email": "Please provide a valid email address"
    }),
    address: Joi.string().allow(null, "").max(200).optional().messages({
        "string.max": "Address must not exceed 200 characters "
    }),
    dob: Joi.date().less("now").optional().messages({
        "date.less": "Date of birth cannot be in the future",
        "date.base": "Date of birth  must be a valid date"
    })
}).min(1).messages({
    "object.min": "At least one field must be provided to update"
})

module.exports = {updateContactDTO}