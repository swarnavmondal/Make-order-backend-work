const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
  productName: {
    type: String,
    required: true,
    unique: true,
  },
  productPrice: {
    type: String,
    required: true,
  },
});


const Product = mongoose.model("product", ProductSchema);
module.exports = Product;
