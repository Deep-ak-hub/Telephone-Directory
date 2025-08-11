class AuthController {
  registerUser = (req, res, next) => {
    const data = req.body;
    res.json({
      data: { data },
      message: "Your account has been successfully registered",
      status: "OK",
    });
  };

  activateUserByToken = (req, res, next) => {
    res.json({
      data: {},
      message: "Your account has been registered successfully",
      status: "OK",
    });
  };

  userLogin = (req, res, next) => {
    res.json({
      data: {},
      message: "You have been logged in successfully",
      status: "OK",
    });
  };

  userForgetPassword = (req, res, next) => {
    res.json({
      data: {},
      message: "Do you want to forget your password?",
      status: "OK",
    });
  };

  userResetPassword = (req, res, next) => {
    res.json({
      data: {},
      message: "Do you want to reset your password?",
      status: "OK",
    });
  };

  getUserProfile = (req, res, next) => {
    res.json({
      data: {},
      message: "Profile fetched successfully",
      status: "OK",
    });
  };

  updateUserProfile = (req, res, next) => {
    res.json({
      data: {},
      message: "Profile updated successfully",
      status: "OK",
    });
  };

  changePassword = (req, res, next) => {
    res.json({
      data: {},
      message: "Password changed successfully",
      status: "OK",
    });
  };

  deactivateAccount = (req, res, next) => {
    res.json({
      data: {},
      message: "Account deactivated successfully",
      status: "OK",
    });
  };

  logoutUserAccount = (req, res, next) => {
    res.json({
      data: {},
      message: "Logout successful",
    });
  };

  refreshToken = (req, res, next) => {
    res.json({
      data: {
        accessToken: "newlyGeneratedAccessToken123",
      },
      message: "Token refreshed successfully",
      status: "OK",
    });
  };
}

const authController = new AuthController();

module.exports = authController;
