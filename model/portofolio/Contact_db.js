import mongoose from 'mongoose';

const Contact = mongoose.model(
  'Contact',
  mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      mobile_number: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
      isRead: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    },
  ),
);

export default Contact;
