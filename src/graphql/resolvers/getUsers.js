const { obtenerUsuarios } = require("../../services/obtenerUsuarios.service")

const getUsers = async () => {

    const usuarios = await obtenerUsuarios()

    const users = usuarios.map(usuario => {

        const products = usuario.productos.map(prod => {
            return {
                name: prod.nombre,
                price: prod.precio,
                image: prod.imagen,
                amount: prod.cantidad,
            }
        });

        const user = {
            id: usuario.id,
            name: usuario.name,
            lastname: usuario.lastname,
            email: usuario.email,
            products
        }

        return user;
    });

    return users;
}

module.exports = {
    getUsers
}