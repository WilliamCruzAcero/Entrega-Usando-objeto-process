const { request, response } = require('express');

const vistaHome = (req, res = response) => {

    res.render('home');
}
module.exports = {
    vistaHome
} 