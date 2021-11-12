const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ventaSchema= new Schema({
 
 
  dniventa:{ type: Number, required: true,min: 0},
    fecha: { type: Date},
  cliente: { type: String, required: true },
  dnicliente:   { type: Number, required: true, min: 0 },  
  
  dni:Number,     
  cantidad:Number,  
  estado:String,
  total:Number,


       

  
});

const Venta= mongoose.model("Venta", ventaSchema);