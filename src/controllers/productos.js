const { request, response} = require('express');
const {User } = require('../models/modelUsuario');

const productos = async (req = request, res = response) => {

    const { email, name, lastname } = req.secret
    const user = await User.findOne({ email });

    res.render('formulario-productos', {
        productos: user.productos,
        usuario: {
            nombre: name,
            apellido: lastname,
            email
        }
    });
};
module.exports = {
    productos
}
