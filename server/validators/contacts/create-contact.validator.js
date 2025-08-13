const Joi = require("joi")
const { PhoneRegex } = require("../../utils/regex")

const createContactDTO = Joi.object({
    name: Joi.string().max(50).required().messages({
        "string.empty" : "Name is required"
    }),
    phone: Joi.string().regex(PhoneRegex).required().messages({
        "string.pattern.base": "Phone must be a valid number",
        "string.empty": "Phone number is required",
    }),
    email: Joi.string().email().optional().allow(null, "").messages({
        "string.email" : "Please provide a valid email address"
    }),
    address: Joi.string().max(200).allow(null, "").optional().messages({
        "string.max" : "Address must not exceed 200 characters   "
    }),
    dob: Joi.date().less("now").messages({
        "date.less": "Date of birth cannot be in the future",
        "date.base": "Date of birth must be a valid date"
    })

})

module.exports = {createContactDTO}