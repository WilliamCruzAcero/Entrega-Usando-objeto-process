const {request, response} = require('express');

const vistaCarrito = (req , res = response) => {
    res.render('carrito');
};

module.exports = {
    vistaCarrito,
}