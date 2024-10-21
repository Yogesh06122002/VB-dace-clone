import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type:String,
    required: true,
  },
  disc: {
    type:String,
    
  },
  images:{
    type:[String]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Product = mongoose.model("Product",productSchema);
 
export default Product;


