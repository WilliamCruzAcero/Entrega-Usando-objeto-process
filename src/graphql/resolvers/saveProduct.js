const { guardarProducto } = require("../../services/guardarProducto")
const Producto = require("../../models/producto");

const saveProduct = async ({email, product}) => {
    const producto = new Producto(product.name, product.price, product.image, product.amount);
    await guardarProducto(email, producto);
    return true
}

module.exports = {
    saveProduct
}