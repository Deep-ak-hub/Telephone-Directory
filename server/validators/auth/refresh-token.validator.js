const Joi = require("joi")

const RefreshTokenDTO = Joi.object({
    refreshToken : Joi.string().required().min(20)
})

module.exports = {RefreshTokenDTO}