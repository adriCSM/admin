import mongoose from 'mongoose';

const Cv = mongoose.model(
  'cv',
  mongoose.Schema({
    name: {
      type: String,
    },
    image: {
      type: String,
    },
  }),
);

export default Cv;
