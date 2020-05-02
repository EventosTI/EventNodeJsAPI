const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  adress: String,
  organization: String,
  link_to_subscribe: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
},{
  timestamps: true,
});

module.exports = mongoose.model('Events', EventSchema);