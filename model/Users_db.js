const mongoose = require('mongoose');

const Product = mongoose.model(
  'User',
  new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
      },
      phone_number: {
        type: String,
        require: true,
      },
      email: {
        type: String,
        require: true,
        unique: true,
      },
      password: {
        type: String,
        require: true,
      },
      role: {
        type: String,
        require: true,
        default: 'user',
      },
      isOnline: {
        type: Boolean,
      },
      pic: {
        type: String,
        required: true,
        default: 'https://img.icons8.com/ios-filled/50/000000/user-male-circle.png',
      },
    },
    {
      timestamps: true,
    },
  ),
);

module.exports = Product;
