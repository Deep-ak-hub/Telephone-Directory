const authRouter = require("express").Router()
const authController = require("./auth.controller")

authRouter.post("/register", authController.registerUser)
authRouter.get("/activate/:token", authController.activateUserByToken)
authRouter.post("/login", authController.userLogin)
authRouter.post("/forgotPassword", authController.userForgetPassword)

authRouter.put("/resetPassword", authController.userResetPassword)
authRouter.get('profile', authController.getUserProfile)
authRouter.put('updateProfile', authController.updateUserProfile)

authRouter.post('/logout', authController.logoutUserAccount)

module.exports = authRouter