import mongoose, { ObjectId } from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minLength: 3,
  },
  price: {
    type: Number,
    require: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  categoryId: {
    type: ObjectId,
    ref: 'Category'
  }
});

// const productSchema = new Schema({ name: String, price: Number });
export default mongoose.model("products", productSchema);