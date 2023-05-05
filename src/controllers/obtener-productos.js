const { request, response} = require('express');
const {User } = require('../models/modelUsuario');

const obtenerProductos = async (req = request, res = response) => {

    const { email } = req.secret
    const user = await User.findOne({ email });

    res.json({
        productos: user.productos,
    });
};

module.exports = {
   obtenerProductos
}
