const mongoose = require('mongoose');

const Login = new mongoose.Schema({
  login: String,
}, { collection: 'logins' });

module.exports = mongoose.model('Login', Login);
