const User = require("../models/userModel");
const ErrorResponse = require("../utils/errorResponse");

module.exports.signup = async (req, res, next) => {
  const { email } = req.body;

  const emailExit = await User.findOne({ email });
  if (emailExit) {
    return next(new ErrorResponse("Email already exits", 400));
  }

  try {
    const user = await User.create(req.body);
    res.status(201).json({
      success: true,
      user,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return next(new ErrorResponse("Please add an email", 403));
    }
    if (!password) {
      return next(new ErrorResponse("Please add a password", 403));
    }

    const user = await User.findOne({ email });
    if (!user) {
      return next(new ErrorResponse("invalid credentials", 400));
    }

    const checkPw = await user.comparePassword(password);
    if (!checkPw) {
      return next(new ErrorResponse("invalid credentials", 400));
    }

    sendTokenResponse(user, 200, res);
    console.log(user)
  } catch (error) {
    next(error);
  }
  
};

const sendTokenResponse = async (user, codeStatus, res) => {
  const token = await user.getJwtToken();
  res
    .status(codeStatus)
    .cookie("token", token, { maxAge: 60 * 60 * 1000, httpOnly: true })
    .json({
      success: true,
      role: user.role,
    });
    console.log(token)
};

// log out
module.exports.logout = (req,res,next)=>{
  res.clearCookie("token");
  res.status(200).json({
    success:true,
    message: "logged out"
  })
}
