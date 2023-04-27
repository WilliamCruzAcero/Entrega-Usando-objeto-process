const { request, response } = require('express');
const { User } = require('../models/modelUsuario');

const tienda = async (req, res = response) => {

    const { email, name, lastname } = req.secret
    const user = await User.findOne({email});

    res.render('tienda', {
        productos: user.productos,
        usuario: {
            nombre: name,
            apellido: lastname,
            email
        }
    })
}
module.exports = {
    tienda
} 