const Booking = require("../models/booking");
const Activity = require("../models/activity");
const { successResponse, errorResponse } = require("../utils/responseModel");

exports.bookActivity = async (req, res) => {
  const { id } = req.params;

  try {
    const activity = await Activity.findOne({ id: id });
    if (!activity)
      return res
        .json(errorResponse("Activity not found.", 404));

    const existingBooking = await Booking.findOne({
      user: req.user._id,
      activity: activity._id,
    });

    if (existingBooking)
      return res
        .json(errorResponse("You have already booked this activity.", 400));

    const booking = new Booking({
      user: req.user._id,
      activity: activity._id,
    });

    await booking.save();
    return res
        .json(successResponse({ bookingId: booking._id } , "Activity Booked Successfully", 201 ));
  } catch (err) {
    return res
        .json(errorResponse(err.message));
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).populate(
      "activity"
    );
    return res
        .json(successResponse(bookings, "Booking Fetched Scuccessfully", 201));
  } catch (err) {
    return res
        .json(errorResponse(err.message));
  }
};
