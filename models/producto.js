const  mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productoSchema = new Schema({
    codigo:{type:Number,require:[true,'codigo de barras necesario']},
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    tamaño:{type:String,require:[true, 'tamaño del producto necesario']},
    precioUni: { type: Number, required:false},
    descripcion: { type: String, required: false },
});


module.exports = mongoose.model('Producto', productoSchema);