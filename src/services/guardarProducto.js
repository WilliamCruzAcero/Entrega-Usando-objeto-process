const { User } = require("../models/mongo.usuario");
const { verificarCampoRequerido } = require("./verificarCampoRequerido");


const guardarProducto = async ( email, {nombre, precio, imagen, cantidad} ) => {

    let mensajeBase = 'Los siguientes campos son requeridos:'
    const camposFaltantes = []

    verificarCampoRequerido(nombre, `${mensajeBase} Nombre`);

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
            const mensaje = mensajeBase + ' ' + camposFaltantes.join(', ');
            throw new Error(mensaje); 
        }

        user.productos.push({
            nombre,
            precio,
            imagen,
            cantidad
        })
    }

    await user.save()
}

module.exports = {
    guardarProducto
}