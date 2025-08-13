const Joi = require("joi")
const { PasswordRegex } = require("../../utils/regex")

const ChangePasswordDTO = Joi.object({
    oldPassword: Joi.string().required().messages({
        "string.empty": "Old password is required"
    }),

    newPassword: Joi.string().regex(PasswordRegex).required().messages({
        "string.empty":"Old password is required",
        "string.pattern.base": "Password must have an alphanumeric value with a special character and be 8-25 characters long"
    }),

    confirmPassword: Joi.string().valid(Joi.ref("newPassword")).required().messages({
        "any.only": "Password and confirmPassword must be same"
    })
})

module.exports = ChangePasswordDTO
