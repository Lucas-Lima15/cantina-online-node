const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: {
    type: String
  }
});

module.exports = mongoose.model('Student', studentSchema);