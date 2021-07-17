const mongoose = require('mongoose');

const User = new mongoose.Schema({
  login: { type: String, required: true },
  password: { type: String, required: true },
}, { collection: 'users' });

module.exports = mongoose.model('User', User);
