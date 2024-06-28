const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { jwtSecret } = require('../config/config');

exports.register = async ({ username, email, password }) => {
  const user = new User({ username, email, password: await bcrypt.hash(password, 10) });
  await user.save();
  return user;
};

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ user: { id: user.id } }, jwtSecret, { expiresIn: '1h' });
  return token;
};
