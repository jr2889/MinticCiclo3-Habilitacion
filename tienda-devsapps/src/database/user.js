const mongoose = require ('mongoose');
const Schema = mongoose.Schema


const userSchema = new Schema ({
    cedula: {type: Number, require: true, unique:true},
    name: {type: String, require: true},
    email: {type: String, unique:true, lowercase:true, require: true},
    role: {type: String, unique:false, require: true},
    signupDate: {type: Date, default: Date.now()},
    
});
module.exports = mongoose.model('user', userSchema);

//module.exports= user;