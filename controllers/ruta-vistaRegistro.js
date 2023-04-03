const {response} = require('express');

const vistaRegistro = (res = response) => {
    res.render('formulario-registrar-usuario');
};

module.exports = {
    vistaRegistro
}