import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  }
});

const ProductModel = mongoose.model('Product',schema);
export default ProductModel;
