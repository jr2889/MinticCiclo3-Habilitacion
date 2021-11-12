const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema= new Schema({
 
  dni:{ type: Number, required: true,min: 0},
  descrip: { type: String, required: true },
  value:   { type: Number, required: true, min: 0 },
  cantidad:{ type: Number, required: true,min: 0}
  
});

const Product= mongoose.model("Product", productSchema);


module.exports =Product;