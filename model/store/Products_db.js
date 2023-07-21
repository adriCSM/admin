import mongoose from 'mongoose';

const Product = mongoose.model(
  'Product',
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    cuantity: {
      type: String,
      require: true,
    },
  }),
);

export default Product;
