const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// @route   POST /api/v1/auth/register
// @desc    Register a new user
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ msg: 'User already exists' });

    const user = await User.create({ name, email, password });
    res.status(201).json({ msg: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error });
  }
});

module.exports = router;
