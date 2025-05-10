const User = require("../models/user");
const generateToken = require("../utils/generateToken");
const { successResponse, errorResponse } = require("../utils/responseModel");
const { validationResult } = require("express-validator");

exports.registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json(errorResponse("Validation Error", 400, errors.array()));
  }

  const { name, email, phone, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json(errorResponse("User Already Exists", 400));
    }

    user = new User({ name, email, phone, password });
    await user.save();

    res
      .status(201)
      .json(successResponse(user, "User Created Successfully", 201));
  } catch (err) {
    res
      .status(500)
      .json(errorResponse("Server Error", 500, err.message));
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res
        .status(401)
        .json(errorResponse("Invalid Email or Password", 401));
    }

    const userData = {
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    };

    res
      .status(200)
      .json(successResponse(userData, "User Fetched Successfully", 200));
  } catch (err) {
    res
      .status(500)
      .json(errorResponse("Server Error", 500, err.message));
  }
};
