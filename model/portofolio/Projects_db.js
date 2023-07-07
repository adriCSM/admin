const mongoose = require('mongoose');

const Project = mongoose.model(
  'Project',
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      description: {
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
      url_site: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    },
  ),
);

module.exports = Project;
