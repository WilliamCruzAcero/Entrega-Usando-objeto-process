const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
    type: String,
    avatar: String,
    name: String,
    lastname: String,
    age: Number,
    phone: Number,
    email: String,
    password: String,
    address:String,
    city: String,
    country: String,
    productos: [{
        nombre: String,
        precio: Number,
        imagen: String,
        cantidad: Number,
        id: Number
    }]
});

module.exports = {
    User: mongoose.model('usuarios', usuarioSchema)
}