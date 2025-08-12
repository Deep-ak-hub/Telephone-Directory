const authRouter = require("express").Router()
const authController = require("../controllers/auth.controller")
const loginCheck = require("../middleware/auth.middleware")
const validateBodyData = require("../middleware/validator.middleware")
const RegisterDTO = require("../validators/register.validator")
const LoginDTO = require("../validators/login.validator")

authRouter.post("/register", validateBodyData(RegisterDTO) ,authController.registerUser)
authRouter.get("/activate/:token", authController.activateUserByToken)
authRouter.post("/login", validateBodyData(LoginDTO) ,authController.userLogin)
authRouter.post("/forgotPassword", authController.userForgetPassword)
authRouter.put("/resetPassword", authController.userResetPassword)

authRouter.get('/profile', loginCheck(['admin']) ,authController.getUserProfile)
authRouter.put('/updateProfile', loginCheck() ,authController.updateUserProfile)

authRouter.post('/logout', authController.logoutUserAccount)

module.exports = authRouter
