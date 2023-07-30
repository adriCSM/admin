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
    quantity: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    evaluation: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
    sold_out: {
      type: Number,
      default: 0,
    },
    favorite: {
      type: Number,
      default: 0,
    },
  }),
);

export default Product;
