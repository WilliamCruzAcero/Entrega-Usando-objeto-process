const {Router} = require('express');
const { tienda } = require('../controllers/vista-tienda');
const { verifyTokenWithRedirect } = require('../../src/services/verificarToken');

const routes = Router();

routes.get('/',verifyTokenWithRedirect, tienda)

module.exports = routes; 