const Joi = require("joi");
const { UserRoles, Gender } = require("../../config/constants");
const { PasswordRegex, RoleExp, GenderExp, PhoneRegex } = require("../../utils/regex");

const RegisterDTO = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().regex(PhoneRegex).allow(null, "").optional().default(null).messages({
    "string.pattern.base": "Phone must be a valid number"
  }),
  password: Joi.string().regex(PasswordRegex).required().messages({
    "string.empty": "Password cannot be null",
    "string.pattern.base":
      "Password must have an alpha numeric value with a special character and of 8 to 25",
  }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "any.only": "Password and confirmPassword must be same",
  }),

  role: Joi.string().regex(RoleExp).default(UserRoles.CUSTOMER),
  gender: Joi.string().regex(GenderExp),
  dob: Joi.date().less("now"),
  address: Joi.string().allow(null, "").optional().default(null),
});

module.exports = {RegisterDTO};
