const mongoose = require('mongoose');

const WeightModelSchema = new mongoose.Schema({
  weight: {
    type: Number,
    required: true
  },
  week: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Weight', WeightModelSchema);