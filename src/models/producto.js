class Producto {

    constructor (
        nombre,
        precio,
        imagen, 
        cantidad
    ){

        if (precio < 0) throw new Error('El precio debe ser por lo menos, cero')
        if (cantidad < 0) throw new Error('La cantidad debe ser por lo menos, cero')

        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = cantidad;
    }
}

module.exports = Producto