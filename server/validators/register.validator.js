const Joi = require("joi");
const { UserRoles, Gender } = require("../config/constants");

const RoleExp = /^(customer|seller)$/;
const GenderExp = /^(male|female|other)$/;
const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[\W_-]).{8,25}/;

const RegisterDTO = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().max(21).allow(null, "").optional().default(null),
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

module.exports = RegisterDTO;
