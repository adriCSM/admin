import mongoose from 'mongoose';

const Donation = mongoose.model(
  'Donation',
  new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    grossAmount: {
      type: Number,
      required: true,
    },
  }),
);

export default Donation;
