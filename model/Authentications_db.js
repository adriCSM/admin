import mongoose from 'mongoose';

const Authentication = mongoose.model(
  'Authentication',
  new mongoose.Schema({
    user_id: {
      type: String,
      ref: 'User',
      required: true,
    },
    token: {
      type: String,
      require: true,
    },
  }),
);

export default Authentication;
