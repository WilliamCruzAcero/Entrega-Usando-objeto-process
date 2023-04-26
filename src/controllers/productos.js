const { request, response} = require('express');
const { User } = require('../models/modelUsuario');

const productos = async (req = request, res = response) => {

    const { email, name } = req.secret
    const user = await User.findOne({ email });

    res.render('formulario-productos', {
        productos: user.productos,
        usuario: {
            nombre: name,
            email
        }
    });
};
module.exports = {
    productos
}
