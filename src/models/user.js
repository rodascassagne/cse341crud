const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  task: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  listToDo: {
    type: String,
    required: true
  }


});

module.exports = mongoose.model('User', userSchema);