const authRouter = require("express").Router()
const loginCheck = require("../middleware/auth.middleware")
const authController = require("../controllers/auth.controller")

authRouter.post("/register", authController.registerUser)
authRouter.get("/activate/:token", authController.activateUserByToken)
authRouter.post("/login", authController.userLogin)
authRouter.post("/forgotPassword", authController.userForgetPassword)
authRouter.put("/resetPassword", authController.userResetPassword)

authRouter.get('profile', loginCheck(['admin']) ,authController.getUserProfile)
authRouter.put('updateProfile', loginCheck() ,authController.updateUserProfile)

authRouter.post('/logout', authController.logoutUserAccount)

module.exports = authRouter
