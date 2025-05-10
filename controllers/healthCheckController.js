const mongoose = require("mongoose");
const { successResponse, errorResponse } = require("../utils/responseModel");

exports.healthCheck = async (req, res) => {
  try {
    const mongoState = mongoose.connection.readyState;
    const dbStatus = mongoState === 1 ? "Connected" : "Disconnected";

    const healthData = {
      server: "Up",
      mongoDB: dbStatus,
    };

    return res
        .json(successResponse(healthData, "Health check passed", 200));
  } catch (err) {
    return res
        .json(errorResponse("Health check failed", 500, err.message));
  }
};
