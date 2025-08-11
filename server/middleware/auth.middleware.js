const loginCheck = (allowedRole = null) => {
  return (req, res, next) => {
    console.log("I am in authRouter");
    next();
  };
};

module.exports = loginCheck;