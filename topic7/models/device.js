const mongoose = require('mongoose');

module.exports = mongoose.model('Device', new mongoose.Schema({
  id: String,
  data: Array
}, { collection : 'demoDB' }));