const Joi = require("joi")
const { PasswordRegex } = require("../../utils/regex")

const resetPasswordDTO = Joi.object({
    token: Joi.string().required().messages({
        "string.empty": "Reset token is required"
    }),

    newPassword: Joi.string().regex(PasswordRegex).required().messages({
        "string.empty": "New Password is required",
        "string.pattern.base": "Password must have alphanumeric value with a special character and be 8-25 characters long"
    }),
    
    confirmPassword: Joi.string().valid(Joi.ref("newPassword")).required().messages({
        "any.only": "Password and ConfirmPassword must be same"
    })
})


module.exports = {resetPasswordDTO}