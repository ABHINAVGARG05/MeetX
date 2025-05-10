const { check } = require('express-validator');

exports.registerValidation = [
  check('name', 'Name is required').notEmpty(),
  check('email', 'Valid email is required').isEmail(),
  check('phone', 'Phone number is required').notEmpty(),
  check('password', 'Password of min 6 chars is required').isLength({ min: 6 }),
];

exports.loginValidation = [
  check('email', 'Valid email is required').isEmail(),
  check('password', 'Password is required').exists(),
];
