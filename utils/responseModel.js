const SUCCESS_MSG = "Request was successful";
const ERROR_MSG = "An error occurred";

const successResponse = (data = null, message = SUCCESS_MSG, status = 200) => {
  return {
    success: true,
    status,
    message,
    data
  };
};

const errorResponse = (message = ERROR_MSG, status = 500, error = null) => {
  return {
    success: false,
    status,
    message,
    error
  };
};

module.exports = { successResponse, errorResponse };
