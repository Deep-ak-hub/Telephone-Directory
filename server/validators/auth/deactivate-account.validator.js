const Joi = require("joi");
const { PasswordRegex } = require("../../utils/regex");

const DeactivateAccountDTO = Joi.object({
  password: Joi.string().regex(PasswordRegex).required().messages({
    "string.empty": "Password is required to deactivate your account"
  }),
});

module.exports = {DeactivateAccountDTO};
