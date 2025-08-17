const authRouter = require("express").Router()

const authController = require("../controllers/auth.controller")
const loginCheck = require("../middleware/auth.middleware")
const validateBodyData = require("../middleware/validator.middleware")

const {RegisterDTO} = require("../validators/auth/register.validator")
const {LoginDTO} = require("../validators/auth/login.validator")
const {ChangePasswordDTO} = require("../validators/auth/change-password.validator")
const { resetPasswordDTO } = require("../validators/auth/reset-password.validator")
const { forgotPasswordDTO } = require("../validators/auth/forgot-password.validator")
const {DeactivateAccountDTO} = require("../validators/auth/deactivate-account.validator")
const { RefreshTokenDTO } = require("../validators/auth/refresh-token.validator")
const { UpdateProfileDTO } = require("../validators/auth/update-profile.validator")
const uploader = require("../middleware/uploader.middleware")

authRouter.post("/register", uploader().single('image') ,validateBodyData(RegisterDTO) ,authController.registerUser)
authRouter.post("/login", validateBodyData(LoginDTO) ,authController.userLogin)

authRouter.post("/password/forget", validateBodyData(forgotPasswordDTO) ,authController.userForgetPassword)
authRouter.patch("/password/reset", validateBodyData(resetPasswordDTO) ,authController.userResetPassword)
authRouter.patch("/password/change", validateBodyData(ChangePasswordDTO), authController.changePassword)

authRouter.patch("/account/deactivate", validateBodyData(DeactivateAccountDTO), authController.deactivateAccount)

authRouter.get("/activate/:token", authController.activateUserByToken)


authRouter.get('/me', loginCheck(['admin']) ,authController.getUserProfile)
authRouter.patch('/profile/update', loginCheck() , uploader().single('image') ,validateBodyData(UpdateProfileDTO), authController.updateUserProfile)

authRouter.post("/token/refresh", validateBodyData(RefreshTokenDTO) ,authController.refreshToken)

authRouter.post('/logout', authController.logoutUserAccount)

module.exports = authRouter
