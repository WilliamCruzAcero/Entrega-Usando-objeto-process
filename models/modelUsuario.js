const mongoose = require('mongoose')

const getUserModel = () => {

    const usuarioSchema = new mongoose.Schema({
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
            cantidad: Number
        }]
    });

    return mongoose.model('usuarios', usuarioSchema);

}

module.exports = {
    getUserModel
}