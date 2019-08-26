const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: {
    type:String,
    required: true,
    unique: true
  },
  email: {
    type:String,
    required: true,
    unique: true
  }
});

const User = mongoose.model('user', userSchema); 

module.exports = {
  User
};