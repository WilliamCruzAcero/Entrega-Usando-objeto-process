const { request, response } = require('express');
const { User } = require('../models/modelUsuario');
const { verificarCampoRequerido } = require('../verify/verifyCampo');

const crearProd = async (req = request, res = response) => {
    const { email } = req.secret;
    const { nombre, precio, imagen, cantidad } = req.body;

    let err = 'Los siguientes campos son requeridos:'
    const camposFaltantes = []

    try {
        verificarCampoRequerido(nombre, `${err} Nombre`);
    } catch (error) {
        return res.status(error.status).json({ error: error.message })
    }

    const user = await User.findOne({ email });
    const productoExistente = user.productos.find(producto => producto.nombre === nombre);

    if (productoExistente) {

        const posicionDelProducto = user.productos.indexOf(productoExistente);

        if (precio) productoExistente.precio = precio
        if (imagen) productoExistente.imagen = imagen
        if (cantidad) productoExistente.cantidad = cantidad

        user.productos[posicionDelProducto] = productoExistente;

    } else {

        try {
            verificarCampoRequerido(precio);
        } catch (error) {
            camposFaltantes.push('Precio')
        }

        try {
            verificarCampoRequerido(imagen);
        } catch (error) {
            camposFaltantes.push('Imagen')
        }

        try {
            verificarCampoRequerido(cantidad);
        } catch (error) {
            camposFaltantes.push('Cantidad')
        }

        if (camposFaltantes.length) {
            err = err + ' ' + camposFaltantes.join(', ');
            return res.status(StatusCodes.BAD_REQUEST).json({ error: err })
        }

        user.productos.push({
            nombre,
            precio,
            imagen,
            cantidad
        })
    }

    await user.save()

    res.json({});

}
module.exports = {
    crearProd
}