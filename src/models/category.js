const mongoose = require('mongoose');

const Category = new mongoose.Schema(
  {
    nameCategory: { type: String, required: true },
    nameRouter: { type: String, required: true },
    words: { type: Array, required: true },
  },
  { collection: 'categories' }
);

module.exports = mongoose.model('Category', Category);
