const mongoose = require('mongoose');

const Certificate = mongoose.model(
  'Certificate',
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      image_name: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    },
  ),
);

module.exports = Certificate;
