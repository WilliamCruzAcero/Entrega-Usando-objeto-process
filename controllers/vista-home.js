const { request, response } = require('express');

const vistaHome = (req, res = response) => {

    res.render('mostrar-home');
}
module.exports = {
    vistaHome
} 