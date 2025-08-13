const authRouter = require("express").Router()
const authController = require("../controllers/auth.controller")
const loginCheck = require("../middleware/auth.middleware")
const validateBodyData = require("../middleware/validator.middleware")
const RegisterDTO = require("../validators/auth/register.validator")
const LoginDTO = require("../validators/auth/login.validator")
const ChangePasswordDTO = require("../validators/auth/change-password.validator")
const { resetPasswordDTO } = require("../validators/auth/reset-password.validator")
const { forgotPasswordDTO } = require("../validators/auth/forgot-password.validator")

authRouter.post("/register", validateBodyData(RegisterDTO) ,authController.registerUser)
authRouter.get("/activate/:token", authController.activateUserByToken)
authRouter.post("/login", validateBodyData(LoginDTO) ,authController.userLogin)
authRouter.post("/forgotPassword", validateBodyData(forgotPasswordDTO) ,validateBodyData(ChangePasswordDTO) ,authController.userForgetPassword)
authRouter.put("/resetPassword", validateBodyData(resetPasswordDTO) ,authController.userResetPassword)

authRouter.get('/profile', loginCheck(['admin']) ,authController.getUserProfile)
authRouter.put('/updateProfile', loginCheck() ,authController.updateUserProfile)

authRouter.post('/logout', authController.logoutUserAccount)

module.exports = authRouter
