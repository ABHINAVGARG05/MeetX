const express = require('express');
const router = express.Router();
const { getActivities } = require('../controllers/activityController');
const { bookActivity, getMyBookings } = require('../controllers/bookingController');
const protect = require('../middleware/auth');

router.get('/', getActivities);
router.post('/book/:id', protect, bookActivity);
router.get('/my-bookings', protect, getMyBookings);

module.exports = router;
