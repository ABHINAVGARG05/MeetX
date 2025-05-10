const Activity = require('../models/activity');
const {successResponse, errorResponse} = require("../utils/responseModel")

exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    return res
        .json(successResponse(activities));
  } catch (err) {
    return res
        .json(errorResponse("Server Error"));
  }
};
